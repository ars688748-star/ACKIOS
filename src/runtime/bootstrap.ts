import { ACKIOSApplication } from "./ACKIOSApplication.js";

export async function bootstrap(): Promise<ACKIOSApplication> {

    const app = new ACKIOSApplication();

    await app.initialize();
    await app.start();

    return app;

}
