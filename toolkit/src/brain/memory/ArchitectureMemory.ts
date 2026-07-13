import { ArchitectureMemoryRecord } from "../models/ArchitectureMemoryRecord.js";

export class ArchitectureMemory {

    private readonly history: ArchitectureMemoryRecord[] = [];

    public add(record: ArchitectureMemoryRecord): void {

        this.history.push(record);

    }

    public get(componentId: string): readonly ArchitectureMemoryRecord[] {

        return this.history.filter(x => x.componentId === componentId);

    }

    public getAll(): readonly ArchitectureMemoryRecord[] {

        return this.history;

    }

}
