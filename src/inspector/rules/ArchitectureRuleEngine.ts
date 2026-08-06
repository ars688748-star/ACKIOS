import { InspectionContext } from "../models/InspectionContext.js";

import { ArchitectureRuleRegistry } from "./core/ArchitectureRuleRegistry.js";
import { RuleRunner } from "./core/RuleRunner.js";

import { RuntimeRegistrationRule } from "./builtin/RuntimeRegistrationRule.js";

export class ArchitectureRuleEngine{

    public async execute(
        context:InspectionContext
    ):Promise<void>{

        const registry =
            new ArchitectureRuleRegistry();

        registry.register(
            new RuntimeRegistrationRule()
        );

        await new RuleRunner().execute(
            registry,
            context
        );

    }

}
