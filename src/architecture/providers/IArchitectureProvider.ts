import { InspectionContext } from "../../inspector/models/InspectionContext.js";

export interface IArchitectureProvider{

    readonly name:string;

    enrich(
        context:InspectionContext
    ):Promise<void>;

}
