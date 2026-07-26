import { RuntimeLifecycleStage } from "./RuntimeLifecycleStage.js";


export interface RuntimeState {

    initialized: boolean;

    installed: boolean;

    workspaceReady: boolean;

    ready: boolean;

    stage:
        RuntimeLifecycleStage;

    lastStartTime?: string;

}
