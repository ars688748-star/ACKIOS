import type { HealthEngine } from "../../../../../health/HealthEngine.js";

import type {
    ACKIOSRuntimeState
} from "./ACKIOSRuntimeIntelligenceSource.js";



export class HealthEngineUniverseAdapter {


    public constructor(
        private readonly healthEngine: HealthEngine
    ) {}



    public async collect():

        Promise<Partial<ACKIOSRuntimeState>> {


        const results =

            await this.healthEngine.execute();



        if (
            results.length === 0
        ) {

            return {};

        }



        let total = 0;



        for (const result of results) {


            if (
                result.status === "OK"
            ) {

                total += 100;

            }


            else if (
                result.status === "WARNING"
            ) {

                total += 60;

            }


            else {

                total += 20;

            }

        }



        const score =

            Math.round(
                total / results.length
            );



        return {


            intelligenceScore:

                score,


            dashboardScore:

                score


        };


    }


}

