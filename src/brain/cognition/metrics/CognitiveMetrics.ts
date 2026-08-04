export class CognitiveMetrics{

    private cycles=0;

    increment():void{

        this.cycles++;

    }

    snapshot(){

        return{

            cycles:this.cycles

        };

    }

}
