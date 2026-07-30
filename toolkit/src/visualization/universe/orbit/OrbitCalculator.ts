export interface OrbitPosition {


    readonly x:

        number;



    readonly y:

        number;



    readonly z:

        number;


}



export class OrbitCalculator {



    public calculate(

        radius: number,

        angle: number

    ): OrbitPosition {



        return {


            x:

                Math.cos(angle) *

                radius,



            y:

                Math.sin(angle) *

                radius,



            z:

                0


        };


    }


}
