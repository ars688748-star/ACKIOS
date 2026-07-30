import { FrameScheduler } from "./FrameScheduler.js";


export class UniverseFrameLoop {


    private readonly scheduler =

        new FrameScheduler();



    public update(

        delta:number

    ) {


        return this.scheduler.next(

            delta

        );


    }


}
