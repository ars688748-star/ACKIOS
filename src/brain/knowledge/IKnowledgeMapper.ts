import { KnowledgeNode } from "./KnowledgeNode.js";

export interface IKnowledgeMapper<T> {

    map(source: T): KnowledgeNode;

}
