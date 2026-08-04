import { EnvironmentProfile } from "../models/EnvironmentProfile.js";

export interface IEnvironmentScanner {

    scan(): Promise<EnvironmentProfile>;

}
