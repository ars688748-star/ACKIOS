import { ServiceTypes } from "../../models/ServiceTypes.js";

export class ServiceInstantiationScanner{

    public scan(
        content:string
    ):string[]{

        const found:string[]=[];

        for(const type of ServiceTypes){

            const expression =
                new RegExp("\\bnew\\s+" + type + "\\b");

            if(expression.test(content)){
                found.push(type);
            }

        }

        return found;

    }

}
