import { ArchitectureRuleEngine } from "./ArchitectureRuleEngine.js";
import { GraphBuilder } from "./graph/GraphBuilder.js";
import type { ArchitectureReport } from "./model/ArchitectureReport.js";
import { ArchitectureParser } from "./parser/ArchitectureParser.js";
import { ArchitectureScanner } from "./scanner/ArchitectureScanner.js";

export class ArchitectureAnalysisEngine {

    public constructor(

        private readonly scanner =
            new ArchitectureScanner(),

        private readonly parser =
            new ArchitectureParser(),

        private readonly graphBuilder =
            new GraphBuilder(),

        private readonly ruleEngine =
            new ArchitectureRuleEngine([])

    ) {}

    public async analyze(
        root: string
    ): Promise<ArchitectureReport> {

        const nodes =
            await this.scanner.scan(root);

        const scannedFiles =
            nodes.filter(node => node.type === "file").length;

        const scannedDirectories =
            nodes.filter(node => node.type === "directory").length;

        return {

            scannedFiles,

            scannedDirectories,

            violations: []

        };

    }

}
