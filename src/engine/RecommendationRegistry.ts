import { RecommendationProvider } from "./contracts/RecommendationProvider.js";

import { DependenciesRecommendation } from "./recommendations/DependenciesRecommendation.js";
import { DockerRecommendation } from "./recommendations/DockerRecommendation.js";
import { EnginesRecommendation } from "./recommendations/EnginesRecommendation.js";
import { EslintRecommendation } from "./recommendations/EslintRecommendation.js";
import { GitignoreRecommendation } from "./recommendations/GitignoreRecommendation.js";
import { HomepageRecommendation } from "./recommendations/HomepageRecommendation.js";
import { LicenseRecommendation } from "./recommendations/LicenseRecommendation.js";
import { PackageManagerRecommendation } from "./recommendations/PackageManagerRecommendation.js";
import { ReadmeRecommendation } from "./recommendations/ReadmeRecommendation.js";
import { RepositoryRecommendation } from "./recommendations/RepositoryRecommendation.js";
import { ScriptsRecommendation } from "./recommendations/ScriptsRecommendation.js";
import { SecurityRecommendation } from "./recommendations/SecurityRecommendation.js";
import { TsConfigRecommendation } from "./recommendations/TsConfigRecommendation.js";

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

    registry.register(new DependenciesRecommendation());
    registry.register(new DockerRecommendation());
    registry.register(new EnginesRecommendation());
    registry.register(new EslintRecommendation());
    registry.register(new GitignoreRecommendation());
    registry.register(new HomepageRecommendation());
    registry.register(new LicenseRecommendation());
    registry.register(new PackageManagerRecommendation());
    registry.register(new ReadmeRecommendation());
    registry.register(new RepositoryRecommendation());
    registry.register(new ScriptsRecommendation());
    registry.register(new SecurityRecommendation());
    registry.register(new TsConfigRecommendation());

    return registry.getRecommendations();

}