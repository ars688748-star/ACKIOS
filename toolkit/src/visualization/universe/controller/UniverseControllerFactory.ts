import { UniverseController } from "./UniverseController.js";

import { UniverseLiveRuntime } from "../tick/UniverseLiveRuntime.js";

import { UniverseSimulationRuntime } from "../simulation/UniverseSimulationRuntime.js";

import { UniverseRuntime } from "../runtime/UniverseRuntime.js";

import { UniverseRenderer } from "../renderer/UniverseRenderer.js";

import { PlanetHealthVisualizer } from "../visual/PlanetHealthVisualizer.js";

import { PlanetPulseAnimation } from "../animation/PlanetPulseAnimation.js";

import { UniverseCameraController } from "../camera/UniverseCameraController.js";



export class UniverseControllerFactory {



    public static create():

        UniverseController {



        const visualizer =

            new PlanetHealthVisualizer();



        const animation =

            new PlanetPulseAnimation();



        const camera =

            new UniverseCameraController();





        const runtime =

            new UniverseRuntime(

                visualizer,

                animation,

                camera

            );





        const renderer =

            new UniverseRenderer();





        const simulation =

            new UniverseSimulationRuntime(

                runtime,

                renderer

            );





        const live =

            new UniverseLiveRuntime(

                simulation

            );





        return new UniverseController(

            live

        );


    }


}
