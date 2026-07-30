import { describe, expect, test } from "vitest";

import { GalaxyEdgeRenderer } from "../GalaxyEdgeRenderer.js";


describe(
    "GalaxyEdgeRenderer",
    () => {


        test(
            "creates visual edge from galaxy edge",
            () => {


                const renderer =
                    new GalaxyEdgeRenderer();



                const edge = {

                    from: "brain",

                    to: "memory",

                    type: "dependency"

                };



                const visual =
                    renderer.create(
                        edge
                    );



                expect(
                    visual.from
                ).toBe(
                    "brain"
                );



                expect(
                    visual.to
                ).toBe(
                    "memory"
                );



                expect(
                    visual.active
                ).toBe(true);


            }
        );



        test(
            "disables visual edge",
            () => {


                const renderer =
                    new GalaxyEdgeRenderer();



                const visual =
                    renderer.create({

                        from: "a",

                        to: "b",

                        type: "link"

                    });



                const disabled =
                    renderer.disable(
                        visual
                    );



                expect(
                    disabled.active
                ).toBe(false);


            }
        );


    }
);
