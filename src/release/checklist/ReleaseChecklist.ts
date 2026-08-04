import type { ReleaseCheckItem } from "./ReleaseCheckItem.js";



export interface ReleaseChecklist {



    readonly version:

        string;



    readonly items:

        ReleaseCheckItem[];



    readonly ready:

        boolean;



}
