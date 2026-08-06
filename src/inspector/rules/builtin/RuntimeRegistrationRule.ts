import { promises as fs } from "node:fs";

import { InspectionContext } from "../../models/InspectionContext.js";
import { ArchitectureSeverity } from "../../models/ArchitectureSeverity.js";

import { IArchitectureRule } from "../core/IArchitectureRule.js";

import { CompositionClassifier } from "../services/CompositionClassifier.js";
import { CompositionKind } from "../services/CompositionKind.js";
import { ServiceInstantiationScanner } from "../services/ServiceInstantiationScanner.js";
import { ViolationSeverityResolver } from "../services/ViolationSeverityResolver.js";

export class RuntimeRegistrationRule
implements IArchitectureRule{

    public readonly metadata={

        id:"ACK-0001",

        name:"Runtime Registration",

        severity:ArchitectureSeverity.WARNING

    };

    private readonly scanner =
        new ServiceInstantiationScanner();

    private readonly classifier =
        new CompositionClassifier();

    private readonly severityResolver =
        new ViolationSeverityResolver();

    public async execute(
        context:InspectionContext
    ):Promise<void>{

        for(const file of context.files){

            const kind =
                this.classifier.classify(file);

            if(kind!==CompositionKind.Regular){
                continue;
            }

            const content =
                await fs.readFile(file,"utf8");

            for(const type of this.scanner.scan(content)){

                context.result.violationsList.push({

                    rule:this.metadata.name,

                    severity:
                        this.severityResolver.resolve(
                            file,
                            kind
                        ),

                    file,

                    type,

                    message:
                        "Resolve through ServiceContainer."

                });

            }

        }

    }

}
