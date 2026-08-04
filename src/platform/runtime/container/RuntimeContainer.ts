import { RuntimeServices } from "./RuntimeServices.js";


export class RuntimeContainer {


    public constructor(
        public readonly services: RuntimeServices
    ) {}



    public getServices(): RuntimeServices {

        return this.services;

    }


    public getPlatformRuntime() {

        return this.services.platformRuntime;

    }


    public getStateManager() {

        return this.services.stateManager;

    }


    public getEventBus() {

        return this.services.eventBus;

    }


}
