import { describe, expect, it } from "vitest";

import { BrainRuntimeBuilder } from "../host/BrainRuntimeBuilder.js";

import type { RuntimeContext } from "../context/RuntimeContext.js";


describe("BrainRuntime integration", () => {

    it("executes runtime pipeline and returns context", async () => {

        const runtime =
            new BrainRuntimeBuilder()
                .build();


        const context: RuntimeContext = {

            input: "runtime validation",

            memory: undefined,
            knowledge: undefined,
            reasoning: undefined,
            plan: undefined,
            decision: undefined,
            workflow: undefined,
            output: undefined,

            services: undefined

        };


        const result =
            await runtime.run(context);


        expect(result)
            .toBeDefined();


        expect(result.input)
            .toBe("runtime validation");

    });


    it("creates pipeline with seven stages", () => {

        const runtime =
            new BrainRuntimeBuilder()
                .build();


        expect(
            runtime.getPipeline().count()
        )
        .toBe(7);

    });

});
