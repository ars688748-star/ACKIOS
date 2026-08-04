import type { CameraFocusDecision } from "../intelligence/CameraFocusDecision.js";

import type { UniverseCameraController } from "../UniverseCameraController.js";

import { CameraFocusPolicy } from "./CameraFocusPolicy.js";



export class CameraFocusExecutor {



    private readonly policy =

        new CameraFocusPolicy();





    public constructor(

        private readonly camera:

            UniverseCameraController


    ) {}





    public execute(

        decision: CameraFocusDecision

    ): void {



        if (

            !this.policy.shouldFocus(

                decision

            )

        ) {


            return;


        }



        this.camera.focus({


            targetId:

                decision.targetId!,


            priority:

                "critical",


            reason:

                decision.reason,


            createdAt:

                new Date()


        });


    }


}
