import { ProjectKnowledge } from "../models/index.js";
import { MemoryBrainStorage } from "./MemoryBrainStorage.js";

export class FileBrainStorage extends MemoryBrainStorage {

    override load(): ProjectKnowledge | null {

        return super.load();

    }

    override save(knowledge: ProjectKnowledge): void {

        super.save(knowledge);

    }

    override clear(): void {

        super.clear();

    }

}
