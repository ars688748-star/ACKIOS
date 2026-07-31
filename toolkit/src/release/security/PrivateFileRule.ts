export class PrivateFileRule {



    public detect(

        path:

            string

    ): boolean {


        return path.includes(

            ".private"

        );


    }


}
