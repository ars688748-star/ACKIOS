import { RuntimeState } from "./RuntimeState.js";
import { IRuntimeStateStorage } from "./IRuntimeStateStorage.js";


export class MemoryRuntimeStateStorage
    implements IRuntimeStateStorage {


    private state:
        RuntimeState | null = null;



    public async load():
        Promise<RuntimeState | null> {

        return this.state;

    }



    public async save(
        state: RuntimeState
    ): Promise<void> {

        this.state = state;

    }



    public async clear():
        Promise<void> {

        this.state = null;

    }


}
