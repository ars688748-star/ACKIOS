import { ArchitectureInspector } from "../../inspector/services/ArchitectureInspector.js";

import { ArchitectureScoreEngine } from "../score/ArchitectureScoreEngine.js";

import { ArchitectureAssessment } from "./ArchitectureAssessment.js";

export class ArchitectureAssessmentEngine{

    public constructor(

        private readonly inspector:ArchitectureInspector,

        private readonly scores:ArchitectureScoreEngine

    ){}

    public async analyze():Promise<ArchitectureAssessment>{

        const inspection =
            await this.inspector.inspect();

        const score =
            this.scores.calculate(inspection);

        return{

            inspection,

            score

        };

    }

}

