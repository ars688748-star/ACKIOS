export class LongTermMemory {

    private readonly storage = new Map<string, unknown>();

    store(key: string, value: unknown): void {

        this.storage.set(key, value);

    }

    recall<T>(key: string): T | undefined {

        return this.storage.get(key) as T | undefined;

    }

    contains(key: string): boolean {

        return this.storage.has(key);

    }

    remove(key: string): boolean {

        return this.storage.delete(key);

    }

    clear(): void {

        this.storage.clear();

    }

    size(): number {

        return this.storage.size;

    }

}
