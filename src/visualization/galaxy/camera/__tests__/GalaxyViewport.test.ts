import { describe, expect, test } from "vitest";

import type { GalaxyViewport } from "../GalaxyViewport.js";


describe(
    "GalaxyViewport",
    () => {


        test(
            "creates viewport state",
            () => {


                const viewport: GalaxyViewport = {


                    width: 1920,


                    height: 1080,


                    camera: {

                        position: {

                            x: 0,

                            y: 0,

                            z: 100

                        },

                        target: {

                            x: 0,

                            y: 0,

                            z: 0

                        },

                        zoom: 1,

                        rotation: {

                            x: 0,

                            y: 0,

                            z: 0

                        }

                    },


                    zoom: 1,


                    active: true


                };



                expect(
                    viewport.width
                ).toBe(1920);



                expect(
                    viewport.height
                ).toBe(1080);



                expect(
                    viewport.active
                ).toBe(true);


            }
        );


    }
);
