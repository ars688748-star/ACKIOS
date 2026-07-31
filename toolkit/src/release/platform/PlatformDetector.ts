export type PlatformType =

    | "windows"

    | "linux"

    | "macos";



export class PlatformDetector {



    public detect():

        PlatformType {


        const platform =

            process.platform;



        if (

            platform === "win32"

        ) {


            return "windows";


        }



        if (

            platform === "darwin"

        ) {


            return "macos";


        }



        return "linux";


    }


}
