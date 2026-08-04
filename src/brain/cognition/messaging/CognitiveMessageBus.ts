import { CognitiveMessage } from "./CognitiveMessage.js";

export class CognitiveMessageBus {

    private readonly queue: CognitiveMessage[] = [];

    publish(message: CognitiveMessage): void {

        this.queue.push(message);

    }

    drain(): readonly CognitiveMessage[] {

        const messages = [...this.queue];

        this.queue.length = 0;

        return messages;

    }

    size(): number {

        return this.queue.length;

    }

}
