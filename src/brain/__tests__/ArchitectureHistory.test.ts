import { describe, expect, it } from "vitest";

import { ArchitectureHistory } from "../memory/ArchitectureHistory.js";

describe("ArchitectureHistory", () => {

    it("builds timeline", () => {

        const history = new ArchitectureHistory();

        history.append({
            id:"1",
            componentId:"brain.graph",
            action:"created",
            reason:"init",
            author:"ACKIOS",
            timestamp:new Date(),
            metadata:{}
        });

        expect(history.getTimeline()).toHaveLength(1);
        expect(history.getComponentHistory("brain.graph")).toHaveLength(1);

    });

});
