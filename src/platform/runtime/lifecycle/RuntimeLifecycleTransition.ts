import { RuntimeLifecycleStage } from "../state/RuntimeLifecycleStage.js";


export interface RuntimeLifecycleTransition {

    from:
        RuntimeLifecycleStage;


    to:
        RuntimeLifecycleStage;

}
