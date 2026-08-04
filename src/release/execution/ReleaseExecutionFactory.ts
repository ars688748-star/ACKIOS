import { ReleaseExecutionService } from "./ReleaseExecutionService.js";



export class ReleaseExecutionFactory {



    public static create(){


        return new ReleaseExecutionService();



    }


}
