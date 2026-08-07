import type { CelestialObject } from "../../model/CelestialObject.js";

import { CelestialObjectFactory } from "../../intelligence/CelestialObjectFactory.js";


export interface UniverseIntelligenceSource {


    id: string;


    name: string;


    type: CelestialObject["type"];


    score?: number;


}



export class UniverseIntelligenceBridge {


    private readonly factory =

        new CelestialObjectFactory();



    public createObjects(

        sources: UniverseIntelligenceSource[]

    ): CelestialObject[] {


        return sources.map(

            source =>

                this.factory.create(

                    source.id,

                    source.name,

                    source.type,

                    source.score

                )

        );


    }


}
