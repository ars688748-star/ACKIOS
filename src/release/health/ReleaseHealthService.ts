import { RepositoryHealthCheck } from "./RepositoryHealthCheck.js";

import { VersionHealthCheck } from "./VersionHealthCheck.js";

import { BuildHealthCheck } from "./BuildHealthCheck.js";

import { TestHealthCheck } from "./TestHealthCheck.js";



export class ReleaseHealthService {



    public check(){



        const checks = [



            new RepositoryHealthCheck().check(),



            new VersionHealthCheck().check(),



            new BuildHealthCheck().check(),



            new TestHealthCheck().check()



        ];





        return {



            version:

                "1.0.0",



            healthy:

                checks.every(

                    item => item.passed

                ),



            checks:

                checks.map(

                    item => item.name

                )



        };


    }


}
