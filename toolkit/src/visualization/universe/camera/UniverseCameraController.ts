import type { CameraFocusRequest } from "./CameraFocusRequest.js";


export class UniverseCameraController {


    private currentRequest?:

        CameraFocusRequest;



    public focus(

        request: CameraFocusRequest

    ): void {


        this.currentRequest =
            request;


    }



    public getCurrentFocus():

        CameraFocusRequest | undefined {


        return this.currentRequest;


    }



    public clear():

        void {


        this.currentRequest =
            undefined;


    }


}
