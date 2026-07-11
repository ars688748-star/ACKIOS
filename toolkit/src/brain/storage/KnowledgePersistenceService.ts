import { BrainService } from "../services/BrainService.js";
import { KnowledgeManager } from "../knowledge/KnowledgeManager.js";
import { BrainKnowledgeExporter } from "./BrainKnowledgeExporter.js";
import { BrainStorage } from "./BrainStorage.js";

export class KnowledgePersistenceService extends BrainService {

    public readonly name = "KnowledgePersistenceService";

    constructor(
        private readonly knowledge: KnowledgeManager,
        private readonly exporter: BrainKnowledgeExporter,
        private readonly storage: BrainStorage
    ){
        super();
    }


    public save(): void {

        const projectKnowledge = this.exporter.export(this.knowledge);

        this.storage.save(projectKnowledge);

    }


    public load(): void {

        this.storage.load();

    }


    public clear(): void {

        this.storage.clear();

    }

}
