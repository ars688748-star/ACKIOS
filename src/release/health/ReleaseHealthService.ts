import { RepositoryHealthCheck } from "./RepositoryHealthCheck.js";
import { VersionHealthCheck } from "./VersionHealthCheck.js";
import { BuildHealthCheck } from "./BuildHealthCheck.js";
import { TestHealthCheck } from "./TestHealthCheck.js";


export class ReleaseHealthService {


    public constructor(

        private readonly repository: RepositoryHealthCheck,

        private readonly version: VersionHealthCheck,

        private readonly build: BuildHealthCheck,

        private readonly tests: TestHealthCheck

    ){}



    public check(){


        const checks = [


            this.repository.check(),


            this.version.check(),


            this.build.check(),


            this.tests.check()


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
