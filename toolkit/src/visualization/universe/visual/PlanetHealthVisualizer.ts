import type { HealthState } from "../model/HealthState.js";

import type { PlanetHealthVisualState } from "./PlanetHealthState.js";


export class PlanetHealthVisualizer {


    public resolve(

        health: HealthState

    ): PlanetHealthVisualState {


        switch (health) {


            case "warning":

                return "pulse";


            case "critical":

                return "danger";


            case "healthy":

            case "unknown":

            default:

                return "stable";


        }

    }


}
