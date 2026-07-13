import { ACKIOSRuntime } from "./ACKIOSRuntime.js";
import { ACKIOSRuntimeBuilder } from "./ACKIOSRuntimeBuilder.js";

export class ACKIOSApplication {

    public readonly runtime: ACKIOSRuntime;

    public constructor() {

        this.runtime =
            new ACKIOSRuntimeBuilder()
                .build();

    }

}
