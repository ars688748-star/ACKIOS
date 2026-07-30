import type { CelestialObject } from "../model/CelestialObject.js";

import { OrbitCalculator } from "./OrbitCalculator.js";

import { OrbitAnimator } from "./OrbitAnimator.js";



export class UniverseOrbitRuntime {



    private readonly calculator =

        new OrbitCalculator();



    private readonly animator =

        new OrbitAnimator();





    public update(

        object: CelestialObject,

        delta: number

    ) {



        if (

            !object.orbit

        ) {


            return object.position;


        }



        const angle =

            this.animator.update(

                delta

            );



        return this.calculator.calculate(

            object.orbit.radius,

            angle

        );


    }


}
