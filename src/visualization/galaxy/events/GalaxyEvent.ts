export type GalaxyEventType =

    | "NODE_SELECTED"

    | "CAMERA_FOCUSED"

    | "SCENE_UPDATED"

    | "RUNTIME_SYNCED"

    | "ANIMATION_STARTED";



export interface GalaxyEvent {


    readonly type: GalaxyEventType;


    readonly timestamp: Date;


    readonly payload?: unknown;


}
