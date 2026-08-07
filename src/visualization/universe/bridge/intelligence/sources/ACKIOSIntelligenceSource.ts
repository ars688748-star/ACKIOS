import type { UniverseIntelligenceSource } from "../UniverseIntelligenceBridge.js";


export class ACKIOSIntelligenceSource {


    public collect():

        UniverseIntelligenceSource[] {


        return [


            {

                id: "ackios-core",

                name: "ACKIOS Core",

                type: "star",

                score: 100

            },


            {

                id: "brain",

                name: "Brain System",

                type: "planet",

                score: 95

            },


            {

                id: "cognition",

                name: "Cognitive Runtime",

                type: "planet",

                score: 90

            },


            {

                id: "intelligence",

                name: "Project Intelligence",

                type: "planet",

                score: 85

            },


            {

                id: "dashboard",

                name: "Dashboard Runtime",

                type: "satellite",

                score: 80

            }


        ];


    }


}
