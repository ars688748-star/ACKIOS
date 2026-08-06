import { ArchitectureInspectionResult } from "./ArchitectureInspectionResult.js";
import { RepositoryBoundaryResult } from "../../architecture/boundary/RepositoryBoundaryResult.js";

export interface InspectionContext{

    result:ArchitectureInspectionResult;

    files:string[];

    repositoryBoundary?:RepositoryBoundaryResult;

}

