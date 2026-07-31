import type { DocumentationEntry } from "./DocumentationEntry.js";



export class DocumentationGenerator {



    public generate(

        entries:

            DocumentationEntry[]

    ){


        return entries.map(

            entry =>

                `${entry.title}\n${entry.content}`

        ).join("\n\n");


    }


}
