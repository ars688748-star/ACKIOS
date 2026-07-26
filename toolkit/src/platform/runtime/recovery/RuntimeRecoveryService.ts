import { RuntimeStateManager } from "../state/RuntimeStateManager.js";
import { RuntimeRecoveryManager } from "./RuntimeRecoveryManager.js";
import { RuntimeRecoveryExecutor } from "./RuntimeRecoveryExecutor.js";


export class RuntimeRecoveryService {


    public constructor(
        private readonly stateManager:
            RuntimeStateManager,

        private readonly recoveryManager:
            RuntimeRecoveryManager,

        private readonly executor:
            RuntimeRecoveryExecutor
    ) {}



    public async recover():
        Promise<string> {


        const state =
            await this.stateManager.load();



        if (!state) {

            return this.executor.execute(
                "restart"
            );

        }



        const decision =
            this.recoveryManager.decide(
                state
            );



        return this.executor.execute(
            decision
        );

    }


}
