import { GalaxyEventBus } from "./events/GalaxyEventBus.js";
import { GalaxyEventDispatcher } from "./events/GalaxyEventDispatcher.js";

import { GalaxyAnimationEngine } from "./animation/GalaxyAnimationEngine.js";

import { GalaxyCameraController } from "./camera/GalaxyCameraController.js";
import { GalaxyCameraAnimationBridge } from "./camera/GalaxyCameraAnimationBridge.js";
import { GalaxyCameraTransition } from "./camera/GalaxyCameraTransition.js";
import { GalaxyCameraTransitionBridge } from "./camera/GalaxyCameraTransitionBridge.js";
import { GalaxyCameraAnimationRuntime } from "./camera/GalaxyCameraAnimationRuntime.js";
import type { GalaxyViewport } from "./camera/GalaxyViewport.js";

import { GalaxySceneRuntime } from "./runtime/GalaxySceneRuntime.js";
import { GalaxySceneBuilder } from "./runtime/GalaxySceneBuilder.js";
import { GalaxyArchitectureProviderBridge } from "../GalaxyArchitectureProviderBridge.js";
import { GalaxyRuntimeSync } from "./runtime/GalaxyRuntimeSync.js";
import { GalaxyRenderLoop } from "./rendering/GalaxyRenderLoop.js";
import { GalaxyFrameRenderer } from "./rendering/GalaxyFrameRenderer.js";

import { GalaxyInteractionController } from "./interaction/GalaxyInteractionController.js";
import { GalaxyInteractionViewportBridge } from "./interaction/GalaxyInteractionViewportBridge.js";

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


    public readonly cameraTransition =
        new GalaxyCameraTransition();


    public readonly cameraTransitionBridge =
        new GalaxyCameraTransitionBridge(

            this.camera,

            this.cameraTransition

        );


    public readonly cameraAnimationRuntime =
        new GalaxyCameraAnimationRuntime(

            this.animation,

            this.cameraTransition,

            this.cameraTransitionBridge

        );



    public readonly sceneRuntime =
        new GalaxySceneRuntime();



    public readonly architectureBridge =
        new GalaxyArchitectureProviderBridge();



    public readonly sceneBuilder =
        new GalaxySceneBuilder();


    public readonly runtimeSync =
        new GalaxyRuntimeSync(
            this.sceneRuntime
        );


    public readonly renderLoop =
        new GalaxyRenderLoop();


    public readonly frameRenderer =
        new GalaxyFrameRenderer();


    public readonly interaction =
        new GalaxyInteractionController(
            this.camera
        );


    public readonly interactionViewportBridge =
        new GalaxyInteractionViewportBridge();


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



        const visualScene =
            this.sceneRuntime.render();


        if (!visualScene) {

            return this.frameRenderer.render(

                scene,

                {
                    nodes: [],
                    edges: []
                },

                this.camera.getState(),

                this.viewport!

            );

        }


        return this.frameRenderer.render(

            scene,

            visualScene,

            this.camera.getState(),

            this.viewport!

        );


    }



    public selectNode(
        node: import("./model/GalaxyNode.js").GalaxyNode
    ): void {


        this.interaction.selectNode(
            node
        );


        this.cameraAnimationRuntime.startTransition(

            this.camera.getState(),

            {

                ...this.camera.getState(),

                target: {

                    x: node.position.x,

                    y: node.position.y,

                    z: node.position.z ?? 0

                }

            },

            1000

        );


        if (this.viewport) {

            this.viewport =
                this.interactionViewportBridge.sync(

                    this.viewport,

                    this.camera,

                    this.interaction.getState()

                );

        }


    }



    public syncInteraction(): void {


        if (!this.viewport) {

            return;

        }


        this.viewport =
            this.interactionViewportBridge.sync(

                this.viewport,

                this.camera,

                this.interaction.getState()

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


    public async loadArchitecture(

        root: string

    ): Promise<void> {


        const graph =

            await this.architectureBridge.getGalaxyArchitectureGraph(

                root

            );



        const scene =

            this.sceneBuilder.build(

                graph

            );



        this.runtimeSync.updateScene(

            scene

        );


    }

}

