import { describe, expect, it } from "vitest";

import { BrainKernelBuilder } from "../../core/BrainKernelBuilder.js";
import { BrainRuntimeBuilder } from "../host/BrainRuntimeBuilder.js";

import type { RuntimeContext } from "../context/RuntimeContext.js";


describe("BrainRuntime services integration", () => {

    it("executes runtime pipeline with kernel services", async () => {

        const kernel =
            new BrainKernelBuilder()
                .build();


        const runtime =
            new BrainRuntimeBuilder()
                .build(kernel.services);


        const context: RuntimeContext = {

            input: "ACKI runtime services validation",

            memory: undefined,
            knowledge: undefined,
            reasoning: undefined,
            plan: undefined,
            decision: undefined,
            output: undefined,

            services: kernel.services

        };


        const result =
            await runtime.run(context);


        expect(result.memory)
            .toBeDefined();

        expect(result.knowledge)
            .toBeDefined();

        expect(result.reasoning)
            .toBeDefined();

        expect(result.plan)
            .toBeDefined();

        expect(result.decision)
            .toBeDefined();

        expect(result.output)
            .toBeDefined();

    });

});
