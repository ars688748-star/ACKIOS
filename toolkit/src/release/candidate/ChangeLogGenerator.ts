export class ChangeLogGenerator {



    public generate(

        changes:

            string[]

    ): string {


        return changes.join(

            "\n"

        );


    }


}
