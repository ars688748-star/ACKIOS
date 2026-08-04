import { describe, expect, test } from "vitest";

import { BrainEventReactionMapper } from "../BrainEventReactionMapper.js";


describe(
    "BrainEventReactionMapper",
    () => {


        test(
            "maps planet alert",
            () => {


                const mapper =

                    new BrainEventReactionMapper();



                const result =

                    mapper.resolve(

                        "planet-alert"

                    );



                expect(

                    result?.reaction

                ).toBe(

                    "critical"

                );


            }
        );


    }
);
