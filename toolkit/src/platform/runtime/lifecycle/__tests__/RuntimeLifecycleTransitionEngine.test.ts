import { describe, expect, it } from "vitest";
import { RuntimeLifecycleTransitionEngine } from "../RuntimeLifecycleTransitionEngine.js";


describe(
    "RuntimeLifecycleTransitionEngine",
    () => {


        it(
            "allows valid lifecycle transition",
            () => {

                const engine =
                    new RuntimeLifecycleTransitionEngine();


                expect(
                    engine.canTransition(
                        "created",
                        "installed"
                    )
                )
                .toBe(true);

            }
        );



        it(
            "allows final ready transition",
            () => {

                const engine =
                    new RuntimeLifecycleTransitionEngine();


                expect(
                    engine.transition(
                        "adaptation",
                        "ready"
                    )
                )
                .toBe("ready");

            }
        );



        it(
            "blocks invalid transition",
            () => {

                const engine =
                    new RuntimeLifecycleTransitionEngine();


                expect(
                    engine.canTransition(
                        "created",
                        "ready"
                    )
                )
                .toBe(false);

            }
        );


    }
);
