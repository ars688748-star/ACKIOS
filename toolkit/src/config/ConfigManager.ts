import { ConfigLoader } from "./ConfigLoader.js";

export class ConfigManager {

    public constructor(
        private readonly loader: ConfigLoader
    ) {}

    public load(
        root: string
    ) {

        return this.loader.load(root);

    }

}
