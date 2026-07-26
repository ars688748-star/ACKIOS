import { RuntimeState } from "./RuntimeState.js";
import { IRuntimeStateStorage } from "./IRuntimeStateStorage.js";


export class RuntimeStateManager {


    public constructor(
        private readonly storage: IRuntimeStateStorage
    ) {}



    public async load():
        Promise<RuntimeState | null> {

        return await this.storage.load();

    }



    public async save(
        state: RuntimeState
    ): Promise<void> {

        await this.storage.save(state);

    }



    public async reset(): Promise<void> {

        await this.storage.clear();

    }


}
