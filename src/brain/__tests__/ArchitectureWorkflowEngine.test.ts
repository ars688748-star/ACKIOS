import { describe, expect, it } from "vitest";

import { ArchitectureWorkflowEngine } from "../workflow/ArchitectureWorkflowEngine.js";

describe("ArchitectureWorkflowEngine", () => {

    it("creates workflow from execution plan", () => {

        const engine = new ArchitectureWorkflowEngine();

        const workflow = engine.createWorkflow({

            goal: "Split Core",

            actions: [

                "Build",

                "Test"

            ]

        });

        expect(workflow.name).toBe("Split Core");

        expect(workflow.steps.length).toBe(2);

    });

});
