import { IArchitectureRule } from "./IArchitectureRule.js";

export class ArchitectureRuleRegistry {

    private readonly rules:IArchitectureRule[]=[];

    public register(
        rule:IArchitectureRule
    ):void{

        this.rules.push(rule);

    }

    public getRules():readonly IArchitectureRule[]{

        return this.rules;

    }

}
