import type { UniverseIntelligenceSource } from "../UniverseIntelligenceBridge.js";


export interface ACKIOSRuntimeState {


    brainScore?: number;


    cognitionScore?: number;


    intelligenceScore?: number;


    dashboardScore?: number;


}



export class ACKIOSRuntimeIntelligenceSource {


    public collect(

        state: ACKIOSRuntimeState

    ): UniverseIntelligenceSource[] {


        return [


            {

                id: "brain",

                name: "Brain System",

                type: "planet",

                score: state.brainScore

            },


            {

                id: "cognition",

                name: "Cognitive Runtime",

                type: "planet",

                score: state.cognitionScore

            },


            {

                id: "intelligence",

                name: "Project Intelligence",

                type: "planet",

                score: state.intelligenceScore

            },


            {

                id: "dashboard",

                name: "Dashboard Runtime",

                type: "satellite",

                score: state.dashboardScore

            }


        ];


    }


}
