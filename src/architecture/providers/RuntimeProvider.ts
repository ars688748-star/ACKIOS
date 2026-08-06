import { InspectionContext } from "../../inspector/models/InspectionContext.js";
import { IArchitectureProvider } from "./IArchitectureProvider.js";

export class RuntimeProvider
implements IArchitectureProvider{

    public readonly name =
        "Runtime";

    public async enrich(
        _context:InspectionContext
    ):Promise<void>{

    }

}
