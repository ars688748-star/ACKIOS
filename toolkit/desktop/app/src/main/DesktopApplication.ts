import { ApplicationHost } from "./application/ApplicationHost.js";

export class DesktopApplication {

    private readonly application =
        new ApplicationHost();

    public async initialize(): Promise<void> {

        await this.application.initialize();

    }

    public async start(): Promise<void> {

        await this.application.start();

    }

    public async stop(): Promise<void> {

        await this.application.stop();

    }

    public getApplicationHost(): ApplicationHost {

        return this.application;

    }

    public getStatus() {

        return this.application.getState();

    }

}

