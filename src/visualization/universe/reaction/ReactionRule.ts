export type UniverseReactionType =

    | "pulse"
    | "focus"
    | "warning"
    | "critical";




export interface ReactionRule {


    readonly eventType:

        string;



    readonly reaction:

        UniverseReactionType;


}
