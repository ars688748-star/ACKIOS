import { ServiceContainer } from "../ServiceContainer.js";
import { IServiceModule } from "../modules/IServiceModule.js";
import { KernelContext } from "./KernelContext.js";


export class KernelRuntime {

    private readonly container: ServiceContainer;

    private readonly context: KernelContext;


    constructor() {

        this.container =
            new ServiceContainer();


        this.context =
            new KernelContext(
                this.container
            );

    }


    public registerModule(
        module: IServiceModule
    ): void {

        module.register(
            this.container
        );


        this.context.addModule(
            module.constructor.name
        );

    }


    public start(): KernelContext {

        return this.context;

    }


    public getContainer(): ServiceContainer {

        return this.container;

    }

}
