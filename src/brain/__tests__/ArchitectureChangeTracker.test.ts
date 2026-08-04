import { describe, expect, it } from "vitest";

import { ArchitectureChangeTracker } from "../memory/ArchitectureChangeTracker.js";

describe("ArchitectureChangeTracker", () => {

    it("tracks architecture changes", () => {

        const tracker = new ArchitectureChangeTracker();

        tracker.track({

            id:"1",
            componentId:"brain.graph",
            action:"refactor",
            reason:"reduce coupling",
            author:"ACKIOS",
            timestamp:new Date(),
            metadata:{}

        });

        expect(tracker.getChanges("brain.graph")).toHaveLength(1);

        expect(tracker.getLatest()?.action).toBe("refactor");

    });

});
