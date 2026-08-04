import { describe, expect, it } from "vitest";

import { ArchitectureMemory } from "../memory/ArchitectureMemory.js";

describe("ArchitectureMemory", () => {

    it("stores architecture history", () => {

        const memory = new ArchitectureMemory();

        memory.add({

            id:"1",
            componentId:"brain.graph",
            action:"created",
            reason:"initial implementation",
            author:"ACKIOS",
            timestamp:new Date(),
            metadata:{}

        });

        expect(memory.get("brain.graph")).toHaveLength(1);

    });

});
