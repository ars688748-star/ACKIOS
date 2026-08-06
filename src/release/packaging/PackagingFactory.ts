import { PackagingService } from "./PackagingService.js";
import { PackagingEngine } from "./PackagingEngine.js";

import { WindowsPackager } from "./WindowsPackager.js";
import { LinuxPackager } from "./LinuxPackager.js";
import { MacOSPackager } from "./MacOSPackager.js";


export class PackagingFactory {


    public static create(){


        return new PackagingService(

            new PackagingEngine([

                new WindowsPackager(),

                new LinuxPackager(),

                new MacOSPackager()

            ])

        );


    }


}
