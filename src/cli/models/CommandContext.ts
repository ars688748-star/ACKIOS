import { ACKIOSApplication } from "../../runtime/ACKIOSApplication.js";

export interface CommandContext {

    args: string[];

    workingDirectory: string;

    application: ACKIOSApplication;

}
