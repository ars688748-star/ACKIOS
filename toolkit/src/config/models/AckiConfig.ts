import { ReportFormat } from "../../report/ReportFormat.js";

export interface AckiConfig {

    report: {

        format: ReportFormat;

        output: string;

    };

    analysis: {

        ignore: string[];

    };

}

export const DefaultAckiConfig: AckiConfig = {

    report: {

        format: ReportFormat.Console,

        output: ""

    },

    analysis: {

        ignore: [

            "node_modules",
            "dist",
            "coverage"

        ]

    }

};
