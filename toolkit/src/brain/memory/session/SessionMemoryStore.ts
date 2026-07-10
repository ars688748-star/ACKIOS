import type { MemoryEntry } from "../MemoryEntry.js";
import type { MemoryQuery } from "../MemoryQuery.js";

import { AbstractMemoryStore } from "../stores/AbstractMemoryStore.js";

export class SessionMemoryStore extends AbstractMemoryStore {

    public async query(query: MemoryQuery): Promise<MemoryEntry[]> {

        let result = [...this.entries.values()];

        if (query.kind) {
            const kind = query.kind;
            result = result.filter(entry => entry.kind === kind);
        }

        if (query.text) {
            const search = query.text.toLowerCase();

            result = result.filter(entry =>
                JSON.stringify(entry.content)
                    .toLowerCase()
                    .includes(search)
            );
        }

        if (query.tags) {

            const tags = query.tags;

            result = result.filter(entry =>
                tags.every(tag => entry.tags?.includes(tag))
            );

        }

        if (query.metadata) {

            const metadata = query.metadata;

            result = result.filter(entry => {

                const entryMetadata = entry.metadata;

                if (!entryMetadata) {
                    return false;
                }

                return Object.entries(metadata).every(
                    ([key, value]) => entryMetadata[key] === value
                );

            });

        }

        if (query.minScore !== undefined) {

            const minScore = query.minScore;

            result = result.filter(
                entry => (entry.score ?? 0) >= minScore
            );

        }

        result.sort(
            (a, b) => (b.score ?? 0) - (a.score ?? 0)
        );

        if (query.limit !== undefined) {

            const limit = query.limit;

            result = result.slice(0, limit);

        }

        return result;

    }

}
