import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";

import { PlatformScanner } from "../../platform/scanner/services/PlatformScanner.js";

export class ScannerModule implements IServiceModule {

    public register(
        container: ServiceContainer
    ): void {

        container.register(

            "platformScanner",

            new PlatformScanner()

        );

    }

}
