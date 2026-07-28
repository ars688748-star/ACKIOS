import { IServiceModule } from "../../core/modules/IServiceModule.js";

import { EventModule } from "../../core/modules/EventModule.js";
import { PlatformModule } from "../../core/modules/PlatformModule.js";
import { FirstRunModule } from "../../core/modules/FirstRunModule.js";

export class ACKIOSServiceModuleRegistryBuilder {

    public build(): IServiceModule[] {

        return [
            new EventModule(),
            new PlatformModule(),
            new FirstRunModule()
        ];

    }

}
