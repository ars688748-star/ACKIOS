import type { InstallerStep } from "./InstallerStep.js";



export class InstallerEngine {



    public run():

        InstallerStep[] {



        return [


            "detect",


            "check",


            "install",


            "configure",


            "complete"


        ];



    }


}
