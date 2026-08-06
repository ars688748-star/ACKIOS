export class CredentialEncryption {


    public encrypt(

        value:

            string

    ):

        string {


        return Buffer.from(

            value

        ).toString(

            "base64"

        );


    }





    public decrypt(

        value:

            string

    ):

        string {


        return Buffer.from(

            value,

            "base64"

        ).toString();


    }


}
