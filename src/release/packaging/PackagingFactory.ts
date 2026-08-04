import { PackagingService } from "./PackagingService.js";



export class PackagingFactory {



    public static create(){


        return new PackagingService();


    }


}
