import { ServiceContainer } from "./ServiceContainer.js";
import { Logger } from "./Logger.js";

import { Workspace } from "../workspace/Workspace.js";
import { ProcessRunner } from "../infrastructure/ProcessRunner.js";

export function createContainer(): ServiceContainer {

    const container = new ServiceContainer();

    container.register("logger", new Logger());
    container.register("workspace", new Workspace());
    container.register("processRunner", new ProcessRunner());

    return container;

}
