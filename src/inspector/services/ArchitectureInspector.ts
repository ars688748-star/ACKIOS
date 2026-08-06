import { ArchitectureInspectionResult } from "../models/ArchitectureInspectionResult.js";

import { RuntimeAnalyzer } from "../analyzers/RuntimeAnalyzer.js";
import { ServiceAnalyzer } from "../analyzers/ServiceAnalyzer.js";
import { DirectNewAnalyzer } from "../analyzers/DirectNewAnalyzer.js";

import { PlatformScanner } from "../../platform/scanner/services/PlatformScanner.js";

import { ArchitectureRuleEngine } from "../rules/ArchitectureRuleEngine.js";
import { ArchitectureProviderPipeline } from "../../architecture/providers/ArchitectureProviderPipeline.js";

export class ArchitectureInspector {

    public constructor(

        private readonly runtime: RuntimeAnalyzer,

        private readonly services: ServiceAnalyzer,

        private readonly directNew: DirectNewAnalyzer,

        private readonly scanner: PlatformScanner,

        private readonly rules: ArchitectureRuleEngine,

        private readonly providers: ArchitectureProviderPipeline

    ) {}


    public async inspect(): Promise<ArchitectureInspectionResult> {

        const result: ArchitectureInspectionResult = {

            services:0,

            files:0,

            directNews:0,

            imports:0,

            infrastructureNews:0,

            serviceNews:0,

            violationNews:0,

            violationsList:[],

            warnings:[],

            recommendations:[]

        };


        const scan =
            await this.scanner.scan({

                root:"src",

                extensions:[".ts"],

                excludedDirectories:[

                    "node_modules",

                    "dist",

                    ".git"

                ]

            });


        result.files =
            scan.files.length;


        await this.runtime.analyze(result);


        await this.services.analyze(result);


        await this.directNew.analyze(

            scan.files,

            result

        );


        await this.providers.execute({

            result,

            files:scan.files

        });


        await this.rules.execute({

            result,

            files:scan.files

        });


        result.violationNews =
            result.violationsList.length;


        return result;

    }

}
