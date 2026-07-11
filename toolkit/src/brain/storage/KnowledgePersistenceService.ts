import { BrainService } from "../services/BrainService.js";

import { KnowledgeManager } from "../knowledge/KnowledgeManager.js";

import { BrainKnowledgeExporter } from "./BrainKnowledgeExporter.js";
import { BrainKnowledgeImporter } from "./BrainKnowledgeImporter.js";

import { BrainStorage } from "./BrainStorage.js";

export class KnowledgePersistenceService extends BrainService {

    public readonly name = "KnowledgePersistenceService";

    public constructor(

        private readonly knowledge: KnowledgeManager,

        private readonly exporter: BrainKnowledgeExporter,

        private readonly importer: BrainKnowledgeImporter,

        private readonly storage: BrainStorage

    ){

        super();

    }

    public override async initialize(): Promise<void>{

        this.restore();

    }

    public restore(): void{

        const project = this.storage.load();

        if(project === null){

            return;

        }

        this.importer.import(

            this.knowledge,

            project

        );

    }

    public save(): void{

        const project = this.exporter.export(

            this.knowledge

        );

        this.storage.save(

            project

        );

    }


    public clear(): void{

        this.storage.clear();

        this.knowledge.clear();

    }

    public override async dispose(): Promise<void>{

        this.save();

    }

}
