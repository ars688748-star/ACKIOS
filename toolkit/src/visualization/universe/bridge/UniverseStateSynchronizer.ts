export interface BrainState {


    readonly id:

        string;



    readonly status:

        string;



}





export interface UniverseState {


    readonly objects:

        Map<string,string>;


}





export class UniverseStateSynchronizer {



    private readonly state:

        UniverseState = {


            objects:

                new Map()


        };





    public synchronize(

        brain:

            BrainState

    ): UniverseState {



        this.state.objects.set(

            brain.id,

            brain.status

        );



        return this.state;


    }


}
