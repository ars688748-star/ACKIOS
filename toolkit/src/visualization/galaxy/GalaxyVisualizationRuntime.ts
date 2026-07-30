import { GalaxyEventBus } from "./events/GalaxyEventBus.js";
import { GalaxyEventDispatcher } from "./events/GalaxyEventDispatcher.js";

import { GalaxyAnimationEngine } from "./animation/GalaxyAnimationEngine.js";

import { GalaxyCameraController } from "./camera/GalaxyCameraController.js";
import { GalaxyCameraAnimationBridge } from "./camera/GalaxyCameraAnimationBridge.js";
import type { GalaxyViewport } from "./camera/GalaxyViewport.js";

import { GalaxySceneRuntime } from "./runtime/GalaxySceneRuntime.js";
import { GalaxyRuntimeSync } from "./runtime/GalaxyRuntimeSync.js";
import { GalaxyRenderLoop } from "./rendering/GalaxyRenderLoop.js";
import { GalaxyFrameRenderer } from "./rendering/GalaxyFrameRenderer.js";
import type { GalaxyScene } from "./model/GalaxyScene.js";
import type { GalaxyRenderContext } from "./rendering/GalaxyRenderContext.js";



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


    public readonly renderLoop =
        new GalaxyRenderLoop();


    public readonly frameRenderer =
        new GalaxyFrameRenderer();


    private viewport?: GalaxyViewport;



    public startRendering(): void {


        this.renderLoop.start();


    }



    public stopRendering(): void {


        this.renderLoop.stop();


    }



    public isRendering(): boolean {


        return this.renderLoop.isRunning();


    }



    public createViewport(
        width: number,
        height: number
    ): GalaxyViewport {


        this.viewport = {

            width,

            height,

            camera: this.camera.getState(),

            zoom: this.camera.getState().zoom,

            active: true

        };


        return this.viewport;


    }



    public getViewport():

        GalaxyViewport | undefined {


        return this.viewport;


    }



    public renderFrame(
        scene: GalaxyScene
    ): GalaxyRenderContext {


        if (!this.viewport) {

            this.createViewport(
                1920,
                1080
            );

        }



        return this.frameRenderer.render(

            scene,

            this.camera.getState(),

            this.viewport!

        );


    }



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











