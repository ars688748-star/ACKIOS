import { ServiceLifetime } from "../enums/ServiceLifetime.js";

export interface ServiceDescriptor<T = unknown> {

    name: string;

    lifetime: ServiceLifetime;

    instance?: T;

    factory?: () => T;

    implementation?: new (...args: never[]) => T;

}
