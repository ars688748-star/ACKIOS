export class ObjectSelector {


    private selected?: string;



    public select(

        id:string

    ) {


        this.selected=id;


    }



    public getSelected(){


        return this.selected;


    }


}
