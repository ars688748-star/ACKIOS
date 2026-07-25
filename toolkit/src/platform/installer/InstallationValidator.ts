import { EnvironmentScanner } from "../environment/EnvironmentScanner.js";


export class InstallationValidator {


    public constructor(
        private readonly environmentScanner: EnvironmentScanner
    ) {}


    public async validate(): Promise<boolean> {


        const environment =
            await this.environmentScanner.scan();


        return Boolean(
            environment
        );

    }

}
