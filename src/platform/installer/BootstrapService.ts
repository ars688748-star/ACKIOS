import { InstallationContext } from "./InstallationContext.js";


export class BootstrapService {


    public async bootstrap(
        context: InstallationContext
    ): Promise<boolean> {


        if (
            context.status !== "completed"
        ) {

            return false;

        }


        return true;

    }

}
