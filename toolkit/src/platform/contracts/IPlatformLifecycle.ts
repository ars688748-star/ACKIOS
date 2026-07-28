import { PlatformHealthStatus } from "./PlatformHealthStatus.js";

export interface IPlatformLifecycle {
    initialize(): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
    restart(): Promise<void>;
    health(): Promise<PlatformHealthStatus>;
}
