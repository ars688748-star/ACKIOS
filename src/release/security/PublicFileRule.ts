export class PublicFileRule {



    public check(

        path:

            string

    ): boolean {


        return !path.includes(

            ".private"

        );


    }


}
