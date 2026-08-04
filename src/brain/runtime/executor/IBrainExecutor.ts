export interface IBrainExecutor {

    execute(task: () => Promise<void>): Promise<void>;

}
