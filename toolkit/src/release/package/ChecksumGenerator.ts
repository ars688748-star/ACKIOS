export class ChecksumGenerator {



    public generate(

        files:

            string[]

    ){


        return files.map(

            file => ({


                file,


                checksum:

                    "generated"


            })

        );


    }


}
