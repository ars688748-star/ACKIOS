export interface PredictionState {

    nextStep: string;

    confidence: number;

    createdAt: number;

}

export interface CauseEffectState {

    cause: string;

    effect: string;

    confidence: number;

}

export interface DecisionState {

    approved: boolean;

    confidence: number;

    timestamp: number;

}

export interface ExecutionState {

    executed: boolean;

    finishedAt: number;

}

export interface ReflectionState {

    success: boolean;

    reflectedAt: number;

}

export interface SelfEvaluationState {

    score: number;

    confidence: number;

    learningSignal: boolean;

}

export interface CognitiveState {

    workingMemory?: unknown;

    perception?: unknown;

    prediction?: PredictionState;

    causeEffect?: CauseEffectState;

    plan?: string[];

    decision?: DecisionState;

    execution?: ExecutionState;

    reflection?: ReflectionState;

    selfEvaluation?: SelfEvaluationState;

    goals?: unknown;

}
