import { describe, expect, test } from "vitest";

import { GalaxyCameraTransition } from "../GalaxyCameraTransition.js";


describe(
    "GalaxyCameraTransition",
    () => {


        test(
            "interpolates camera state",
            () => {


                const transition =
                    new GalaxyCameraTransition();



                const from = {

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

                };



                const to = {

                    position: {

                        x: 100,

                        y: 50,

                        z: 20

                    },

                    target: {

                        x: 10,

                        y: 20,

                        z: 0

                    },

                    zoom: 2,

                    rotation: {

                        x: 0,

                        y: 0,

                        z: 0

                    }

                };



                transition.start(
                    from,
                    to,
                    1000
                );



                transition.update(
                    0.5
                );



                const state =
                    transition.getState();



                expect(
                    state?.position.x
                ).toBe(
                    50
                );



                expect(
                    state?.zoom
                ).toBe(
                    1.5
                );


            }
        );


    }
);
