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


    public registerFactory<T>(
        name:string,
        factory:(container:ServiceContainer)=>T
    ):void{

        if(this.services.has(name)){
            throw new Error(`Service '${name}' is already registered.`);
        }

        this.services.set(name,{
            name,
            lifetime:ServiceLifetime.Singleton,
            factory:()=>factory(this)
        });

    }

    public resolve<T>(name: string): T {

        const descriptor = this.services.get(name);

        if (!descriptor) {
            throw new Error(`Service '${name}' not found.`);
        }

        if(descriptor.instance){
            return descriptor.instance as T;
        }

        if(descriptor.factory){

            const instance =
                descriptor.factory();

            descriptor.instance =
                instance;

            return instance as T;

        }

        throw new Error(
            `Service '${name}' cannot be resolved.`
        );

    }

    public has(name: string): boolean {

        return this.services.has(name);

    }

    public clear(): void {

        this.services.clear();

    }

}


