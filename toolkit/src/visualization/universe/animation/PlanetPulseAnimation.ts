export type PlanetAnimationMode =

    | "idle"
    | "pulse"
    | "danger";



export interface PlanetPulseState {


    readonly mode:

        PlanetAnimationMode;



    readonly intensity:

        number;



    readonly speed:

        number;


}



export class PlanetPulseAnimation {



    public resolve(

        mode: PlanetAnimationMode

    ): PlanetPulseState {



        switch(mode) {



            case "pulse":

                return {

                    mode,

                    intensity: 0.5,

                    speed: 1

                };



            case "danger":

                return {

                    mode,

                    intensity: 1,

                    speed: 3

                };



            case "idle":

            default:

                return {

                    mode: "idle",

                    intensity: 0,

                    speed: 0

                };


        }


    }


}
