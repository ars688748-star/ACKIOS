import { promises as fs } from "fs";
import path from "path";
import { IStrategyStorage } from "./IStrategyStorage.js";
import { StrategyProfile } from "../models/StrategyProfile.js";


export class FileStrategyStorage implements IStrategyStorage {


    public constructor(
        private readonly filePath: string
    ) {}


    public async save(
        strategy: StrategyProfile
    ): Promise<void> {


        await fs.mkdir(
        path.dirname(this.filePath),
        {
            recursive: true
        }
    );

    await fs.writeFile(
            this.filePath,
            JSON.stringify(
                strategy,
                null,
                2
            ),
            "utf-8"
        );


    }


    public async load():
        Promise<StrategyProfile | null> {


        try {


            const content =
                await fs.readFile(
                    this.filePath,
                    "utf-8"
                );


            return JSON.parse(
                content
            ) as StrategyProfile;


        } catch (_error) {


            return null;


        }


    }


    public async clear():
        Promise<void> {


        try {


            await fs.unlink(
                this.filePath
            );        } catch (_error) {

            void _error;

        }


    }


}


