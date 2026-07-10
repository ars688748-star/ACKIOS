import { ConfigLoader } from "./ConfigLoader.js";

export class ConfigManager {

    private readonly loader =
        new ConfigLoader();

    public load(
        root: string
    ) {

        return this.loader.load(root);

    }

}
