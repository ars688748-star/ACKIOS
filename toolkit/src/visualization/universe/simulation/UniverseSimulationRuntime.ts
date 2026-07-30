import type { Universe } from "../model/Universe.js";

import { UniverseOrbitRuntime } from "../orbit/UniverseOrbitRuntime.js";

import { UniverseRenderer } from "../renderer/UniverseRenderer.js";

import { UniverseRuntime } from "../runtime/UniverseRuntime.js";



export class UniverseSimulationRuntime {



    private readonly orbitRuntime =

        new UniverseOrbitRuntime();



    public constructor(

        private readonly runtime:

            UniverseRuntime,


        private readonly renderer:

            UniverseRenderer


    ) {}



    public update(

        universe: Universe,

        delta: number

    ) {



        for (const object of universe.objects) {


            this.orbitRuntime.update(

                object,

                delta

            );


        }



        return this.renderer.render(

            universe

        );


    }



    public processEvent(

        event: Parameters<UniverseRuntime["process"]>[0]

    ): void {



        this.runtime.process(

            event

        );


    }


}
