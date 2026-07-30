import type {
    GalaxyAnimationState
} from "./GalaxyAnimationState.js";


export class GalaxyAnimationEngine {


    private state?: GalaxyAnimationState;



    public start(

        from: {
            x: number;
            y: number;
            z: number;
        },

        to: {
            x: number;
            y: number;
            z: number;
        },

        duration: number

    ): void {


        this.state = {

            from,

            to,

            duration,

            progress: 0,

            status: "RUNNING"

        };


    }



    public update(

        progress: number

    ): void {


        if (!this.state) {

            return;

        }



        const normalized =

            Math.min(
                Math.max(progress, 0),
                1
            );



        this.state = {

            ...this.state,

            progress: normalized,

            status:

                normalized >= 1

                    ? "COMPLETED"

                    : "RUNNING"

        };


    }



    public getState():

        GalaxyAnimationState | undefined {

        return this.state;

    }



    public reset(): void {

        this.state = undefined;

    }


}
