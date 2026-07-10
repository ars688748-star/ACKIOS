export class PluginCompatibility {


    private readonly apiVersion = "1.0";


    check(
        manifest: any
    ): boolean {


        if (!manifest.apiVersion) {

            return false;

        }


        return (
            manifest.apiVersion === this.apiVersion
        );

    }


    getApiVersion(): string {

        return this.apiVersion;

    }

}
