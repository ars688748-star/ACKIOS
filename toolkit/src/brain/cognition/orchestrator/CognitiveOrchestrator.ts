import { ICognitiveEngine } from "../contracts/index.js";

export class CognitiveOrchestrator{

    private readonly engines:ICognitiveEngine[]=[];

    register(engine:ICognitiveEngine){

        this.engines.push(engine);

    }

    async initialize(){

        for(const engine of this.engines){

            await engine.initialize();

        }

    }

    async shutdown(){

        for(const engine of [...this.engines].reverse()){

            await engine.shutdown();

        }

    }

}
