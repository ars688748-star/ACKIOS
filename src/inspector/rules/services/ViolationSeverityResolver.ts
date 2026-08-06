import { ArchitectureSeverity } from "../../models/ArchitectureSeverity.js";
import { CompositionKind } from "./CompositionKind.js";

export class ViolationSeverityResolver{

    public resolve(
        file:string,
        kind:CompositionKind
    ):ArchitectureSeverity{

        const normalized =
            file.replace(/\\/g,"/");

        if(kind!==CompositionKind.Regular){
            return ArchitectureSeverity.INFO;
        }

        if(normalized.includes("/guardian/")){
            return ArchitectureSeverity.ERROR;
        }

        if(normalized.includes("/cli/")){
            return ArchitectureSeverity.INFO;
        }

        return ArchitectureSeverity.WARNING;

    }

}
