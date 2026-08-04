import { describe, expect, it } from "vitest";
import { FirstRunCoordinator } from "../../FirstRunCoordinator.js";
import { FirstRunState } from "../../FirstRunState.js";
import { RuntimeStateManager } from "../RuntimeStateManager.js";
import { RuntimeState } from "../RuntimeState.js";
import { IRuntimeStateStorage } from "../IRuntimeStateStorage.js";


class MemoryStorage implements IRuntimeStateStorage {


    private state: RuntimeState | null = {

        initialized: true,

        installed: true,

        workspaceReady: true,

        ready: true

    };


    async load(): Promise<RuntimeState | null> {

        return this.state;

    }


    async save(
        state: RuntimeState
    ): Promise<void> {

        this.state = state;

    }


    async clear(): Promise<void> {

        this.state = null;

    }

}



describe(
    "FirstRunCoordinator runtime state",
    () => {


        it(
            "skips first run when runtime is ready",
            async () => {


                const runtimeManager =
                    new RuntimeStateManager(
                        new MemoryStorage()
                    );


                const coordinator =
                    new FirstRunCoordinator(

                        new FirstRunState(),

                        {
                            run:
                                async () => {

                                    throw new Error(
                                        "Wizard should not run"
                                    );

                                }

                        } as any,


                        {
                            run:
                                async () => {

                                    throw new Error(
                                        "Onboarding should not run"
                                    );

                                }

                        } as any,


                        undefined,

                        runtimeManager

                    );



                const result =
                    await coordinator.run(
                        "./workspace"
                    );


                expect(result)
                    .toBe(true);


            }
        );


    }
);
