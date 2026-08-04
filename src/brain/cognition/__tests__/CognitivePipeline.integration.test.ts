import { describe, expect, it } from "vitest";

import { CognitiveRuntimeFactory } from "../factory/CognitiveRuntimeFactory.js";

describe("Cognitive Pipeline", () => {

    it("executes complete cognitive pipeline", async () => {

        const runtime = CognitiveRuntimeFactory.create();

        await runtime.initialize();

        const context = {

            input: "ACKI",

            state: new Map<string, unknown>(),

            metadata: new Map<string, unknown>()

        };

        await runtime.execute(context);

        expect(context.state.has("workingMemory")).toBe(true);
        expect(context.state.has("prediction")).toBe(true);
                expect(context.state.has("causeEffect")).toBe(true);
        expect(context.state.has("impact")).toBe(true);
        expect(context.state.has("plan")).toBe(true);
        expect(context.state.has("decision")).toBe(true);
        expect(context.state.has("execution")).toBe(true);
        expect(context.state.has("reflection")).toBe(true);
        expect(context.state.has("selfEvaluation")).toBe(true);
        expect(context.state.has("goals")).toBe(true);

        await runtime.shutdown();

    });

});
