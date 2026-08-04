export interface GalaxyInteractionState {


    selectedNodeId?: string;


    focusedNodeId?: string;


    zoom: number;


    mode:

        | "IDLE"

        | "SELECTING"

        | "FOCUSING";



}
