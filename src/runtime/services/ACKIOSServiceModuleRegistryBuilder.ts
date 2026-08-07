import { IServiceModule } from "../../core/modules/IServiceModule.js";

import { EventModule } from "../../core/modules/EventModule.js";
import { PlatformModule } from "../../core/modules/PlatformModule.js";
import { FirstRunModule } from "../../core/modules/FirstRunModule.js";
import { PublishModule } from "../../core/modules/PublishModule.js";
import { PublicationModule } from "../../core/modules/PublicationModule.js";
import { DashboardModule } from "../../core/modules/DashboardModule.js";
import { ScannerModule } from "../../core/modules/ScannerModule.js";
import { InspectorModule } from "../../core/modules/InspectorModule.js";
import { HealthModule } from "../../core/modules/HealthModule.js";
import { GuardianModule } from "../../core/modules/GuardianModule.js";
import { ReleaseModule } from "../../core/modules/ReleaseModule.js";
import { PluginManagerModule } from "../../core/modules/PluginManagerModule.js";

export class ACKIOSServiceModuleRegistryBuilder {

    public build(): IServiceModule[] {

        return [

            new EventModule(),

            new PlatformModule(),

            new FirstRunModule(),

            new ScannerModule(),
            new InspectorModule(),

            new HealthModule(),

            new GuardianModule(),

            new ReleaseModule(),

            new PublishModule(),

            new PublicationModule(),

            new PluginManagerModule(),

            new DashboardModule()

        ];

    }

}

















