import { ProjectIntelligenceReport } from "../intelligence/index.js";

import {
    Recommendation,
    RecommendationCategory,
    RecommendationPriority,
    RecommendationReport
} from "./index.js";

export class RecommendationEngine {

    generate(
        report: ProjectIntelligenceReport
    ): RecommendationReport {

        const recommendations: Recommendation[] = [];

        if (!report.architecture.hasTests) {

            recommendations.push({

                id: "tests",

                title: "Add automated tests",

                description:
                    "Project has no detected test suite.",

                category: RecommendationCategory.Testing,

                priority: RecommendationPriority.High

            });

        }

        if (!report.architecture.hasLint) {

            recommendations.push({

                id: "lint",

                title: "Configure ESLint",

                description:
                    "Lint configuration is missing.",

                category: RecommendationCategory.Quality,

                priority: RecommendationPriority.Medium

            });

        }

        if (!report.architecture.hasFormatter) {

            recommendations.push({

                id: "formatter",

                title: "Configure Prettier",

                description:
                    "Formatter configuration is missing.",

                category: RecommendationCategory.Quality,

                priority: RecommendationPriority.Low

            });

        }

        if (report.risks.score < 70) {

            recommendations.push({

                id: "risk",

                title: "Reduce project risks",

                description:
                    "Project risk score is below recommended level.",

                category: RecommendationCategory.Architecture,

                priority: RecommendationPriority.High

            });

        }

        return {

            recommendations

        };

    }

}
