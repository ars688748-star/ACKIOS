import { EnvironmentService } from "../environment/EnvironmentService.js";
import { AdaptationEngine } from "./AdaptationEngine.js";
import { DecisionAggregator } from "./DecisionAggregator.js";
import { AdaptationDecision } from "./models/AdaptationDecision.js";


export class AdaptationService {


    public constructor(

        private readonly environmentService: EnvironmentService,

        private readonly adaptationEngine: AdaptationEngine,

        private readonly aggregator: DecisionAggregator

    ) {}


    public async analyze(): Promise<AdaptationDecision | null> {


        const environment =
            await this.environmentService.analyze();


        const decisions =
            await this.adaptationEngine.evaluate(
                environment
            );


        return this.aggregator.aggregate(
            decisions
        );


    }

}
