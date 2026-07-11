import { BrainService } from "../services/BrainService.js";
import { BrainKnowledgeExporter } from "./BrainKnowledgeExporter.js";
import { BrainStorage } from "./BrainStorage.js";
import { ProjectBrain } from "../ProjectBrain.js";

export class KnowledgePersistenceService extends BrainService {

    public readonly name = "KnowledgePersistenceService";

    constructor(
        private readonly brain: ProjectBrain,
        private readonly exporter: BrainKnowledgeExporter,
        private readonly storage: BrainStorage
    ){
        super();
    }


    public save(): void {

        const knowledge = this.exporter.export(this.brain);

        this.storage.save(knowledge);

    }


    public load(): void {

        this.storage.load();

    }


    public clear(): void {

        this.storage.clear();

    }

}
