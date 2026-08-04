import { RuntimeLifecycleStage } from "../state/RuntimeLifecycleStage.js";
import { RuntimeLifecycleTransition } from "./RuntimeLifecycleTransition.js";


export class RuntimeLifecycleTransitionEngine {


    private readonly transitions:
        RuntimeLifecycleTransition[] = [


            {
                from:
                    "created",

                to:
                    "installed"

            },


            {
                from:
                    "installed",

                to:
                    "wizard"

            },


            {
                from:
                    "wizard",

                to:
                    "onboarding"

            },


            {
                from:
                    "onboarding",

                to:
                    "adaptation"

            },


            {
                from:
                    "adaptation",

                to:
                    "ready"

            }

        ];



    public canTransition(
        from: RuntimeLifecycleStage,
        to: RuntimeLifecycleStage
    ):
        boolean {


        if (from === to) {

            return true;

        }


        return this.transitions.some(

            transition =>
                transition.from === from &&
                transition.to === to

        );

    }



    public transition(
        from: RuntimeLifecycleStage,
        to: RuntimeLifecycleStage
    ):
        RuntimeLifecycleStage {


        if (
            !this.canTransition(
                from,
                to
            )
        ) {

            throw new Error(
                `Invalid lifecycle transition: ${from} -> ${to}`
            );

        }


        return to;

    }


}

