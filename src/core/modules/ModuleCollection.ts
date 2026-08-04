import { IModule } from "./IModule.js";

export class ModuleCollection {

    private readonly modules: IModule[] = [];

    public add(module: IModule): void {

        this.modules.push(module);

    }

    public getAll(): readonly IModule[] {

        return this.modules;

    }

}
