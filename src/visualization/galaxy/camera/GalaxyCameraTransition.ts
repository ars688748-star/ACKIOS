import type { GalaxyCameraState } from "./GalaxyCameraState.js";


export class GalaxyCameraTransition {


    private from?: GalaxyCameraState;


    private to?: GalaxyCameraState;


    private duration = 0;


    private progress = 0;



    public start(

        from: GalaxyCameraState,

        to: GalaxyCameraState,

        duration: number

    ): void {


        this.from = from;

        this.to = to;

        this.duration = duration;

        this.progress = 0;


    }



    public update(

        progress: number

    ): void {


        this.progress = Math.min(

            Math.max(
                progress,
                0
            ),

            1

        );


    }



    public getState() {


        if (

            !this.from ||

            !this.to

        ) {

            return undefined;

        }



        return {


            position: {

                x:
                    this.from.position.x +

                    (
                        this.to.position.x -
                        this.from.position.x
                    ) *
                    this.progress,


                y:
                    this.from.position.y +

                    (
                        this.to.position.y -
                        this.from.position.y
                    ) *
                    this.progress,


                z:
                    this.from.position.z +

                    (
                        this.to.position.z -
                        this.from.position.z
                    ) *
                    this.progress

            },


            target:

            this.to.target,


            zoom:

            this.from.zoom +

            (
                this.to.zoom -
                this.from.zoom
            ) *
            this.progress,


            rotation:

            this.to.rotation


        };


    }



    public isActive(): boolean {


        return (

            this.progress < 1 &&

            this.from !== undefined &&

            this.to !== undefined

        );


    }


}
