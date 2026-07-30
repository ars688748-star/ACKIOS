import { describe, expect, test } from "vitest";

import { GalaxyFrameRenderer } from "../GalaxyFrameRenderer.js";


describe(
    "GalaxyFrameRenderer",
    () => {


        test(
            "creates render context",
            () => {


                const renderer =
                    new GalaxyFrameRenderer();



                const scene = {} as any;


                const camera = {

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



                const visualScene = {

                    nodes: [],

                    edges: []

                };



                const viewport = {

                    width: 1920,

                    height: 1080,

                    camera,

                    zoom: 1,

                    active: true

                };



                const context =
                    renderer.render(

                        scene,

                        visualScene,

                        camera,

                        viewport

                    );



                expect(
                    context.scene
                ).toBe(scene);



                expect(
                    context.camera
                ).toBe(camera);



                expect(
                    context.timestamp
                ).toBeGreaterThan(0);


            }
        );


    }
);

