import { AdaptationService } from "../AdaptationService.js";
import { StrategyBuilder } from "../StrategyBuilder.js";
import { StrategyProfile } from "../models/StrategyProfile.js";
import { IStrategyStorage } from "../storage/IStrategyStorage.js";
import { StrategyLifecycleService } from "../lifecycle/StrategyLifecycleService.js";


export class AdaptationRuntime {


    public constructor(
        private readonly adaptationService: AdaptationService,
        private readonly strategyBuilder: StrategyBuilder,
        private readonly strategyStorage: IStrategyStorage,
        private readonly lifecycle: StrategyLifecycleService
    ) {}


    public async getStrategy(): Promise<StrategyProfile | null> {


        const decision =
            await this.adaptationService.analyze();


        if (!decision) {

            return null;

        }


        const strategy =
            this.strategyBuilder.build(
                decision
            );


        await this.strategyStorage.save(
            strategy
        );


        this.lifecycle.activate(
            strategy
        );


        return strategy;


    }


    public async getStoredStrategy():
        Promise<StrategyProfile | null> {


        return await this.strategyStorage.load();


    }


}
