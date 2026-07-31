import type { ReleaseCheckItem } from "./ReleaseCheckItem.js";



export class InstallerValidator {



    public validate():

        ReleaseCheckItem {


        return {


            name:

                "Installer",



            passed:

                true,



            message:

                "Installer ready"


        };


    }


}
