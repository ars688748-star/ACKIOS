import { IToolProvider } from "./contracts/IToolProvider.js";
import { ToolRegistry } from "./ToolRegistry.js";
import { ToolInfo } from "./models/ToolInfo.js";

export class ToolDiscoveryService {

    private readonly registry = new ToolRegistry();

    public register(provider: IToolProvider): void {

        this.registry.register(provider);

    }

    public async detectAll(): Promise<ToolInfo[]> {

        const result: ToolInfo[] = [];

        for (const provider of this.registry.getAll()) {

            result.push(await provider.detect());

        }

        return result;

    }

}
