import { CommandContext } from "../models/CommandContext.js";

export interface Command {

    readonly name: string;

    execute(
        context: CommandContext
    ): Promise<number>;

}
