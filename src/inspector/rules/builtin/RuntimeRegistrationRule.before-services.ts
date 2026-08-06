import { promises as fs } from "node:fs";

import { InspectionContext } from "../../models/InspectionContext.js";
import { IArchitectureRule } from "../core/IArchitectureRule.js";

import { ServiceTypes } from "../../models/ServiceTypes.js";
import { ArchitectureSeverity } from "../../models/ArchitectureSeverity.js";
import { AllowedCompositionRoots } from "../../models/AllowedCompositionRoots.js";
import { AllowedCompositionPatterns } from "../../models/AllowedCompositionPatterns.js";

export class RuntimeRegistrationRule
implements IArchitectureRule{

    public readonly metadata={

        id:"ACK-0001",

        name:"Runtime Registration",

        severity:ArchitectureSeverity.WARNING

    };

    public async execute(
        context:InspectionContext
    ):Promise<void>{

        for(const file of context.files){

            const normalized =
                file.replace(/\\/g,"/");

            const allowed =

                AllowedCompositionRoots.some(root =>
                    normalized.includes(root)
                ) ||

                AllowedCompositionPatterns.some(pattern =>
                    normalized.endsWith(pattern)
                );

            if(allowed){
                continue;
            }

            const content =
                await fs.readFile(file,"utf8");

            for(const type of ServiceTypes){

                const expression =
                    new RegExp("\\bnew\\s+" + type + "\\b","g");

                if(!expression.test(content)){
                    continue;
                }

                context.result.violationsList.push({

                    rule:this.metadata.name,

                    severity:
    normalized.includes("/cli/")
        ? ArchitectureSeverity.INFO
        : normalized.includes("/guardian/")
            ? ArchitectureSeverity.ERROR
            : ArchitectureSeverity.WARNING,

                    file,

                    type,

                    message:
                        "Resolve through ServiceContainer."

                });

            }

        }

    }

}







