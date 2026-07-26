import { describe, expect, it } from "vitest";
import { RuntimeLifecycleCoordinator } from "../RuntimeLifecycleCoordinator.js";


describe(
    "RuntimeLifecycleCoordinator",
    () => {


        it(
            "starts runtime successfully",
            async () => {


                const runtime =
                {
                    start:
                        async () => true
                };


                const stateManager =
                {
                    save:
                        async () => {}
                };


                const events:any[] = [];


                const eventBus =
                {
                    publish:
                        async (event:any) => {

                            events.push(event);

                        }
                };


                const coordinator =
                    new RuntimeLifecycleCoordinator(
                        runtime as any,
                        stateManager as any,
                        eventBus as any
                    );


                const result =
                    await coordinator.start({

                        workspacePath: "./workspace",

                        username: "user",

                        installed: true,

                        ready: false

                    });


                expect(
                    result.success
                )
                .toBe(true);


                expect(
                    result.initialized
                )
                .toBe(true);


                expect(
                    events.length
                )
                .toBeGreaterThan(0);


                expect(
                    events[0].type
                )
                .toBe("runtime.started");


            }
        );


        it(
            "returns failure when runtime fails",
            async () => {


                const runtime =
                {
                    start:
                        async () => false
                };


                const stateManager =
                {
                    save:
                        async () => {}
                };


                const eventBus =
                {
                    publish:
                        async () => {}
                };


                const coordinator =
                    new RuntimeLifecycleCoordinator(
                        runtime as any,
                        stateManager as any,
                        eventBus as any
                    );


                const result =
                    await coordinator.start({

                        workspacePath: "./workspace",

                        installed: true,

                        ready: false

                    });


                expect(
                    result.success
                )
                .toBe(false);


                expect(
                    result.initialized
                )
                .toBe(false);


            }
        );


    }
);
