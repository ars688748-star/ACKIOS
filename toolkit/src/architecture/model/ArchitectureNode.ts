export interface ArchitectureNode {

    readonly name: string;

    readonly path: string;

    readonly type: "directory" | "file";

}