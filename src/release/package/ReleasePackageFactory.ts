import { ReleasePackageService } from "./ReleasePackageService.js";



export class ReleasePackageFactory {



    public static create(){


        return new ReleasePackageService();


    }


}
