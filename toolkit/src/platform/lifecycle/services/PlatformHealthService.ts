import { PlatformLifecycleState } from "../models/PlatformLifecycleState.js";
import { PlatformNode } from "../models/PlatformNode.js";

export class PlatformHealthService {

    calculate(nodes: PlatformNode[]): PlatformLifecycleState {

        if (nodes.length === 0)
            return PlatformLifecycleState.NotInstalled;

        if (nodes.some(x => x.state === PlatformLifecycleState.Error))
            return PlatformLifecycleState.Error;

        if (nodes.some(x => x.state === PlatformLifecycleState.Degraded))
            return PlatformLifecycleState.Degraded;

        if (nodes.every(x => x.state === PlatformLifecycleState.Healthy))
            return PlatformLifecycleState.Healthy;

        if (nodes.every(x => x.state === PlatformLifecycleState.Running))
            return PlatformLifecycleState.Running;

        return PlatformLifecycleState.Initialized;
    }
}
