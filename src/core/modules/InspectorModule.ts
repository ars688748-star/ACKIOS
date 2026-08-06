import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";

import { ArchitectureInspector } from "../../inspector/services/ArchitectureInspector.js";
import { PlatformScanner } from "../../platform/scanner/services/PlatformScanner.js";

import { RuntimeAnalyzer } from "../../inspector/analyzers/RuntimeAnalyzer.js";
import { ServiceAnalyzer } from "../../inspector/analyzers/ServiceAnalyzer.js";
import { DirectNewAnalyzer } from "../../inspector/analyzers/DirectNewAnalyzer.js";



import { ArchitectureRuleEngine } from "../../inspector/rules/ArchitectureRuleEngine.js";

import { ArchitectureProviderPipeline } from "../../architecture/providers/ArchitectureProviderPipeline.js";

import { ArchitectureScoreEngine } from "../../architecture/score/ArchitectureScoreEngine.js";
import { ArchitectureAssessmentEngine } from "../../architecture/analysis/ArchitectureAssessmentEngine.js";


export class InspectorModule implements IServiceModule {


    public register(
        container: ServiceContainer
    ): void {


        container.register(
            "runtimeAnalyzer",
            new RuntimeAnalyzer()
        );


        container.register(
            "serviceAnalyzer",
            new ServiceAnalyzer()
        );


        container.register(
            "directNewAnalyzer",
            new DirectNewAnalyzer()
        );



        container.register(
            "architectureRuleEngine",
            new ArchitectureRuleEngine()
        );


        container.register(
            "architectureProviderPipeline",
            new ArchitectureProviderPipeline()
        );


        container.register(
            "architectureInspector",
            new ArchitectureInspector(

                container.resolve<RuntimeAnalyzer>(
                    "runtimeAnalyzer"
                ),

                container.resolve<ServiceAnalyzer>(
                    "serviceAnalyzer"
                ),

                container.resolve<DirectNewAnalyzer>(
                    "directNewAnalyzer"
                ),

                container.resolve<PlatformScanner>(
                    "platformScanner"
                ),

                container.resolve<ArchitectureRuleEngine>(
                    "architectureRuleEngine"
                ),

                container.resolve<ArchitectureProviderPipeline>(
                    "architectureProviderPipeline"
                )

            )
        );


        container.register(
            "architectureScoreEngine",
            new ArchitectureScoreEngine()
        );


        container.registerFactory(
            "architectureAssessment",
            c => new ArchitectureAssessmentEngine(

                c.resolve<ArchitectureInspector>(
                    "architectureInspector"
                ),

                c.resolve<ArchitectureScoreEngine>(
                    "architectureScoreEngine"
                )

            )
        );


    }

}


