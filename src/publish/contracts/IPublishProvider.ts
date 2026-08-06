import { GuardianResult } from "../../guardian/models/GuardianResult.js";

export interface IPublishProvider {

    readonly name:string;

    validate():Promise<boolean>;

    publish(
        snapshot:GuardianResult
    ):Promise<void>;

}
