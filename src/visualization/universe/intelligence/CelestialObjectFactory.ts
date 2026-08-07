import type { CelestialObject } from "../model/CelestialObject.js";

import { HealthStateMapper } from "./HealthStateMapper.js";


export class CelestialObjectFactory {


    private readonly healthMapper =
        new HealthStateMapper();



    public create(
        id: string,
        name: string,
        type: CelestialObject["type"],
        score?: number
    ): CelestialObject {


        return {

            id,

            name,

            type,

            importance: 1,


            health:
                this.healthMapper.map(
                    score
                ),


            position: {

                x: 0,

                y: 0,

                z: 0

            }

        };


    }


}
