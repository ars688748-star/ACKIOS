import type { ACKIOSApplication } from "../runtime/ACKIOSApplication.js";


export class StartupReport {


    public static print(

        app: ACKIOSApplication

    ): void {


        const runtime = app.runtime;


        console.log("");

        console.log("==============================");

        console.log(" ACKIOS STARTUP REPORT");

        console.log("==============================");


        console.log("");

        console.log(

            "Runtime:",
            runtime.getStatus().state

        );


        console.log("");

        console.log("Services:");

        console.log(

            " Brain:",
            runtime.hasService("brainSystem")
                ? "ONLINE"
                : "OFFLINE"

        );


        console.log(

            " Dashboard:",
            runtime.hasService("dashboard")
                ? "ONLINE"
                : "OFFLINE"

        );


        console.log(

            " Plugins:",
            runtime.hasService("pluginExplorerProvider")
                ? "ONLINE"
                : "OFFLINE"

        );


        console.log(

            " Health:",
            runtime.hasService("healthEngine")
                ? "ONLINE"
                : "OFFLINE"

        );


        console.log("");

        console.log(

            "System:",

            runtime.getStatus().state === "Running"
                ? "READY"
                : "CHECK"

        );


        console.log("==============================");

        console.log("");

    }


}
