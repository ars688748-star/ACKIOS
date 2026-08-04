import type { PersistenceProvider } from "./PersistenceProvider.js";

export interface PersistenceContext {

    readonly provider: PersistenceProvider;

}
