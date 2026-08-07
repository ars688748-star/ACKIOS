import type { UniverseIntelligenceSource } from "./UniverseIntelligenceBridge.js";

import {
    ACKIOSRuntimeIntelligenceSource,
    ACKIOSRuntimeState
} from "./sources/ACKIOSRuntimeIntelligenceSource.js";


export class UniverseRuntimeIntelligenceAdapter {


    private readonly source =

        new ACKIOSRuntimeIntelligenceSource();



    public collect(

        state: ACKIOSRuntimeState

    ): UniverseIntelligenceSource[] {


        return this.source.collect(

            state

        );


    }


}
