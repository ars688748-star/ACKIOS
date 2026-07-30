import type { GalaxyRenderContext } from "./GalaxyRenderContext.js";


export class GalaxyRenderLoop {


    private running = false;


    private frame = 0;



    public start(): void {


        this.running = true;


    }



    public stop(): void {


        this.running = false;


    }



    public isRunning(): boolean {


        return this.running;


    }



    public tick(

        context: GalaxyRenderContext

    ): GalaxyRenderContext {


        if (!this.running) {

            return context;

        }



        this.frame++;



        return {

            ...context,

            frame: this.frame,

            timestamp: Date.now()

        };


    }


}
