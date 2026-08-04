import { IStrategyStorage } from "./IStrategyStorage.js";
import { StrategyProfile } from "../models/StrategyProfile.js";


export class MemoryStrategyStorage implements IStrategyStorage {


    private strategy:
        StrategyProfile | null = null;


    public async save(
        strategy: StrategyProfile
    ): Promise<void> {


        this.strategy = strategy;


    }


    public async load():
        Promise<StrategyProfile | null> {


        return this.strategy;


    }


    public async clear():
        Promise<void> {


        this.strategy = null;


    }


}
