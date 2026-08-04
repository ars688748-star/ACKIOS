import { InstallerService } from "./InstallerService.js";



export class InstallerFactory {



    public static create(){


        return new InstallerService();



    }


}
