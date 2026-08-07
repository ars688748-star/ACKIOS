import { UniverseKernelFactory } from "./UniverseKernelFactory.js";

import { UniverseFactory } from "../intelligence/UniverseFactory.js";

import type { Universe } from "../model/Universe.js";


export class AckiosUniverseRuntime {


    private readonly kernel =
        UniverseKernelFactory.create();


    private readonly universeFactory =
        new UniverseFactory();



    public createUniverse():

        Universe {


        return this.universeFactory.create(

            "ackios",

            "ACKIOS Living System"

        );


    }



    public update(

        universe?: Universe

    ) {


        const currentUniverse =

            universe ??

            this.createUniverse();



        return this.kernel.update(

            currentUniverse

        );


    }


}
