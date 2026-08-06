import { ArchitectureRuleViolation } from "./ArchitectureRuleViolation.js";

export interface ArchitectureInspectionResult {

    services:number;

    files:number;

    directNews:number;

    imports:number;

    infrastructureNews:number;

    serviceNews:number;

    violationNews:number;

    violationsList:ArchitectureRuleViolation[];

    warnings:string[];

    recommendations:string[];

}

