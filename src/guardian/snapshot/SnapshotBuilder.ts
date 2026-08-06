import { PublicationFile } from "../models/PublicationFile.js";
import { SnapshotResult } from "../models/SnapshotResult.js";
import { SnapshotProfileLoader } from "./SnapshotProfileLoader.js";

export class SnapshotBuilder {

    private readonly profile =
        new SnapshotProfileLoader();

    public async execute(
        files:PublicationFile[]
    ):Promise<SnapshotResult>{

        const config =
            await this.profile.load();

        const included:string[]=[];
        const excluded:string[]=[];

        for(const file of files){

            if(config.include.includes(file.kind)){

                included.push(file.path);

            }
            else{

                excluded.push(file.path);

            }

        }

        return {

            included,

            excluded

        };

    }

}
