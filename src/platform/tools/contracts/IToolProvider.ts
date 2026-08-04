import { ToolInfo } from "../models/ToolInfo.js";

export interface IToolProvider {

    detect(): Promise<ToolInfo>;

}
