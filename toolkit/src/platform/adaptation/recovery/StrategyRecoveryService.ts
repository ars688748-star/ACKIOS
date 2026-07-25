import { IStrategyStorage } from "../storage/IStrategyStorage.js";
import { StrategyProfile } from "../models/StrategyProfile.js";


export class StrategyRecoveryService {


    public constructor(
        private readonly storage: IStrategyStorage
    ) {}


    public async restore():
        Promise<StrategyProfile | null> {


        return await this.storage.load();


    }


    public async recoverOrCreate(
        fallback: StrategyProfile
    ): Promise<StrategyProfile> {


        const existing =
            await this.restore();


        if (existing) {

            return existing;

        }


        await this.storage.save(
            fallback
        );


        return fallback;


    }


}
