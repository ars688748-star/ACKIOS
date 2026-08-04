import type { GalaxyNode } from "../model/GalaxyNode.js";
import type { GalaxyCameraState } from "./GalaxyCameraState.js";


export class GalaxyCameraController {


    private state: GalaxyCameraState = {

        position: {
            x: 0,
            y: 0,
            z: 100
        },

        target: {
            x: 0,
            y: 0,
            z: 0
        },

        zoom: 1,

        rotation: {
            x: 0,
            y: 0,
            z: 0
        }

    };



    public getState(): GalaxyCameraState {

        return this.state;

    }



    public focus(
        node: GalaxyNode
    ): void {


        this.state = {

            ...this.state,

            target: {

                x: node.position.x,

                y: node.position.y,

                z: node.position.z ?? 0

            }

        };

    }



    public setZoom(
        zoom: number
    ): void {


        this.state = {

            ...this.state,

            zoom

        };

    }



    public reset(): void {


        this.state = {

            position: {
                x: 0,
                y: 0,
                z: 100
            },

            target: {
                x: 0,
                y: 0,
                z: 0
            },

            zoom: 1,

            rotation: {
                x: 0,
                y: 0,
                z: 0
            }

        };

    }


    public applyState(
        state: GalaxyCameraState
    ): void {


        this.state = {

            ...state

        };


    }


}
