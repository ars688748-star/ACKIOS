import { FirstRunState } from "./FirstRunState.js";
import { FirstRunWizard } from "../wizard/FirstRunWizard.js";
import { UserOnboarding } from "../onboarding/UserOnboarding.js";
import { AdaptationRuntime } from "../adaptation/runtime/AdaptationRuntime.js";
import { RuntimeStateManager } from "./state/RuntimeStateManager.js";


export class FirstRunCoordinator {


    public constructor(
        private readonly state: FirstRunState,
        private readonly wizard: FirstRunWizard,
        private readonly onboarding: UserOnboarding,
        private readonly adaptationRuntime?: AdaptationRuntime,
        private readonly runtimeStateManager?: RuntimeStateManager
    ) {}



    public async run(
        workspacePath: string,
        username?: string
    ): Promise<boolean> {


        if (this.runtimeStateManager) {

            const runtimeState =
                await this.runtimeStateManager.load();


            if (runtimeState?.ready) {

                return true;

            }

        }


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



        if (this.runtimeStateManager) {

            await this.runtimeStateManager.save({

                initialized: true,

                installed: true,

                workspaceReady: true,

                ready: true,

                lastStartTime:
                    new Date().toISOString()

            });

        }



        this.state.complete();


        return true;

    }


}
