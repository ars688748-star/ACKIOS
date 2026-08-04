import { CognitiveTask } from "./CognitiveTask.js";

export class CognitiveTaskQueue{

    private readonly queue:CognitiveTask[]=[];

    enqueue(task:CognitiveTask):void{

        this.queue.push(task);

    }

    async run():Promise<void>{

        while(this.queue.length){

            const task=this.queue.shift()!;

            await task.execute();

        }

    }

}
