import path from "node:path";


export class CredentialStoragePath {


    public static file(){


        return path.resolve(

            ".ackios",

            "credentials.json"

        );


    }


}
