import { PlatformComponentType } from "./PlatformComponentType.js";
import { PlatformLifecycleState } from "./PlatformLifecycleState.js";

export interface PlatformNode {
    id: string;
    name: string;
    type: PlatformComponentType;
    state: PlatformLifecycleState;
    enabled: boolean;
    version?: string;
    dependencies?: string[];
    metadata?: Record<string, unknown>;
}
