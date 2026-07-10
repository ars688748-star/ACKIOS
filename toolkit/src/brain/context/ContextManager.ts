import { BrainService } from "../services/BrainService.js";
import { IContextManager } from "../contracts/IContextManager.js";
import { BrainContext } from "./runtime/BrainContext.js";

export class ContextManager extends BrainService implements IContextManager {

    public readonly name = "ContextManager";

    private current?: BrainContext;

    public create(): BrainContext {

        this.current = new BrainContext();

        return this.current;

    }

    public getCurrent(): BrainContext | undefined {

        return this.current;

    }

    public clear(): void {

        this.current = undefined;

    }

}
