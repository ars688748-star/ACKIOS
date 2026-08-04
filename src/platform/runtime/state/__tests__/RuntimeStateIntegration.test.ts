import { describe, expect, it } from "vitest";
import { RuntimeStateManager } from "../RuntimeStateManager.js";
import { RuntimeState } from "../RuntimeState.js";
import { IRuntimeStateStorage } from "../IRuntimeStateStorage.js";


class MemoryStorage implements IRuntimeStateStorage {


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
    "RuntimeState integration",
    () => {


        it(
            "persists runtime state",
            async () => {


                const storage =
                    new MemoryStorage();


                const manager =
                    new RuntimeStateManager(
                        storage
                    );


                await manager.save({

                    initialized: true,

                    installed: true,

                    workspaceReady: true

                });



                const result =
                    await manager.load();



                expect(result?.ready)
                    .toBeUndefined();



                expect(result?.installed)
                    .toBe(true);


            }
        );


    }
);
