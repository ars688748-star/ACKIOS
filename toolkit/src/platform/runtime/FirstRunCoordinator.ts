import { FirstRunState } from "./FirstRunState.js";
import { FirstRunWizard } from "../wizard/FirstRunWizard.js";
import { UserOnboarding } from "../onboarding/UserOnboarding.js";
import { AdaptationRuntime } from "../adaptation/runtime/AdaptationRuntime.js";
import { RuntimeStateManager } from "./state/RuntimeStateManager.js";
import { RuntimeRecoveryCoordinator } from "./recovery/RuntimeRecoveryCoordinator.js";


export class FirstRunCoordinator {


    public constructor(
        private readonly state: FirstRunState,
        private readonly wizard: FirstRunWizard,
        private readonly onboarding: UserOnboarding,
        private readonly adaptationRuntime?: AdaptationRuntime,
        private readonly runtimeStateManager?: RuntimeStateManager,
        private readonly recoveryCoordinator?: RuntimeRecoveryCoordinator
    ) {}



    public async run(
        workspacePath: string,
        username?: string
    ): Promise<boolean> {


        if (this.recoveryCoordinator) {

            await this.recoveryCoordinator.recover();

        }


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



        if (this.recoveryCoordinator) {

            await this.recoveryCoordinator.recover();

        }


        if (this.runtimeStateManager) {

            await this.runtimeStateManager.save({

                initialized:
                    true,

                installed:
                    true,

                workspaceReady:
                    true,

                ready:
                    true,

                stage:
                    "ready",

                lastStartTime:
                    new Date().toISOString()

            });
        }



        this.state.complete();


        return true;

    }


}






