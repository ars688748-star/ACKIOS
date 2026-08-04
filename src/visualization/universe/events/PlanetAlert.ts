import type { UniverseEvent } from "./UniverseEvent.js";

import type { HealthState } from "../model/HealthState.js";


export interface PlanetAlert
    extends UniverseEvent {


    readonly type:

        "planet-alert";



    readonly health:

        HealthState;



    readonly source:

        string;


}
