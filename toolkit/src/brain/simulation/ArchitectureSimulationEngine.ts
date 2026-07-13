import { ArchitectureSimulationResult } from "../models/ArchitectureSimulationResult.js";

export class ArchitectureSimulationEngine {

    public simulate(
        components: readonly string[]
    ): ArchitectureSimulationResult {

        return {

            success: true,

            affectedComponents: [...components],

            warnings: [],

            estimatedRisk: 0

        };

    }

}
