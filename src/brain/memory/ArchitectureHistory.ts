import { ArchitectureMemoryRecord } from "../models/ArchitectureMemoryRecord.js";

export class ArchitectureHistory {

    private readonly records: ArchitectureMemoryRecord[] = [];

    public append(record: ArchitectureMemoryRecord): void {

        this.records.push(record);

    }

    public getTimeline(): readonly ArchitectureMemoryRecord[] {

        return [...this.records]
            .sort((a,b) => a.timestamp.getTime() - b.timestamp.getTime());

    }

    public getComponentHistory(
        componentId: string
    ): readonly ArchitectureMemoryRecord[] {

        return this.records.filter(x => x.componentId === componentId);

    }

}
