export interface TickResult {


    readonly delta:

        number;



    readonly updatedAt:

        Date;


}



export class UniverseTickEngine {



    private lastTime =

        Date.now();





    public tick(): TickResult {



        const now =

            Date.now();



        const delta =

            (now - this.lastTime) /

            1000;



        this.lastTime = now;



        return {


            delta,


            updatedAt:

                new Date(now)


        };


    }



    public reset(): void {


        this.lastTime =

            Date.now();


    }


}
