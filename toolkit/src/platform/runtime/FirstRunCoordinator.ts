import { FirstRunState } from "./FirstRunState.js";
import { FirstRunWizard } from "../wizard/FirstRunWizard.js";
import { UserOnboarding } from "../onboarding/UserOnboarding.js";
import { AdaptationRuntime } from "../adaptation/runtime/AdaptationRuntime.js";


export class FirstRunCoordinator {


    public constructor(
        private readonly state: FirstRunState,
        private readonly wizard: FirstRunWizard,
        private readonly onboarding: UserOnboarding,
        private readonly adaptationRuntime?: AdaptationRuntime
    ) {}


    public async run(
        workspacePath: string,
        username?: string
    ): Promise<boolean> {


        if (
            this.state.isCompleted()
        ) {

            return true;

        }


        const wizardResult =
            await this.wizard.run(
                workspacePath,
                "1.0.0"
            );


        if (
            !wizardResult.success
        ) {

            return false;

        }


        const onboardingResult =
            await this.onboarding.run(
                workspacePath,
                username
            );


        if (
            !onboardingResult.success
        ) {

            return false;

        }


        if (this.adaptationRuntime) {

            await this.adaptationRuntime.getStrategy();

        }

        this.state.complete();


        return true;

    }


}



