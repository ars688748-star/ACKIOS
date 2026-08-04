import { ProjectKnowledge } from "../models/index.js";

export interface BrainStorage {

    load(): ProjectKnowledge | null;

    save(knowledge: ProjectKnowledge): void;

    clear(): void;

}
