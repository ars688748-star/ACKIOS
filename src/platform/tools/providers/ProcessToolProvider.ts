import { ProcessCapture } from "../../../infrastructure/ProcessCapture.js";
import { IToolProvider } from "../contracts/IToolProvider.js";
import { ToolInfo } from "../models/ToolInfo.js";

export abstract class ProcessToolProvider implements IToolProvider {

    protected readonly processCapture = new ProcessCapture();

    protected async execute(
        command: string,
        args: string[]
    ): Promise<string> {

        return await this.processCapture.run(command, args);

    }

    public abstract detect(): Promise<ToolInfo>;

}
