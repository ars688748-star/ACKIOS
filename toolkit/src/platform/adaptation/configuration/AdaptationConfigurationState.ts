import { AdaptationConfiguration } from "./AdaptationConfiguration.js";
import { AdaptationConfigurationStorage } from "./AdaptationConfigurationStorage.js";


export class AdaptationConfigurationState {


    private configuration?:
        AdaptationConfiguration;


    public constructor(
        private readonly storage:
            AdaptationConfigurationStorage
    ) {}


    public async set(
        configuration: AdaptationConfiguration
    ): Promise<void> {


        this.configuration =
            configuration;


        await this.storage.save(
            configuration
        );

    }


    public async get():
        Promise<AdaptationConfiguration | undefined> {


        if (this.configuration) {

            return this.configuration;

        }


        const stored =
            await this.storage.load();


        if (!stored) {

            return undefined;

        }


        this.configuration =
            stored;


        return stored;

    }


    public async clear(): Promise<void> {


        this.configuration =
            undefined;


        await this.storage.clear();

    }


}
