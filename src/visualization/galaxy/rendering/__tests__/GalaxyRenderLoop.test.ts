import { describe, expect, test } from "vitest";

import { GalaxyRenderLoop } from "../GalaxyRenderLoop.js";


describe(
    "GalaxyRenderLoop",
    () => {


        test(
            "updates frame when running",
            () => {


                const loop =
                    new GalaxyRenderLoop();



                const context = {

                    scene: {} as any,

                    camera: {} as any,

                    frame: 0,

                    timestamp: 0

                };



                loop.start();



                const updated =
                    loop.tick(
                        context
                    );



                expect(
                    loop.isRunning()
                ).toBe(true);



                expect(
                    updated.frame
                ).toBe(1);



                expect(
                    updated.timestamp
                ).toBeGreaterThan(0);


            }
        );



        test(
            "does not update when stopped",
            () => {


                const loop =
                    new GalaxyRenderLoop();



                const context = {

                    scene: {} as any,

                    camera: {} as any,

                    frame: 5,

                    timestamp: 100

                };



                const updated =
                    loop.tick(
                        context
                    );



                expect(
                    updated.frame
                ).toBe(5);



                expect(
                    updated.timestamp
                ).toBe(100);


            }
        );


    }
);
