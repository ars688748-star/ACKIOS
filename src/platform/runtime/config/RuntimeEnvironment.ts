export type RuntimeEnvironment =


    | "development"

    | "production"

    | "testing";



export class RuntimeEnvironmentResolver {



    public resolve():

        RuntimeEnvironment {


        return "development";


    }


}
