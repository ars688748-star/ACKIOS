import { ReleaseAssetService } from "./ReleaseAssetService.js";



export class ReleaseAssetFactory {



    public static create(){


        return new ReleaseAssetService();



    }


}
