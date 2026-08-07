import type { BrainSystem } from "../../../brain/integration/BrainSystem.js";


export class BrainWidgetService {


    public constructor(
        private readonly brain: BrainSystem
    ){}



    public getWidget(){


        return {

            services:
                this.brain.kernel.services.getAll().length,


            state:
                this.brain.kernel.state,


            runtime:
                "active"


        };


    }


}
