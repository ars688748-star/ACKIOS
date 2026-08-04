import { CognitiveJob } from "./CognitiveJob.js";

export class CognitiveScheduler{

    private readonly jobs:CognitiveJob[]=[];

    register(job:CognitiveJob):void{

        this.jobs.push(job);

    }

    async execute():Promise<void>{

        for(const job of this.jobs){

            await job.run();

        }

    }

}
