import { DocumentationService } from "./DocumentationService.js";



export class DocumentationFactory {



    public static create(){


        return new DocumentationService();


    }


}
