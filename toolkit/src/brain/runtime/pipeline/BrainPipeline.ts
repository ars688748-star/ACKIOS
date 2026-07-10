import { BrainContext } from "../../context/runtime/BrainContext.js";
import { BrainEvent } from "../../events/runtime/BrainEvent.js";
import { EventManager } from "../../events/EventManager.js";
import { IBrainPipeline } from "./IBrainPipeline.js";

export class BrainPipeline implements IBrainPipeline {

    public constructor(
        private readonly events?: EventManager
    ) {}

    public async execute(context: BrainContext): Promise<void> {

        void context;

        this.events?.publish(
            new BrainEvent("pipeline.started")
        );

    }

}
