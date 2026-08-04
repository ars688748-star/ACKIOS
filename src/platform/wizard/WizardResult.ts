import { WizardContext } from "./WizardContext.js";


export interface WizardResult {

    success: boolean;

    message: string;

    context?: WizardContext;

}
