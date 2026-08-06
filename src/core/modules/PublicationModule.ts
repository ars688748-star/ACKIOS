import { IServiceModule } from "./IServiceModule.js";
import { IInitializableModule } from "./IInitializableModule.js";
import { ServiceContainer } from "../ServiceContainer.js";

import { Guardian } from "../../guardian/Guardian.js";
import { PublishManager } from "../../publish/manager/PublishManager.js";
import { PublicationCenter } from "../../publication/services/PublicationCenter.js";

import { PublicationEngine } from "../../publication/core/PublicationEngine.js";
import { PublicationRegistryFactory } from "../../publication/core/PublicationRegistryFactory.js";

import { PublicationSelector } from "../../publication/session/PublicationSelector.js";
import { PublicationWizard } from "../../publication/session/PublicationWizard.js";

import { CredentialVault } from "../../publication/security/CredentialVault.js";
import { EncryptedCredentialStore } from "../../publication/security/EncryptedCredentialStore.js";

import { PublicationSchemaFactory } from "../../publication/config/registry/PublicationSchemaFactory.js";

import { PublishExplorerFactory } from "../../publication/explorer/PublishExplorerFactory.js";

import { PublishWorkflowFactory } from "../../publication/workflow/PublishWorkflowFactory.js";

import { PublicationPluginFactory } from "../../publication/plugins/PublicationPluginFactory.js";
import { PublicationPluginRuntime } from "../../publication/plugins/runtime/PublicationPluginRuntime.js";
import { PublicationPluginAdapter } from "../../publication/plugins/PublicationPluginAdapter.js";


export class PublicationModule implements IServiceModule, IInitializableModule {

    private registry!: any;


    private pluginRuntime!: PublicationPluginRuntime;


    public register(

        container:

            ServiceContainer

    ): void {


        const guardian =

            container.resolve<Guardian>(

                "guardian"

            );


        const publishManager =

            container.resolve<PublishManager>(

                "publishManager"

            );



        const vault =

            new CredentialVault(

                new EncryptedCredentialStore()

            );



        container.register(

            "credentialVault",

            vault

        );




        const pluginRegistry =

            PublicationPluginFactory.create();



        this.pluginRuntime =

            new PublicationPluginRuntime(

                pluginRegistry

            );


        this.pluginRuntime.loadBuiltInPlugins();

        this.registry =

            PublicationRegistryFactory.create(

                pluginRegistry

            );



        const engine =

            new PublicationEngine(

                this.registry

            );



        const workflow =

            PublishWorkflowFactory.create(

                engine

            );



        const wizard =

            new PublicationWizard(

                new PublicationSelector(

                    this.registry

                ),

                engine,

                vault,

                PublicationSchemaFactory.create()

            );



        container.register(

            "publicationCenter",

            new PublicationCenter(

                guardian,

                publishManager

            )

        );



        container.register(

            "publicationEngine",

            engine

        );



        container.register(

            "publishWorkflow",

            workflow

        );



        container.register(

            "publicationPluginRegistry",

            pluginRegistry

        );


        container.register(

            "publicationPluginRuntime",

            this.pluginRuntime

        );


        container.register(

            "publicationWizard",

            wizard
        );



        container.register(

            "publishExplorer",

            PublishExplorerFactory.create(

                wizard,

                workflow

            )

        );





    }



    public async initialize():

        Promise<void> {


        await this.pluginRuntime.scanExternalPlugins(

            ".ackios/plugins"

        );


        for(const plugin of this.pluginRuntime.plugins()){


            this.registry.register(

                PublicationPluginAdapter.adapt(

                    plugin

                )

            );


        }


    }

}








