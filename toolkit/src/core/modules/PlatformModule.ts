import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";
import { PlatformService } from "../../platform/PlatformService.js";
import { ToolDiscoveryService } from "../../platform/tools/ToolDiscoveryService.js";
import { GitToolProvider } from "../../platform/tools/providers/GitToolProvider.js";
import { NodeToolProvider } from "../../platform/tools/providers/NodeToolProvider.js";

export class PlatformModule implements IServiceModule {

    public register(container: ServiceContainer): void {

        container.register(
            "platform",
            new PlatformService()
        );

        const discovery = new ToolDiscoveryService();

        discovery.register(new GitToolProvider());
        discovery.register(new NodeToolProvider());

        container.register(
            "toolDiscovery",
            discovery
        );

    }

}
