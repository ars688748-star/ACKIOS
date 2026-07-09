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

export function createRecommendationProviders():
    RecommendationProvider[] {

    return [

        new DependenciesRecommendation(),
        new DockerRecommendation(),
        new EnginesRecommendation(),
        new EslintRecommendation(),
        new GitignoreRecommendation(),
        new HomepageRecommendation(),
        new LicenseRecommendation(),
        new PackageManagerRecommendation(),
        new ReadmeRecommendation(),
        new RepositoryRecommendation(),
        new ScriptsRecommendation(),
        new SecurityRecommendation(),
        new TsConfigRecommendation()

    ];

}