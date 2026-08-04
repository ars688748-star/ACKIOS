import { describe, expect, it } from "vitest";
import { RuntimeContainerFactory } from "../RuntimeContainerFactory.js";


describe(
    "RuntimeContainerFactory",
    () => {


        it(
            "creates runtime container",
            () => {


                const services =
                {

                    platformRuntime:
                    {} as any,


                    stateManager:
                    {} as any,


                    eventBus:
                    {} as any

                };


                const container =
                    RuntimeContainerFactory.create(
                        services
                    );


                expect(
                    container.getServices()
                )
                .toBe(
                    services
                );


            }
        );


    }
);
