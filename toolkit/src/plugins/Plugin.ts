import { PluginMetadata } from "./PluginMetadata.js";
import { PluginContext } from "./PluginContext.js";

export interface Plugin {

    metadata: PluginMetadata;

    activate(context: PluginContext): void;

    deactivate(): void;

}
