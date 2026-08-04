import { BrainServiceRegistry } from "../../services/BrainServiceRegistry.js";

export interface RuntimeContext {

    readonly input: unknown;

    readonly memory: unknown;

    readonly knowledge: unknown;

    readonly reasoning: unknown;

    readonly plan: unknown;

    readonly decision: unknown;

    readonly workflow: unknown;

    readonly output: unknown;

    readonly services: BrainServiceRegistry | undefined;

}
