import { IBrainDispatcher } from "./IBrainDispatcher.js";

export class BrainDispatcher implements IBrainDispatcher {

    public async dispatch<T>(handler: () => Promise<T>): Promise<T> {

        return await handler();

    }

}
