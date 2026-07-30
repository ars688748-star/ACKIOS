import type { Universe } from "../model/Universe.js";

import type { UniverseEvent } from "../events/UniverseEvent.js";


import { UniverseSceneRuntime } from "../scene/UniverseSceneRuntime.js";

import { UniverseFrameLoop } from "../frame/UniverseFrameLoop.js";

import { UniverseEngineBridge } from "../engine/UniverseEngineBridge.js";

import { UniverseVisualEngine } from "../engine/UniverseVisualEngine.js";



export class UniverseRuntimeKernel {



    private readonly frameLoop =

        new UniverseFrameLoop();



    private readonly engine =

        new UniverseEngineBridge(

            new UniverseVisualEngine()

        );





    private frame = 0;



    public constructor(

        private readonly scene:

            UniverseSceneRuntime


    ) {}





    public update(

        universe: Universe

    ) {



        const frame =

            this.frameLoop.update(

                0.016

            );



        this.frame =

            frame.frame;



        const scene =

            this.scene.update(

                universe

            );



        this.engine.update(

            scene.renderedObjects

        );



        return {


            running:

                true,


            frame:

                this.frame,


            updatedAt:

                new Date()


        };


    }





    public processEvent(

        event: UniverseEvent

    ): void {


        this.scene.processEvent(

            event

        );


    }


}
