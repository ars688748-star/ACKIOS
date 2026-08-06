import { ClassificationRule } from "../models/ClassificationRule.js";
import { PublicationKind } from "../models/PublicationKind.js";

export class RuleEngine {

    public classify(
        path: string,
        rules: ClassificationRule[]
    ): {
        kind: PublicationKind;
        reason: string;
    } {

        const normalized =
            path.replace(/\\/g, "/").toLowerCase();

        for (const rule of rules) {

            if (normalized.includes(rule.match.toLowerCase())) {

                return {

                    kind: rule.kind as PublicationKind,

                    reason: rule.name

                };

            }

        }

        return {

            kind: "PUBLIC" as PublicationKind,

            reason: "Default"

        };

    }

}
