import { RepositoryBoundaryResult } from "./RepositoryBoundaryResult.js";

export class RepositoryBoundaryService{

    public async analyze():Promise<RepositoryBoundaryResult>{

        throw new Error(
            "RepositoryBoundaryService adapter is not connected yet."
        );

    }

}
