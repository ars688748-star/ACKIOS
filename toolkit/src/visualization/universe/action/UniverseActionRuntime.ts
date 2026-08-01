import { UniverseActionExecutor } from "./UniverseActionExecutor.js";
import type { UniverseAction } from "./UniverseAction.js";

export class UniverseActionRuntime {

    private readonly executor =
        new UniverseActionExecutor();

    public run(
        action: UniverseAction
    ) {

        return this.executor.execute(
            action
        );

    }

}
