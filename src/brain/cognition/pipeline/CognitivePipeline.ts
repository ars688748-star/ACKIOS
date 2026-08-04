import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class CognitivePipeline {

    private readonly modules: ICognitiveModule[] = [];

    register(module: ICognitiveModule): void {

        this.modules.push(module);

    }

    unregister(name: string): boolean {

        const index = this.modules.findIndex(x => x.name === name);

        if(index < 0){

            return false;

        }

        this.modules.splice(index,1);

        return true;

    }

    modulesSnapshot(): readonly ICognitiveModule[]{

        return [...this.modules];

    }

    async initialize(): Promise<void>{

        for(const module of this.modules){

            if(module.initialize){

                await module.initialize();

            }

        }

    }

    async execute(context: ICognitiveContext): Promise<void>{

        for(const module of this.modules){

            await module.process(context);

        }

    }

    async shutdown(): Promise<void>{

        for(const module of [...this.modules].reverse()){

            if(module.shutdown){

                await module.shutdown();

            }

        }

    }

}
