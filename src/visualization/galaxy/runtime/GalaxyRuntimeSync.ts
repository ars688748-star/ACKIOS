import type { GalaxyScene } from "../model/GalaxyScene.js";

import { GalaxySceneRuntime } from "./GalaxySceneRuntime.js";


export class GalaxyRuntimeSync {


    public constructor(

        private readonly runtime:
            GalaxySceneRuntime

    ) {}



    public updateScene(
        scene: GalaxyScene
    ): void {


        this.runtime.load(
            scene
        );

    }



    public render() {


        return this.runtime.render();


    }


}
