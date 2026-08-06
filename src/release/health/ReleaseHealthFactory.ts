import { ReleaseHealthService } from "./ReleaseHealthService.js";

import { RepositoryHealthCheck } from "./RepositoryHealthCheck.js";
import { VersionHealthCheck } from "./VersionHealthCheck.js";
import { BuildHealthCheck } from "./BuildHealthCheck.js";
import { TestHealthCheck } from "./TestHealthCheck.js";


export class ReleaseHealthFactory {


    public static create(){


        return new ReleaseHealthService(


            new RepositoryHealthCheck(),


            new VersionHealthCheck(),


            new BuildHealthCheck(),


            new TestHealthCheck()


        );


    }


}
