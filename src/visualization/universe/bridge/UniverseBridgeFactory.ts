import {
    BrainUniverseBridge
} from "./BrainUniverseBridge.js";

import type {
    UniverseEventReceiver
} from "./BrainUniverseBridge.js";

export class UniverseBridgeFactory {

    public static create(

        receiver: UniverseEventReceiver

    ) {

        return new BrainUniverseBridge(

            receiver

        );

    }

}
