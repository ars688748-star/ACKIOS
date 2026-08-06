import { ReleaseGateEngine } from "./ReleaseGateEngine.js";


export class ReleaseGateService {



    public constructor(

        private readonly engine:

            ReleaseGateEngine

    ){}




    public validate(){


        return this.engine.run();


    }


}
