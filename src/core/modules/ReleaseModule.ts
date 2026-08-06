import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";

import { ReleaseVisibilityService } from "../../release/security/ReleaseVisibilityService.js";
import { ReleaseVisibilityScanner } from "../../release/security/ReleaseVisibilityScanner.js";
import { PrivateFileRule } from "../../release/security/PrivateFileRule.js";

import { ReleasePackageService } from "../../release/package/ReleasePackageService.js";
import { ReleasePackageBuilder } from "../../release/package/ReleasePackageBuilder.js";
import { ChecksumGenerator } from "../../release/package/ChecksumGenerator.js";

import { ReleaseExecutionService } from "../../release/execution/ReleaseExecutionService.js";
import { GitTagExecution } from "../../release/execution/GitTagExecution.js";
import { GitHubReleaseExecution } from "../../release/execution/GitHubReleaseExecution.js";
import { ReleaseAssetCheck } from "../../release/execution/ReleaseAssetCheck.js";

import { PublicationService } from "../../release/publication/PublicationService.js";
import { GitTagManager } from "../../release/publication/GitTagManager.js";
import { GitHubReleasePublisher } from "../../release/publication/GitHubReleasePublisher.js";
import { ReleaseNotesGenerator } from "../../release/publication/ReleaseNotesGenerator.js";
import { AssetUploader } from "../../release/publication/AssetUploader.js";
import { PublicationWorkflow } from "../../release/publication/PublicationWorkflow.js";


export class ReleaseModule implements IServiceModule {


    public register(
        container: ServiceContainer
    ): void {


        container.register(

            "releaseVisibility",

            new ReleaseVisibilityService(

                new ReleaseVisibilityScanner(

                    new PrivateFileRule()

                )

            )

        );


        container.register(

            "releasePackage",

            new ReleasePackageService(

                new ReleasePackageBuilder(),

                new ChecksumGenerator()

            )

        );


        container.register(

            "releaseExecution",

            new ReleaseExecutionService(

                new GitTagExecution(),

                new GitHubReleaseExecution(),

                new ReleaseAssetCheck()

            )

        );


        container.register(

            "releasePublication",

            new PublicationService(

                new GitTagManager(),

                new GitHubReleasePublisher(),

                new ReleaseNotesGenerator(),

                new AssetUploader(),

                new PublicationWorkflow()

            )

        );


    }

}


