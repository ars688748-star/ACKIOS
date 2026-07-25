import { IToolProvider } from "./contracts/IToolProvider.js";

export class ToolRegistry {

    private readonly providers: IToolProvider[] = [];

    public register(provider: IToolProvider): void {

        this.providers.push(provider);

    }

    public getAll(): readonly IToolProvider[] {

        return this.providers;

    }

}
