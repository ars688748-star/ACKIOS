import { ArchitectureRuleEngine } from "./ArchitectureRuleEngine.js";
import { GraphBuilder } from "./graph/GraphBuilder.js";
import { ArchitectureParser } from "./parser/ArchitectureParser.js";
import { ArchitectureScanner } from "./scanner/ArchitectureScanner.js";
import { SourceLoader } from "./source/SourceLoader.js";
export class ArchitectureAnalysisEngine {
    scanner;
    parser;
    sourceLoader;
    graphBuilder;
    ruleEngine;
    constructor(scanner = new ArchitectureScanner(), parser = new ArchitectureParser(), sourceLoader = new SourceLoader(), graphBuilder = new GraphBuilder(), ruleEngine = new ArchitectureRuleEngine([])) {
        this.scanner = scanner;
        this.parser = parser;
        this.sourceLoader = sourceLoader;
        this.graphBuilder = graphBuilder;
        this.ruleEngine = ruleEngine;
    }
    async analyze(root) {
        const nodes = await this.scanner.scan(root);
        const fileNodes = nodes.filter(node => node.type === "file");
        await Promise.all(fileNodes.map(node => this.sourceLoader.load(node.path)));
        const scannedFiles = fileNodes.length;
        const scannedDirectories = nodes.filter(node => node.type === "directory").length;
        return {
            scannedFiles,
            scannedDirectories,
            violations: []
        };
    }
}
