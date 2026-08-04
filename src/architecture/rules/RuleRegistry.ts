import type { IArchitectureRule } from "../validator/IArchitectureRule.js";

export class RuleRegistry {

    private readonly rules: IArchitectureRule[] = [];

    public register(
        rule: IArchitectureRule
    ): void {

        this.rules.push(rule);

    }

    public getRules(): readonly IArchitectureRule[] {

        return this.rules;

    }

}
