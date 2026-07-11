import { describe, expect, it } from "vitest";

import { MemoryStage } from "../MemoryStage.js";
import { RuntimeContext } from "../../context/RuntimeContext.js";

const createContext = (): RuntimeContext => ({

    input: "hello",

    memory: undefined,

    knowledge: undefined,

    reasoning: undefined,

    plan: undefined,

    decision: undefined,

    output: undefined,

    services: undefined

});

describe("MemoryStage", () => {

    it("copies input into memory", async () => {

        const stage = new MemoryStage();

        const context = createContext();

        const result = await stage.execute(context);

        expect(result.memory).toBe("hello");

        expect(result.input).toBe("hello");

    });

});
