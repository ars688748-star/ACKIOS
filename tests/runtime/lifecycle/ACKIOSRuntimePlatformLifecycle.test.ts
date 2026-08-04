import { describe, it, expect } from "vitest";

import { ACKIOSRuntimeBuilder } from "../../../src/runtime/ACKIOSRuntimeBuilder.js";

describe("ACKIOS Runtime Platform Lifecycle Integration", () => {

    it("should initialize, start and stop platform through runtime", async () => {

        const runtime =
            new ACKIOSRuntimeBuilder().build();

        await runtime.initialize();

        expect(
            runtime.hasService("platformManager")
        ).toBe(true);

        await runtime.start();

        const status =
            runtime.getStatus();

        expect(status.state).toBeDefined();

        await runtime.stop();

    });

});
