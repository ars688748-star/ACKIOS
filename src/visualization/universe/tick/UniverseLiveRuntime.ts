import type { Universe } from "../model/Universe.js";

import { UniverseSimulationRuntime } from "../simulation/UniverseSimulationRuntime.js";

import { UniverseTickEngine } from "./UniverseTickEngine.js";



export class UniverseLiveRuntime {



    private readonly tickEngine =

        new UniverseTickEngine();





    public constructor(

        private readonly simulation:

            UniverseSimulationRuntime


    ) {}





    public update(

        universe: Universe

    ) {



        const tick =

            this.tickEngine.tick();



        return this.simulation.update(

            universe,

            tick.delta

        );


    }



    public reset(): void {


        this.tickEngine.reset();


    }


}
