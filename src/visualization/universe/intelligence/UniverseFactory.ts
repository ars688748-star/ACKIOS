import type { Universe } from "../model/Universe.js";

import { UniverseIntelligenceBridge } from "../bridge/intelligence/UniverseIntelligenceBridge.js";

import { ACKIOSIntelligenceSource } from "../bridge/intelligence/sources/ACKIOSIntelligenceSource.js";

import {
    UniverseRuntimeIntelligenceAdapter
} from "../bridge/intelligence/UniverseRuntimeIntelligenceAdapter.js";

import type {
    ACKIOSRuntimeState
} from "../bridge/intelligence/sources/ACKIOSRuntimeIntelligenceSource.js";



export class UniverseFactory {


    private readonly intelligenceBridge =

        new UniverseIntelligenceBridge();



    private readonly source =

        new ACKIOSIntelligenceSource();



    private readonly runtimeAdapter =

        new UniverseRuntimeIntelligenceAdapter();




    public create(

        id: string,

        name: string,

        runtimeState?: ACKIOSRuntimeState

    ): Universe {



        const sources =

            runtimeState

                ? this.runtimeAdapter.collect(
                    runtimeState
                )

                : this.source.collect();




        const objects =

            this.intelligenceBridge.createObjects(

                sources

            );



        return {


            id,


            name,


            objects,


            createdAt:

                new Date()


        };


    }


}
