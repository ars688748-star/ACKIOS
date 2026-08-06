import { PublicationFile } from "../models/PublicationFile.js";

import { RuleLoader } from "../policy/RuleLoader.js";
import { RuleEngine } from "../policy/RuleEngine.js";

export class PublicationClassifier {

    private readonly loader =
        new RuleLoader();

    private readonly engine =
        new RuleEngine();

    public async execute(

        files:string[],

        profile:string="opensource"

    ):Promise<PublicationFile[]>{

        const rules =
            await this.loader.load(profile);

        const result:PublicationFile[]=[];

        for(const file of files){

            const decision =
                this.engine.classify(
                    file,
                    rules
                );

            result.push({

                path:file,

                kind:decision.kind,

                reason:decision.reason

            });

        }

        return result;

    }

}
