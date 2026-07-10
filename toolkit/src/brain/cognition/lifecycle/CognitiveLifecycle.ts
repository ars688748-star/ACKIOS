import { CognitiveState } from "./CognitiveState.js";

export class CognitiveLifecycle{

    private state=CognitiveState.Created;

    getState():CognitiveState{

        return this.state;

    }

    initialize(){

        this.state=CognitiveState.Initialized;

    }

    start(){

        this.state=CognitiveState.Running;

    }

    stop(){

        this.state=CognitiveState.Stopped;

    }

}
