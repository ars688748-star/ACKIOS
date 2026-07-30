import { describe, expect, test } from "vitest";

import { OrbitCalculator } from "../OrbitCalculator.js";


describe(
    "OrbitCalculator",
    () => {


        test(
            "calculates orbital position",
            () => {


                const calculator =
                    new OrbitCalculator();



                const position =
                    calculator.calculate(

                        10,

                        0

                    );



                expect(

                    position.x

                ).toBe(10);



                expect(

                    position.y

                ).toBe(0);



                expect(

                    position.z

                ).toBe(0);


            }
        );


    }
);
