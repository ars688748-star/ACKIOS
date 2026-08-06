import { IPublicationGuardian } from "./contracts/IPublicationGuardian.js";

import { PublicationScanner } from "./scanner/PublicationScanner.js";
import { PublicationClassifier } from "./classifier/PublicationClassifier.js";
import { IPAnalyzer } from "./analyzer/IPAnalyzer.js";
import { PolicyEngine } from "./policy/PolicyEngine.js";
import { SnapshotPipeline } from "./snapshot/SnapshotPipeline.js";

import { SnapshotValidator } from "./validator/SnapshotValidator.js";
import { Publisher } from "./publisher/Publisher.js";

import { GuardianResult } from "./models/GuardianResult.js";
import { PublicationReport } from "./models/PublicationReport.js";

export class Guardian implements IPublicationGuardian {

    private readonly scanner = new PublicationScanner();
    private readonly classifier = new PublicationClassifier();
    private readonly analyzer = new IPAnalyzer();
    private readonly policy = new PolicyEngine();
    private readonly snapshot = new SnapshotPipeline();

    private readonly validator = new SnapshotValidator();
    private readonly publisher = new Publisher();

    public async execute(): Promise<GuardianResult> {

        const files =
            await this.scanner.execute();

        const classified =
            await this.classifier.execute(files);

        await this.analyzer.execute(
            classified.map(x => x.path)
        );

        await this.policy.execute();

        const snapshot =
            await this.snapshot.execute(
                classified
            );

        const report: PublicationReport = {

            scanned: classified.length,

            public: classified.filter(x=>x.kind==="PUBLIC").length,

            internal: classified.filter(x=>x.kind==="INTERNAL").length,

            private: classified.filter(x=>x.kind==="PRIVATE").length,

            commercial: classified.filter(x=>x.kind==="COMMERCIAL").length,

            research: classified.filter(x=>x.kind==="RESEARCH").length,

            profile: "OpenSource",

            risk: "LOW",

            recommendations: []

        };

        return {

            files,

            classified,

            report,

            snapshot

        };

    }

    async scan(): Promise<string[]> {

        return this.scanner.execute();

    }

    async classify(files:string[]):Promise<void>{

        await this.classifier.execute(files);

    }

    async analyze():Promise<void>{}

    async buildSnapshot():Promise<void>{}

    async validate():Promise<void>{

        await this.validator.execute();

    }

    async publish():Promise<void>{

        await this.publisher.execute();

    }

}
