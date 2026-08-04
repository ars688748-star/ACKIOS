import type { MemoryEntry } from "../MemoryEntry.js";
import type { MemoryQuery } from "../MemoryQuery.js";

import { AbstractMemoryStore } from "../stores/AbstractMemoryStore.js";

export class SemanticMemoryStore extends AbstractMemoryStore {

    public async query(query: MemoryQuery): Promise<MemoryEntry[]> {

        let result = [...this.entries.values()];

        if (query.kind) {

            const kind = query.kind;

            result = result.filter(
                entry => entry.kind === kind
            );

        }

        if (query.text) {

            const search = query.text.toLowerCase();

            result = result.filter(entry =>
                JSON.stringify(entry.content)
                    .toLowerCase()
                    .includes(search)
            );

        }

        return result;

    }

}
