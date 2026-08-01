import { IBrainService } from "./IBrainService.js";

export abstract class BrainService implements IBrainService {

    public abstract readonly name: string;

    public async initialize(): Promise<void> {

    }

    public async dispose(): Promise<void> {

    }

}
