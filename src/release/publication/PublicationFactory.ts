import { PublicationService } from "./PublicationService.js";



export class PublicationFactory {



    public static create(){


        return new PublicationService();



    }


}
