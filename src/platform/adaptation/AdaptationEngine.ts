import { EnvironmentProfile } from "../models/EnvironmentProfile.js";
import { IAdaptationRule } from "./contracts/IAdaptationRule.js";
import { AdaptationDecision } from "./models/AdaptationDecision.js";


export class AdaptationEngine {


    private readonly rules: IAdaptationRule[] = [];


    public register(
        rule: IAdaptationRule
    ): void {

        this.rules.push(rule);

    }


    public async evaluate(
        environment: EnvironmentProfile
    ): Promise<AdaptationDecision[]> {


        const decisions: AdaptationDecision[] = [];


        for (const rule of this.rules) {


            const decision =
                await rule.evaluate(environment);


            if (decision) {

                decisions.push(decision);

            }

        }


        return decisions;

    }

}
