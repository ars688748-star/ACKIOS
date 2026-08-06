import { InspectionContext } from "../../models/InspectionContext.js";

import { ArchitectureRuleRegistry } from "./ArchitectureRuleRegistry.js";

export class RuleRunner{

    public async execute(

        registry:ArchitectureRuleRegistry,

        context:InspectionContext

    ):Promise<void>{

        for(const rule of registry.getRules()){

            await rule.execute(context);

        }

    }

}
