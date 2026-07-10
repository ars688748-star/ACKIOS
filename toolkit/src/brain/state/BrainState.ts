import { IBrainState } from "./IBrainState.js";

export class BrainState implements IBrainState {

    public initialized = false;

    public running = false;

    public disposed = false;

}
