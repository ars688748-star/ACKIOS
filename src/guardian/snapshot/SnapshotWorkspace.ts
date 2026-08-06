import { rm, mkdir } from "node:fs/promises";

export class SnapshotWorkspace {

    public async prepare():Promise<void>{

        await rm(

            ".work/guardian/snapshot/project",

            {

                recursive:true,

                force:true

            }

        );

        await mkdir(

            ".work/guardian/snapshot/project",

            {

                recursive:true

            }

        );

    }

}
