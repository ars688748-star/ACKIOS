import type { InstallerPlatform } from "./InstallerPlatform.js";



export class OSDetector {



    public detect():

        InstallerPlatform {



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
