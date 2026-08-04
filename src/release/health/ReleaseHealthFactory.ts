import { ReleaseHealthService } from "./ReleaseHealthService.js";



export class ReleaseHealthFactory {



    public static create(){


        return new ReleaseHealthService();



    }


}
