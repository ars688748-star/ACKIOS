import { RuntimeState } from "./RuntimeState.js";


export interface IRuntimeStateStorage {


    load():
        Promise<RuntimeState | null>;



    save(
        state: RuntimeState
    ):
        Promise<void>;



    clear():
        Promise<void>;


}
