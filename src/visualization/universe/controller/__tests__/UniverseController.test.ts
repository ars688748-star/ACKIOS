import { describe, expect, test } from "vitest";

import { UniverseControllerFactory } from "../UniverseControllerFactory.js";


describe(
    "UniverseController",
    () => {


        test(
            "creates universe controller",
            () => {


                const controller =

                    UniverseControllerFactory.create();



                expect(

                    controller

                ).toBeDefined();


            }
        );


    }
);
