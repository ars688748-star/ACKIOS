import { describe, expect, it } from "vitest";
import { RuntimeContainerFactory } from "../RuntimeContainerFactory.js";


describe(
    "RuntimeContainerIntegration",
    () => {


        it(
            "creates runtime container with services",
            () => {


                const container =
                    RuntimeContainerFactory.create();



                expect(
                    container
                )
                .toBeDefined();



                expect(
                    container.services.platformRuntime
                )
                .toBeDefined();



                expect(
                    container.services.stateManager
                )
                .toBeDefined();



                expect(
                    container.services.eventBus
                )
                .toBeDefined();


            }
        );


    }
);
