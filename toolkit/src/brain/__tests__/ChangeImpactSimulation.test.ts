import { describe, expect, it } from "vitest";

import {
    KnowledgeCategory,
    KnowledgeManager,
    KnowledgeNode
} from "../knowledge/index.js";

import { ChangeImpactSimulation } from "../simulation/ChangeImpactSimulation.js";

describe("ChangeImpactSimulation", () => {

    it("simulates impact for existing component", () => {

        const knowledge = new KnowledgeManager();

        knowledge.addNode(
            new KnowledgeNode(
                "brain.graph",
                "module",
                "Brain Graph"
            ),
            KnowledgeCategory.Custom
        );

        const simulation = new ChangeImpactSimulation(knowledge);

        const result = simulation.simulate("brain.graph");

        expect(result.success).toBe(true);

        expect(result.affectedComponents).toContain("brain.graph");

        expect(result.estimatedRisk).toBe(10);

    });

});
