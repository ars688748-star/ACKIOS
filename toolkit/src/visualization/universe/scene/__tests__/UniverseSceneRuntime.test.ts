import { describe, expect, test } from "vitest";

import { UniverseSceneFactory } from "../UniverseSceneFactory.js";


describe(
    "UniverseSceneRuntime",
    () => {


        test(
            "creates scene runtime",
            () => {


                const scene =

                    UniverseSceneFactory.create();



                expect(

                    scene

                ).toBeDefined();


            }
        );


    }
);
