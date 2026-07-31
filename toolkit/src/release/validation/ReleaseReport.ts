import type { ReleaseCheck } from "./ReleaseCheck.js";



export interface ReleaseReport {



    readonly ready:

        boolean;



    readonly checks:

        ReleaseCheck[];



    readonly createdAt:

        Date;


}
