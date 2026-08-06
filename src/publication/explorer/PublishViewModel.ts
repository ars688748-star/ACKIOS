export interface PublishFieldViewModel {


    id:

        string;



    label:

        string;



    type:

        string;



    required:

        boolean;



}




export interface PublishPlatformViewModel {


    id:

        string;



    name:

        string;



    fields:

        PublishFieldViewModel[];



}




export interface PublishViewModel {


    platforms:

        PublishPlatformViewModel[];



}
