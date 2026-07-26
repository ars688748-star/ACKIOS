import { describe, it, expect } from "vitest";
import { RuntimeStateManager } from "../RuntimeStateManager.js";
import { IRuntimeStateStorage } from "../IRuntimeStateStorage.js";
import { RuntimeState } from "../RuntimeState.js";


class MemoryRuntimeStateStorage implements IRuntimeStateStorage {


    private state: RuntimeState | null = null;



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
    "RuntimeStateManager",
    () => {


        it(
            "saves and loads runtime state",
            async () => {


                const storage =
                    new MemoryRuntimeStateStorage();


                const manager =
                    new RuntimeStateManager(storage);



                const state: RuntimeState = {

                    initialized: true,

                    installed: true,

                    workspaceReady: true,

                    lastStartTime:
                        "2026-07-26"

                };



                await manager.save(state);


                const result =
                    await manager.load();



                expect(result)
                    .toEqual(state);


            }
        );



        it(
            "resets runtime state",
            async () => {


                const storage =
                    new MemoryRuntimeStateStorage();


                const manager =
                    new RuntimeStateManager(storage);



                await manager.save({

                    initialized: true,

                    installed: true,

                    workspaceReady: true

                });



                await manager.reset();



                expect(
                    await manager.load()
                )
                .toBeNull();


            }
        );


    }
);
