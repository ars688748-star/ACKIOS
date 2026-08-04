import type { ReleaseGateCheck } from "./ReleaseGateCheck.js";



export interface ReleaseGateReport {



    readonly ready:

        boolean;



    readonly checks:

        ReleaseGateCheck[];



    readonly createdAt:

        Date;



}
