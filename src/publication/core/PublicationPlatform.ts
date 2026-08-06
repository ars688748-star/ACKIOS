export interface PublicationPlatform {


    id:

        string;



    name:

        string;



    connect(

        config:

            unknown

    ):

        Promise<boolean>;



    publish(

        request:

            unknown

    ):

        Promise<unknown>;


}
