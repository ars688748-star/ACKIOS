import { ArchitectureSeverity } from "./ArchitectureSeverity.js";

export interface ArchitectureRuleViolation{

    rule:string;

    message:string;

    severity:ArchitectureSeverity;

    file?:string;

    type?:string;

}
