export class ObjectRegistry {


    private readonly objects =

        new Map<string, unknown>();



    public add(

        id:string,

        object:unknown

    ):void {


        this.objects.set(

            id,

            object

        );


    }



    public get(

        id:string

    ) {


        return this.objects.get(

            id

        );


    }


}
