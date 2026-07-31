export class VersionManager {



    private version =

        "1.0.0-rc.1";





    public current():

        string {


        return this.version;


    }





    public set(

        version:

            string

    ): void {


        this.version = version;


    }


}
