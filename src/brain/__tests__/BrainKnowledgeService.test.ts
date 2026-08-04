import { describe,it,expect } from "vitest";

import { ProjectBrain } from "../ProjectBrain.js";
import { BrainKnowledgeService } from "../services/BrainKnowledgeService.js";

describe("BrainKnowledgeService",()=>{

    it("returns graph",()=>{

        const brain=new ProjectBrain();

        const service=new BrainKnowledgeService(brain);

        expect(service.getGraph()).toBe(brain.graph);

    });

});
