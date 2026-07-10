import { RecommendationProvider } from "./contracts/RecommendationProvider.js";

export class RecommendationRegistry {

    private recommendations: RecommendationProvider[] = [];

    register(
        recommendation: RecommendationProvider
    ): void {

        this.recommendations.push(
            recommendation
        );

    }


    getRecommendations(): RecommendationProvider[] {

        return this.recommendations;

    }


    clear(): void {

        this.recommendations = [];

    }

}


export function createRecommendationProviders(): RecommendationProvider[] {

    const registry = new RecommendationRegistry();

    return registry.getRecommendations();

}
