import { RuntimeRecoveryService } from "./RuntimeRecoveryService.js";


export class RuntimeRecoveryCoordinator {


    public constructor(
        private readonly recoveryService:
            RuntimeRecoveryService
    ) {}



    public async recover():
        Promise<string> {


        return await this.recoveryService.recover();

    }


}
