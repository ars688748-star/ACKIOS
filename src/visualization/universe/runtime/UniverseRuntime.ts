import type { UniverseEvent } from "../events/UniverseEvent.js";

import type { PlanetAlert } from "../events/PlanetAlert.js";

import type { PlanetHealthVisualizer } from "../visual/PlanetHealthVisualizer.js";

import type { PlanetPulseAnimation } from "../animation/PlanetPulseAnimation.js";

import type { UniverseCameraController } from "../camera/UniverseCameraController.js";



export class UniverseRuntime {



    public constructor(

        private readonly visualizer:
            PlanetHealthVisualizer,


        private readonly animation:
            PlanetPulseAnimation,


        private readonly camera:
            UniverseCameraController


    ) {}



    public process(

        event: UniverseEvent

    ): void {



        if (

            event.type !== "planet-alert"

        ) {

            return;

        }



        const alert =

            event as PlanetAlert;



        const visualState =

            this.visualizer.resolve(

                alert.health

            );



        this.animation.resolve(

            visualState === "danger"

                ? "danger"

                : visualState === "pulse"

                    ? "pulse"

                    : "idle"

        );



        if (

            visualState === "danger"

        ) {



            this.camera.focus({

                targetId:

                    alert.targetId,


                priority:

                    "critical",


                reason:

                    alert.message,


                createdAt:

                    alert.createdAt


            });


        }


    }


}
