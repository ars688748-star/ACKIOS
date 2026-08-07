import { promises as fs } from "fs";
import path from "path";
import { AdaptationConfiguration } from "./AdaptationConfiguration.js";

export class AdaptationConfigurationStorage {

    public constructor(
        private readonly filePath: string
    ) {}


    public async save(
        configuration: AdaptationConfiguration
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
                configuration,
                null,
                2
            ),
            "utf-8"
        );


    }


    public async load():
        Promise<AdaptationConfiguration | null> {


        try {


            const content =
                await fs.readFile(
                    this.filePath,
                    "utf-8"
                );


            return JSON.parse(
                content
            ) as AdaptationConfiguration;


        } catch (_error) {


            return null;


        }


    }


    public async clear():
        Promise<void> {


        try {


            await fs.unlink(
                this.filePath
            );


        } catch (_error) {


            void _error;


        }


    }

}
