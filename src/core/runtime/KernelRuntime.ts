import { ServiceContainer } from "../ServiceContainer.js";
import { KernelContext } from "./KernelContext.js";
import { KernelState } from "./KernelState.js";
import { IServiceModule } from "../modules/IServiceModule.js";
import { IInitializableModule } from "../modules/IInitializableModule.js";


export class KernelRuntime {


    public readonly context: KernelContext;

    public readonly state: KernelState;


    private readonly modules:
        IServiceModule[];



    constructor() {


        const container =
            new ServiceContainer();


        this.context =
            new KernelContext(
                container
            );


        this.state =
            new KernelState();


        this.modules = [];

    }



    public registerModule(
        module: IServiceModule
    ): void {

        this.modules.push(
            module
        );

    }



    public async start(): Promise<KernelContext> {


        this.state.status =
            "starting";


        for (const module of this.modules) {

            module.register(
                this.context.services
            );


            this.context.addModule(
                module.constructor.name
            );

        }


        for (const module of this.modules) {


            if(

                "initialize" in module

            ){

                await (

                    module as IInitializableModule

                ).initialize();

            }


        }


        this.state.start();


        return this.context;

    }



    public stop(): void {

        this.state.stop();

    }


}



