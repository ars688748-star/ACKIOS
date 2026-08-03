import { BrainHost } from "../../BrainHost.js";
import { BaseIPC } from "../common/BaseIPC.js";

export class BrainIPC extends BaseIPC {

    constructor(

        private readonly brain: BrainHost

    ){

        super();

    }

    public register(): void {

        this.handle(

            "brain:state",

            async()=>this.brain.getState()

        );

        this.handle(

            "brain:runtime",

            async()=>this.brain.getRuntime()

        );

    }

}
