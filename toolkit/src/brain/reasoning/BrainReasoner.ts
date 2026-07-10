import { ProjectBrain } from "../ProjectBrain.js";
import { Rule } from "./Rule.js";
import { Inference } from "./Inference.js";

export class BrainReasoner{

    private readonly rules:Rule[]=[];

    register(rule:Rule):void{

        this.rules.push(rule);

    }

    run(
        brain:ProjectBrain
    ):Inference[]{

        return this.rules.flatMap(
            rule=>rule.evaluate(brain)
        );

    }

}
