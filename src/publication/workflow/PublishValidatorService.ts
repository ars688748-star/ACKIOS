import type { PublishValidation } from "./PublishValidation.js";


export class PublishValidatorService {



    public validate(

        platform:

            string,

        credentials:

            unknown[]

    ):

        PublishValidation {



        const errors:string[] = [];




        if(

            !platform

        ){

            errors.push(

                "Platform is required"

            );

        }




        if(

            credentials.length === 0

        ){

            errors.push(

                "Credentials are required"

            );

        }




        return {


            valid:

                errors.length === 0,



            errors



        };



    }



}
