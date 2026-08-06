import { InspectionContext } from "../../models/InspectionContext.js";
import { ArchitectureRuleMetadata } from "../../models/ArchitectureRuleMetadata.js";

export interface IArchitectureRule{

    readonly metadata:ArchitectureRuleMetadata;

    execute(
        context:InspectionContext
    ):Promise<void>;

}
