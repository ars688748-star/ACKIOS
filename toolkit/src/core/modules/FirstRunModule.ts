import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";

import { FirstRunState } from "../../platform/runtime/FirstRunState.js";
import { FirstRunCoordinator } from "../../platform/runtime/FirstRunCoordinator.js";

import { FirstRunWizard } from "../../platform/wizard/FirstRunWizard.js";
import { UserOnboarding } from "../../platform/onboarding/UserOnboarding.js";


export class FirstRunModule implements IServiceModule {


    public register(
        container: ServiceContainer
    ): void {


        const state =
            new FirstRunState();


        const wizard =
            new FirstRunWizard();


        const onboarding =
            new UserOnboarding();


        const coordinator =
            new FirstRunCoordinator(
                state,
                wizard,
                onboarding
            );


        container.register(
            "firstRunState",
            state
        );


        container.register(
            "firstRunCoordinator",
            coordinator
        );


    }


}
