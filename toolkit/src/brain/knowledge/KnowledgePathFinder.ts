import { KnowledgeRelation } from "./KnowledgeRelation.js";

export class KnowledgePathFinder {

    public findPath(
        sourceId: string,
        targetId: string,
        relations: readonly KnowledgeRelation[]
    ): readonly string[] {

        const queue: string[][] = [[sourceId]];
        const visited = new Set<string>();

        while (queue.length > 0) {

            const path = queue.shift()!;
            const current = path[path.length - 1];

            if (current === targetId) {
                return path;
            }

            if (visited.has(current)) {
                continue;
            }

            visited.add(current);

            for (const relation of relations) {

                if (relation.sourceId !== current) {
                    continue;
                }

                queue.push([...path, relation.targetId]);

            }

        }

        return [];

    }

}
