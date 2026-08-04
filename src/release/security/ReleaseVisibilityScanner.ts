import type { ReleaseVisibilityReport } from "./ReleaseVisibilityReport.js";

import { PrivateFileRule } from "./PrivateFileRule.js";



export class ReleaseVisibilityScanner {



    private readonly rule =

        new PrivateFileRule();





    public scan(

        files:

            string[]

    ): ReleaseVisibilityReport {



        const privateFiles =

            files.filter(

                file =>

                    this.rule.detect(

                        file

                    )

            );




        return {


            safe:

                privateFiles.length === 0,



            privateFiles,



            scannedAt:

                new Date()


        };


    }


}
