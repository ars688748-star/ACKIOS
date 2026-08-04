import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export interface Goal {

    id: string;

    priority: number;

    description: string;

    completed: boolean;

    createdAt: number;

}

export class GoalEngine implements ICognitiveModule {

    readonly name = "GoalEngine";

    private readonly goals: Goal[] = [];

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        if (this.goals.length === 0) {

            this.goals.push({

                id: crypto.randomUUID(),

                priority: 1,

                description: "Process current cognitive task",

                completed: false,

                createdAt: Date.now()

            });

        }

        context.state.set("goals", [...this.goals]);

        context.state.set("activeGoal", this.goals[0]);

    }

    complete(id: string): void {

        const goal = this.goals.find(x => x.id === id);

        if (goal) {

            goal.completed = true;

        }

    }

    async shutdown(): Promise<void> {

        this.goals.length = 0;

    }

}
