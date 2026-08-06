import { RepositoryBoundaryResult } from "./RepositoryBoundaryResult.js";

export class RepositoryBoundaryAdapter{

    public async analyze():Promise<RepositoryBoundaryResult>{

        return{

            safeToPublish:true,

            violations:[]

        };

    }

}
