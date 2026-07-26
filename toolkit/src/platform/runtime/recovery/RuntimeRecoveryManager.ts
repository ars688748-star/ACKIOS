import { RuntimeState } from "../state/RuntimeState.js";
import { RuntimeRecoveryDecision } from "./RuntimeRecoveryDecision.js";


export class RuntimeRecoveryManager {


    public decide(
        state: RuntimeState
    ):
        RuntimeRecoveryDecision {


        switch (
            state.stage
        ) {


            case "created":

                return "restart";


            case "installed":

                return "resume";


            case "wizard":

                return "continue";


            case "onboarding":

                return "continue";


            case "adaptation":

                return "resume";


            case "ready":

                return "ready";


            default:

                return "restart";

        }

    }


}
