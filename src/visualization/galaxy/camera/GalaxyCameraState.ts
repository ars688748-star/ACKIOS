export interface GalaxyCameraState {

    readonly position: {

        x: number;

        y: number;

        z: number;

    };


    readonly target: {

        x: number;

        y: number;

        z: number;

    };


    readonly zoom: number;


    readonly rotation: {

        x: number;

        y: number;

        z: number;

    };

}
