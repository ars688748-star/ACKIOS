import type { UniverseEvent } from "./UniverseEvent.js";


export interface CometEvent
    extends UniverseEvent {


    readonly type:

        "comet";



    readonly severity:

        "low" |
        "medium" |
        "high";



    readonly trajectory?: {


        from: {

            x: number;

            y: number;

            z: number;

        };


        to: {

            x: number;

            y: number;

            z: number;

        };


    };


}
