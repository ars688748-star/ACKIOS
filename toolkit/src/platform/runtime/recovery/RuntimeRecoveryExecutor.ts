import { RuntimeRecoveryDecision } from "./RuntimeRecoveryDecision.js";


export class RuntimeRecoveryExecutor {


    public execute(
        decision: RuntimeRecoveryDecision
    ):
        string {


        switch (
            decision
        ) {


            case "restart":

                return "Restart runtime installation";


            case "resume":

                return "Resume runtime lifecycle";


            case "continue":

                return "Continue first run flow";


            case "ready":

                return "Runtime already ready";


            default:

                return "Unknown recovery action";

        }

    }


}
