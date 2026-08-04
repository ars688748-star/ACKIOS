import { ProjectKnowledge } from "../models/index.js";
import { BrainStorage } from "./BrainStorage.js";

export class MemoryBrainStorage implements BrainStorage {

    private knowledge: ProjectKnowledge | null = null;

    load(): ProjectKnowledge | null {

        return this.knowledge;

    }

    save(knowledge: ProjectKnowledge): void {

        this.knowledge = knowledge;

    }

    clear(): void {

        this.knowledge = null;

    }

}
