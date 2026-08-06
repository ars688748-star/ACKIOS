import { InspectionContext } from "../../inspector/models/InspectionContext.js";
import { RepositoryBoundaryResult } from "../boundary/RepositoryBoundaryResult.js";

export interface ArchitectureState{

    inspection:InspectionContext;

    repository?:RepositoryBoundaryResult;

}
