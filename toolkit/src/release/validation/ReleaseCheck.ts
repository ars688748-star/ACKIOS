export type ReleaseCheckStatus =

    | "pass"

    | "fail";



export interface ReleaseCheck {



    readonly name:

        string;



    readonly status:

        ReleaseCheckStatus;



    readonly message:

        string;


}
