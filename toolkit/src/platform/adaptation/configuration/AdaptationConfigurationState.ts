import { AdaptationConfiguration } from "./AdaptationConfiguration.js";


export class AdaptationConfigurationState {


    private configuration?:
        AdaptationConfiguration;


    public set(
        configuration: AdaptationConfiguration
    ): void {

        this.configuration =
            configuration;

    }


    public get():
        AdaptationConfiguration | undefined {

        return this.configuration;

    }


    public clear(): void {

        this.configuration =
            undefined;

    }


}
