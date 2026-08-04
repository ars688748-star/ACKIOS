import { ReleaseGateEngine } from "./ReleaseGateEngine.js";



export class ReleaseGateService {



    private readonly engine =

        new ReleaseGateEngine();





    public validate(){


        return this.engine.run();


    }


}
