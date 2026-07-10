import { IBrainExecutor } from "./IBrainExecutor.js";

export class BrainExecutor implements IBrainExecutor {

    public async execute(task: () => Promise<void>): Promise<void> {

        await task();

    }

}
