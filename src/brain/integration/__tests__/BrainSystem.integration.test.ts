import { describe, expect, it } from "vitest";

import { BrainSystemBuilder } from "../BrainSystemBuilder.js";

import type { RuntimeContext } from "../../runtime/context/RuntimeContext.js";
import type { ICognitiveContext } from "../../cognition/interfaces/ICognitiveContext.js";


describe("BrainSystem integration", () => {

    it("executes full brain runtime bridge", async () => {

        const system =
            new BrainSystemBuilder()
                .build();


        const brainContext: RuntimeContext = {

            input: "ACKI runtime validation",

            memory: undefined,
            knowledge: undefined,
            reasoning: undefined,
            plan: undefined,
            decision: undefined,
            output: undefined,

            services: system.kernel.services

        };


        const cognitiveContext: ICognitiveContext = {

            input: "ACKI cognition validation",

            state: new Map(),

            metadata: new Map()

        };


        await system.bridge.initialize();


        const result =
            await system.bridge.execute(
                brainContext,
                cognitiveContext
            );


        expect(result)
            .toBeDefined();


        expect(result.input)
            .toBe("ACKI runtime validation");


        await system.bridge.shutdown();

    });

});
