import { PlatformLifecycleState } from "../models/PlatformLifecycleState.js";
import { PlatformNode } from "../models/PlatformNode.js";

export class PlatformLifecycleService {

    transition(
        component: PlatformNode,
        state: PlatformLifecycleState
    ): PlatformNode {

        return {
            ...component,
            state
        };
    }
}
