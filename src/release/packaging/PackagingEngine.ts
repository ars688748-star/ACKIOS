import type { PackageTarget } from "./PackageTarget.js";
import type { IPackager } from "./IPackager.js";


export class PackagingEngine {


    private readonly packagers:

        Map<string, IPackager>;



    public constructor(

        packagers:

            IPackager[]

    ){


        this.packagers =

            new Map(

                packagers.map(

                    packager => [

                        packager.target,

                        packager

                    ]

                )

            );


    }





    public build(

        target:

            PackageTarget

    ){


        const packager =

            this.packagers.get(

                target

            );



        if(!packager){


            throw new Error(

                `Unsupported package target: ${target}`

            );


        }



        return packager.package();


    }


}
