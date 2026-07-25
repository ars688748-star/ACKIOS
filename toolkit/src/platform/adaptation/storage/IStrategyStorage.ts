import { StrategyProfile } from "../models/StrategyProfile.js";


export interface IStrategyStorage {


    save(
        strategy: StrategyProfile
    ): Promise<void>;


    load():
        Promise<StrategyProfile | null>;


    clear():
        Promise<void>;


}
