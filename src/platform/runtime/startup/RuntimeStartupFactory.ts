import { RuntimeStartupService } from "./RuntimeStartupService.js";



export class RuntimeStartupFactory {



    public static create():

        RuntimeStartupService {


        return new RuntimeStartupService();


    }


}
