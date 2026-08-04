import type { IArchitectureModel } from "./IArchitectureModel.js";

export interface IArchitectureProvider {

    load(): Promise<IArchitectureModel>;

}
