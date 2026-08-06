import { mkdir, copyFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";

export class SnapshotCopier {

    public async copy(

        files:string[],

        root:string=".work/guardian/snapshot/project"

    ):Promise<void>{

        const projectRoot =
            process.cwd();

        for(const file of files){

            const relativePath =
                relative(
                    projectRoot,
                    file
                );

            const target =
                join(
                    root,
                    relativePath
                );

            await mkdir(

                dirname(target),

                {

                    recursive:true

                }

            );

            await copyFile(

                file,

                target

            );

        }

    }

}
