import { ImportResolver } from "./ImportResolver.js";
export class ArchitectureParser {
    resolver = new ImportResolver();
    parse(files) {
        const nodes = [];
        const edges = [];
        const importRegex = /import\s+.*?\s+from\s+["'](.+?)["']/g;
        for (const file of files) {
            nodes.push({
                name: file.path.split("/").pop() ?? file.path,
                path: file.path,
                type: "file"
            });
            for (const match of file.content.matchAll(importRegex)) {
                edges.push({
                    from: file.path,
                    to: this.resolver.resolve(file.path, match[1]),
                    type: "import"
                });
            }
        }
        return {
            nodes,
            edges
        };
    }
}
