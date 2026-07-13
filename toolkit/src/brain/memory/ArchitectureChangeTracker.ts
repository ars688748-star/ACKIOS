import { ArchitectureMemoryRecord } from "../models/ArchitectureMemoryRecord.js";

export class ArchitectureChangeTracker {

    private readonly changes: ArchitectureMemoryRecord[] = [];

    public track(change: ArchitectureMemoryRecord): void {

        this.changes.push(change);

    }

    public getChanges(
        componentId: string
    ): readonly ArchitectureMemoryRecord[] {

        return this.changes.filter(x => x.componentId === componentId);

    }

    public getLatest(): ArchitectureMemoryRecord | undefined {

        return this.changes.at(-1);

    }

}
