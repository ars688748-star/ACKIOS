import { UniverseVisualEngine } from "./UniverseVisualEngine.js";


export class UniverseEngineBridge {



    public constructor(

        private readonly engine:

            UniverseVisualEngine


    ) {}



    public update(

        objects: number

    ) {


        return this.engine.render({


            objects,


            timestamp:

                new Date()


        });


    }


}
