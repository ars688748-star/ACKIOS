export class FrameScheduler {


    private frame = 0;



    public next(

        delta: number

    ) {


        this.frame++;



        return {


            frame:

                this.frame,


            delta


        };


    }


}
