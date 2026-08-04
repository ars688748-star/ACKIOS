import { ServiceLifetime } from "./services/enums/ServiceLifetime.js";
import { ServiceDescriptor } from "./services/models/ServiceDescriptor.js";

export class ServiceContainer {

    private readonly services =
        new Map<string, ServiceDescriptor>();

    public register<T>(name: string, instance: T): void {

        if (this.services.has(name)) {
            throw new Error(`Service '${name}' is already registered.`);
        }

        this.services.set(name, {
            name,
            lifetime: ServiceLifetime.Instance,
            instance
        });

    }

    public resolve<T>(name: string): T {

        const descriptor = this.services.get(name);

        if (!descriptor) {
            throw new Error(`Service '${name}' not found.`);
        }

        return descriptor.instance as T;

    }

    public has(name: string): boolean {

        return this.services.has(name);

    }

    public clear(): void {

        this.services.clear();

    }

}
