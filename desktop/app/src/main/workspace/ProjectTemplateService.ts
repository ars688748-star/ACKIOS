import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

export class ProjectTemplateService {


    public async create(path:string): Promise<void> {


        await mkdir(

            join(path,"src"),

            {
                recursive:true
            }

        );


        await writeFile(

            join(path,"README.md"),

            "# ACKIOS Project\n",

            "utf8"

        );


        await writeFile(

            join(path,"package.json"),

            JSON.stringify(

                {

                    name:"ackios-project",

                    version:"1.0.0",

                    private:true

                },

                null,

                4

            ),

            "utf8"

        );


        await writeFile(

            join(path,".gitignore"),

            "node_modules\ndist\nout\n",

            "utf8"

        );


        await writeFile(

            join(path,"src","index.ts"),

            "console.log('ACKIOS Project');\n",

            "utf8"

        );

    }

}
