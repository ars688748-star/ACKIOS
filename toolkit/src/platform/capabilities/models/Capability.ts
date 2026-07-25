import { CapabilityKind } from "../enums/CapabilityKind.js";

export interface Capability {

    name: string;

    kind: CapabilityKind;

    available: boolean;

    version?: string;

}
