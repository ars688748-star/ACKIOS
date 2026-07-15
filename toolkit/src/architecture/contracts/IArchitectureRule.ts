export interface IArchitectureRule {

    readonly id: string;

    readonly description: string;

    validate(): boolean;

}
