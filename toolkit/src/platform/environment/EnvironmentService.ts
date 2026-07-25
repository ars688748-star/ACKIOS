import { EnvironmentProfile } from "../models/EnvironmentProfile.js";
import { IEnvironmentScanner } from "../contracts/IEnvironmentScanner.js";


export class EnvironmentService {


    public constructor(
        private readonly scanner: IEnvironmentScanner
    ) {}


    public async analyze(): Promise<EnvironmentProfile> {


        return await this.scanner.scan();


    }

}
