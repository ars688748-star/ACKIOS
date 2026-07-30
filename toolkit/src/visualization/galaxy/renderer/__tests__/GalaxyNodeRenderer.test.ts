import { describe, expect, test } from "vitest";

import { GalaxyNodeRenderer } from "../GalaxyNodeRenderer.js";


describe(
    "GalaxyNodeRenderer",
    () => {


        test(
            "creates visual node from galaxy node",
            () => {


                const renderer =
                    new GalaxyNodeRenderer();



                const node = {

                    id: "brain",

                    position: {

                        x: 10,

                        y: 20,

                        z: 30

                    }

                } as any;



                const visual =
                    renderer.create(
                        node
                    );



                expect(
                    visual.id
                ).toBe(
                    "brain"
                );



                expect(
                    visual.position.x
                ).toBe(
                    10
                );



                expect(
                    visual.selected
                ).toBe(false);


            }
        );



        test(
            "selects visual node",
            () => {


                const renderer =
                    new GalaxyNodeRenderer();



                const visual = {

                    id: "node",

                    source: {} as any,

                    position: {

                        x: 0,

                        y: 0,

                        z: 0

                    },

                    radius: 1,

                    selected: false

                };



                const selected =
                    renderer.select(
                        visual
                    );



                expect(
                    selected.selected
                ).toBe(true);


            }
        );


    }
);
