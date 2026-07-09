import { Recommendation } from "./Recommendation.js";
import { RecommendationGroup } from "./RecommendationGroup.js";

export class RecommendationAggregator {

    public aggregate(
        recommendations: Recommendation[]
    ): RecommendationGroup[] {

        const map = new Map<
            string,
            RecommendationGroup
        >();

        for (const recommendation of recommendations) {

            const category =
                recommendation.category;

            let group = map.get(category);

            if (!group) {

                group = {

                    id: category,

                    title:
                        this.capitalize(category),

                    priority:
                        recommendation.priority,

                    recommendations: []

                };

                map.set(category, group);

            }

            group.recommendations.push(
                recommendation
            );

            if (
                recommendation.priority === "high"
            ) {

                group.priority = "high";

            }
            else if (
                recommendation.priority === "medium" &&
                group.priority === "low"
            ) {

                group.priority = "medium";

            }

        }

        return [...map.values()];

    }

    private capitalize(
        value: string
    ): string {

        return value.charAt(0).toUpperCase() +
            value.slice(1);

    }

}
