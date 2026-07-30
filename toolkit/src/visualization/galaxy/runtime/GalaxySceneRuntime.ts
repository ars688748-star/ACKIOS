import type { GalaxyScene } from "../model/GalaxyScene.js";
import type { GalaxyRenderFrame } from "../renderer/GalaxySceneRenderer.js";

import { GalaxyLayoutEngine } from "../layout/GalaxyLayoutEngine.js";
import { GalaxySceneRenderer } from "../renderer/GalaxySceneRenderer.js";


export class GalaxySceneRuntime {


    private scene?: GalaxyScene;


    private readonly layout =
        new GalaxyLayoutEngine();



    private readonly renderer =
        new GalaxySceneRenderer();



    public load(
        scene: GalaxyScene
    ): void {

        this.scene = scene;

    }



    public render():
        GalaxyRenderFrame | undefined {


        if (!this.scene) {

            return undefined;

        }



        const nodes =
            this.layout.layout(
                this.scene
            );



        return this.renderer.render(

            nodes,

            this.scene.edges

        );

    }


}
