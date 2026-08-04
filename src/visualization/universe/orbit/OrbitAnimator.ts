export class OrbitAnimator {



    private angle = 0;



    public update(

        delta: number

    ): number {


        this.angle += delta;


        if (

            this.angle >

            Math.PI * 2

        ) {


            this.angle -=

                Math.PI * 2;


        }


        return this.angle;


    }



    public getAngle(): number {


        return this.angle;


    }


}
