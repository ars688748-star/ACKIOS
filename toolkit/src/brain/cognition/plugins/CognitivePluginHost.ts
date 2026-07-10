import { CognitivePlugin } from "./CognitivePlugin.js";

export class CognitivePluginHost{

    private readonly plugins:CognitivePlugin[]=[];

    register(plugin:CognitivePlugin):void{

        this.plugins.push(plugin);

    }

    async initialize():Promise<void>{

        for(const plugin of this.plugins){

            await plugin.initialize();

        }

    }

}
