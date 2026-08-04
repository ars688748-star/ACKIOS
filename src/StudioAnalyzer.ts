import { ProjectIntelligenceBuilder } from "./intelligence/ProjectIntelligenceBuilder.js";
import { RecommendationEngine } from "./recommendations/index.js";
import { StudioReport } from "./StudioReport.js";

export class StudioAnalyzer {

    private readonly intelligence =
        new ProjectIntelligenceBuilder().build();

    private readonly recommendations =
        new RecommendationEngine();

    async analyze(workspace: string): Promise<StudioReport> {

        const intelligence =
            await this.intelligence.analyze(workspace);

        const recommendations =
            this.recommendations.generate(intelligence);

        return {

            intelligence,

            recommendations

        };

    }

}
