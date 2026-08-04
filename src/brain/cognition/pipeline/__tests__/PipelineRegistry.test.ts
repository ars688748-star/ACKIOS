import { describe, expect, it } from "vitest";

import {
    PipelineRegistry,
    PipelineStage
} from "../index.js";

describe("PipelineRegistry", () => {

    it("registers modules by stage", () => {

        const registry = new PipelineRegistry();

        registry.register(
            PipelineStage.PreProcess,
            "WorkingMemory"
        );

        registry.register(
            PipelineStage.Core,
            "Prediction"
        );

        registry.register(
            PipelineStage.PostProcess,
            "Reflection"
        );

        expect(
            registry.getModules(PipelineStage.PreProcess)
        ).toEqual(["WorkingMemory"]);

        expect(
            registry.getModules(PipelineStage.Core)
        ).toEqual(["Prediction"]);

        expect(
            registry.getModules(PipelineStage.PostProcess)
        ).toEqual(["Reflection"]);

        expect(
            registry.getModules(PipelineStage.Result)
        ).toEqual([]);

    });

});
