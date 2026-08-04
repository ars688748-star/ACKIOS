import { describe, expect, it } from "vitest";

import { BrainPipeline } from "../BrainPipeline.js";
import { RuntimeContext } from "../../context/RuntimeContext.js";
import { IRuntimeStage } from "../IRuntimeStage.js";

class TestStage implements IRuntimeStage {

    public constructor(
        public readonly name: string,
        private readonly calls: string[]
    ) {}

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        this.calls.push(this.name);

        return context;

    }

}

class FailingStage implements IRuntimeStage {

    public readonly name = "failing";

    public async execute(): Promise<RuntimeContext> {

        throw new Error("Pipeline failed");

    }

}

const createContext = (): RuntimeContext => ({

    input: undefined,
    memory: undefined,
    knowledge: undefined,
    reasoning: undefined,
    plan: undefined,
    decision: undefined,
    output: undefined,
    services: undefined

});

describe("BrainPipeline", () => {

    it("executes stages in registration order", async () => {

        const calls: string[] = [];

        const pipeline = new BrainPipeline();

        pipeline
            .addStage(new TestStage("memory", calls))
            .addStage(new TestStage("reasoning", calls))
            .addStage(new TestStage("execution", calls));

        await pipeline.execute(createContext());

        expect(calls).toEqual([
            "memory",
            "reasoning",
            "execution"
        ]);

    });

    it("returns original context when pipeline has no stages", async () => {

        const pipeline = new BrainPipeline();

        const context = createContext();

        const result = await pipeline.execute(context);

        expect(result).toBe(context);

    });

    it("propagates stage errors and stops pipeline execution", async () => {

        const calls: string[] = [];

        const pipeline = new BrainPipeline();

        pipeline
            .addStage(new TestStage("memory", calls))
            .addStage(new FailingStage())
            .addStage(new TestStage("execution", calls));

        await expect(
            pipeline.execute(createContext())
        ).rejects.toThrow("Pipeline failed");

        expect(calls).toEqual([
            "memory"
        ]);

    });

});
