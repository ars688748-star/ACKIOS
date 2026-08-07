import { bootstrap } from "../runtime/bootstrap.js";
import { StartupReport } from "./StartupReport.js";


async function main() {

    const app = await bootstrap();

    StartupReport.print(app);

    console.log(
        "ACKIOS Application started"
    );

}


main().catch(

    error => {

        console.error(
            error
        );

        process.exit(1);

    }

);

