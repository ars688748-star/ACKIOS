import { Guardian } from "../Guardian.js";
import { IGuardianService } from "../contracts/IGuardianService.js";
import { GuardianReport } from "../models/GuardianReport.js";

export class GuardianService implements IGuardianService {

    public constructor(
        private readonly guardian: Guardian
    ) {}

    async scan(): Promise<void> {}

    async classify(): Promise<void> {

        const result = await this.guardian.execute();

        const report: GuardianReport = {

            scanned: result.classified.length,

            public: result.classified.filter(x=>x.kind==="PUBLIC").length,

            internal: result.classified.filter(x=>x.kind==="INTERNAL").length,

            private: result.classified.filter(x=>x.kind==="PRIVATE").length,

            commercial: result.classified.filter(x=>x.kind==="COMMERCIAL").length,

            research: result.classified.filter(x=>x.kind==="RESEARCH").length,

            profile:"OpenSource",

            risk:"LOW"

        };

        console.log("");
        console.log("Guardian Report");
        console.log("========================");
        console.table(report);

    }

    async analyze(): Promise<void> {}

    async buildSnapshot(): Promise<void> {}

    async validate(): Promise<void> {}

    async publish(): Promise<void> {}

}

