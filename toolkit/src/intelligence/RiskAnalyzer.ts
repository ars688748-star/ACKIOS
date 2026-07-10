import {
    ArchitectureReport
} from "./architecture/index.js";

import {
    Risk,
    RiskLevel,
    RiskReport
} from "./risk/index.js";

export class RiskAnalyzer {

    analyze(
        architecture: ArchitectureReport
    ): RiskReport {

        const risks: Risk[] = [];

        if (!architecture.hasTests) {

            risks.push({
                id: "tests",
                title: "Tests Missing",
                description: "Project has no detected test suite.",
                level: RiskLevel.High
            });

        }

        if (!architecture.hasLint) {

            risks.push({
                id: "lint",
                title: "Lint Missing",
                description: "ESLint configuration was not found.",
                level: RiskLevel.Medium
            });

        }

        if (!architecture.hasFormatter) {

            risks.push({
                id: "formatter",
                title: "Formatter Missing",
                description: "Code formatter configuration was not found.",
                level: RiskLevel.Low
            });

        }

        if (architecture.score < 50) {

            risks.push({
                id: "architecture",
                title: "Weak Architecture",
                description: "Architecture score is below recommended level.",
                level: RiskLevel.High
            });

        }

        let score = 100;

        for (const risk of risks) {

            switch (risk.level) {

                case RiskLevel.Low:
                    score -= 5;
                    break;

                case RiskLevel.Medium:
                    score -= 10;
                    break;

                case RiskLevel.High:
                    score -= 20;
                    break;

                case RiskLevel.Critical:
                    score -= 40;
                    break;

            }

        }

        score = Math.max(0, score);

        return {

            score,

            risks

        };

    }

}
