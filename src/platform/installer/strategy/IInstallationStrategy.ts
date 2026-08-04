import { InstallationContext } from "../InstallationContext.js";
import { InstallationStrategyResult } from "./InstallationStrategyResult.js";


export interface IInstallationStrategy {


    canHandle(
        context: InstallationContext
    ): boolean;



    install(
        context: InstallationContext
    ): Promise<InstallationStrategyResult>;


}
