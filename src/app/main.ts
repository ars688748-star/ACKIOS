import { bootstrap } from "../runtime/bootstrap.js";


async function main() {

    await bootstrap();

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
