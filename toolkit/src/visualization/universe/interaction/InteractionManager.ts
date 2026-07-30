import { ObjectSelector } from "./ObjectSelector.js";


export class InteractionManager {


    public constructor(

        private readonly selector:

            ObjectSelector


    ) {}



    public select(

        id:string

    ){


        this.selector.select(

            id

        );


    }


}
