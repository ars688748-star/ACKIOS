export interface RuntimeModule {


    readonly name:

        string;



    start():

        void;



    stop():

        void;



    health():

        string;


}
