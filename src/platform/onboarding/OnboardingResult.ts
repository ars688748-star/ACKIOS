import { OnboardingContext } from "./OnboardingContext.js";


export interface OnboardingResult {

    success: boolean;

    message: string;

    context?: OnboardingContext;

}
