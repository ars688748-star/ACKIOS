export class CoreBoundaryPolicy {

    public static readonly allowed = [
        "brain/api",
        "brain/contracts",
        "brain/interfaces"
    ];

    public static readonly forbidden = [
        "brain/runtime",
        "brain/kernel",
        "brain/memory",
        "brain/knowledge",
        "brain/reasoning",
        "brain/planning",
        "brain/decision",
        "brain/execution",
        "brain/learning",
        "brain/reflection",
        "brain/prediction",
        "brain/attention",
        "brain/perception",
        "brain/goal-system",
        "brain/working-memory",
        "brain/world-model",
        "brain/blackboard",
        "brain/scheduler"
    ];

}
