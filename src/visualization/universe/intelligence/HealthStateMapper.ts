import type { HealthState } from "../model/HealthState.js";


export class HealthStateMapper {


    public map(
        score?: number
    ): HealthState {


        if (
            score === undefined ||
            score === null
        ) {

            return "unknown";

        }


        if (
            score >= 80
        ) {

            return "healthy";

        }


        if (
            score >= 50
        ) {

            return "warning";

        }


        return "critical";


    }


}
