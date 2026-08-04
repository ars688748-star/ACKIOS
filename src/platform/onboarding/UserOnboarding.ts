import { OnboardingContext } from "./OnboardingContext.js";
import { OnboardingResult } from "./OnboardingResult.js";


export class UserOnboarding {


    public async run(
        workspacePath: string,
        username?: string
    ): Promise<OnboardingResult> {


        const context: OnboardingContext =
        {
            username,

            workspacePath,

            preferencesConfigured:
                true,

            workspaceSelected:
                true,

            completed:
                true
        };


        return {
            success:
                true,

            message:
                "ACKIOS onboarding completed.",

            context
        };

    }


}
