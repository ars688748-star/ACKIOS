import type { CameraFocusDecision } from "../intelligence/CameraFocusDecision.js";


export class CameraFocusPolicy {



    public shouldFocus(

        decision: CameraFocusDecision

    ): boolean {



        return (

            decision.level === "critical" &&

            decision.targetId !== undefined

        );


    }


}
