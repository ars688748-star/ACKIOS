import { ProjectBrain } from "../ProjectBrain.js";
import { Inference } from "./Inference.js";

export interface Rule{

    evaluate(
        brain:ProjectBrain
    ):Inference[];

}
