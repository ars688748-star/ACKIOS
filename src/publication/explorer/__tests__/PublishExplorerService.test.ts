import { describe, expect, test } from "vitest";

import { PublicationPluginRegistry } from "../../plugins/PublicationPluginRegistry.js";
import { PublicationPluginRuntime } from "../../plugins/runtime/PublicationPluginRuntime.js";

import { PublicationRegistryFactory } from "../../core/PublicationRegistryFactory.js";

import { PublicationSelector } from "../../session/PublicationSelector.js";

import { PublicationEngine } from "../../core/PublicationEngine.js";

import { CredentialVault } from "../../security/CredentialVault.js";

import { PublicationSchemaRegistry } from "../../config/registry/PublicationSchemaRegistry.js";

import { PublicationWizard } from "../../session/PublicationWizard.js";

import { PublishWorkflow } from "../../workflow/PublishWorkflow.js";

import { PublishExplorerService } from "../PublishExplorerService.js";


describe(
    "PublishExplorerService",
    () => {


        test(
            "shows external plugins in explorer",
            async () => {


                const pluginRegistry =
                    new PublicationPluginRegistry();


                const pluginRuntime =
                    new PublicationPluginRuntime(
                        pluginRegistry
                    );


                await pluginRuntime.scanExternalPlugins(
                    ".ackios/plugins"
                );


                const platformRegistry =
                    PublicationRegistryFactory.create(
                        pluginRegistry
                    );


                const selector =
                    new PublicationSelector(
                        platformRegistry
                    );


                const wizard =
                    new PublicationWizard(
                        selector,
                        new PublicationEngine(
                            platformRegistry
                        ),
                        new CredentialVault(),
                        new PublicationSchemaRegistry()
                    );


                const explorer =
                    new PublishExplorerService(
                        wizard,
                        new PublishWorkflow(
                            new PublicationEngine(
                                platformRegistry
                            )
                        )
                    );


                const view =
                    explorer.getViewModel();


                expect(
                    view.platforms.some(
                        platform =>
                            platform.id === "demo-gitlab"
                    )
                ).toBe(true);


            }
        );


    }
);
