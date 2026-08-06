import { ArchitectureAssessment } from "../../architecture/analysis/ArchitectureAssessment.js";

export interface ACKIOSPlatformState{

    architecture?:ArchitectureAssessment;

    runtimeStatus?:string;

    workflowStatus?:string;

    repositoryStatus?:string;

    healthStatus?:string;

}
