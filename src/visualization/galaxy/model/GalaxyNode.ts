export interface GalaxyNode {

    readonly id: string;

    readonly name: string;

    readonly type: 
        "directory" |
        "file";

    readonly path: string;

    readonly position: {

        x: number;

        y: number;

        z?: number;

    };

}
