export interface IBrainScheduler {

    enqueue(task: () => Promise<void>): void;

    run(): Promise<void>;

}
