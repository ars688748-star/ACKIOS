import { describe, expect, test } from "vitest";


import { RuntimeCompositionFactory } from "../RuntimeCompositionFactory.js";



describe(

    "AckiosRuntimeComposition",

    () => {


        test(

            "creates default modules",

            () => {



                const composition =

                    RuntimeCompositionFactory.create();



                const modules =

                    composition.createModules();



                expect(

                    modules.length

                ).toBe(3);



                expect(

                    modules[0].name

                ).toBe(

                    "brain-runtime"

                );


            }

        );


    }

);
