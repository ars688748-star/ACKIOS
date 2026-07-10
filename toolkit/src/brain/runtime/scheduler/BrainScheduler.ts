import { IBrainScheduler } from "./IBrainScheduler.js";

export class BrainScheduler implements IBrainScheduler {

    private readonly queue: Array<() => Promise<void>> = [];

    public enqueue(task: () => Promise<void>): void {

        this.queue.push(task);

    }

    public async run(): Promise<void> {

        while (this.queue.length > 0) {

            const task = this.queue.shift();

            if (task) {
                await task();
            }

        }

    }

}
