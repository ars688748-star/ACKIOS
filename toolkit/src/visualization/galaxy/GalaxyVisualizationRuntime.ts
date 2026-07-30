import { GalaxyEventBus } from "./events/GalaxyEventBus.js";
import { GalaxyEventDispatcher } from "./events/GalaxyEventDispatcher.js";

import { GalaxyAnimationEngine } from "./animation/GalaxyAnimationEngine.js";

import { GalaxyCameraController } from "./camera/GalaxyCameraController.js";
import { GalaxyCameraAnimationBridge } from "./camera/GalaxyCameraAnimationBridge.js";

import { GalaxySceneRuntime } from "./runtime/GalaxySceneRuntime.js";
import { GalaxyRuntimeSync } from "./runtime/GalaxyRuntimeSync.js";



export class GalaxyVisualizationRuntime {


    public readonly events =
        new GalaxyEventBus();



    public readonly dispatcher =
        new GalaxyEventDispatcher();



    public readonly animation =
        new GalaxyAnimationEngine();



    public readonly camera =
        new GalaxyCameraController();



    public readonly cameraAnimation =
        new GalaxyCameraAnimationBridge(
            this.camera,
            this.animation
        );



    public readonly sceneRuntime =
        new GalaxySceneRuntime();



    public readonly runtimeSync =
        new GalaxyRuntimeSync(
            this.sceneRuntime
        );



    public initialize(): void {


        this.events.subscribe(

            "NODE_SELECTED",

            event => {

                this.dispatcher.dispatch(
                    event
                );

            }

        );


    }



    public updateAnimation(

        progress: number

    ): void {


        this.animation.update(
            progress
        );


    }



    public reset(): void {


        this.animation.reset();

        this.camera.reset();

        this.events.clear();

        this.dispatcher.clear();


    }


}
