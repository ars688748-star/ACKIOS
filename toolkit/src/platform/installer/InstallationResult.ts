import { InstallationContext } from "./InstallationContext.js";


export interface InstallationResult {

    success: boolean;

    message: string;

    context?: InstallationContext;

}
