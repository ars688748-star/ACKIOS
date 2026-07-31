import { WindowsPackager } from "./WindowsPackager.js";

import { LinuxPackager } from "./LinuxPackager.js";

import { MacOSPackager } from "./MacOSPackager.js";

import type { PackageTarget } from "./PackageTarget.js";



export class PackagingEngine {



    public build(

        target:

            PackageTarget

    ){


        switch(target){


            case "windows":

                return new WindowsPackager().package();



            case "linux":

                return new LinuxPackager().package();



            case "macos":

                return new MacOSPackager().package();


        }


    }


}
