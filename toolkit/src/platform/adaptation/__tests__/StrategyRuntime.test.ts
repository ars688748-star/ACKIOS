import { describe, expect, test } from "vitest";

import { StrategyBuilder } from "../StrategyBuilder.js";
import { AdaptationDecision } from "../models/AdaptationDecision.js";


describe(
    "StrategyBuilder",
    () => {


        test(
            "creates strategy profile",
            () => {


                const builder =
                    new StrategyBuilder();


                const decision: AdaptationDecision =
                {
                    mode: "performance",

                    reasons: [
                        "High confidence decision"
                    ],

                    confidence: 0.95

                };


                const profile =
                    builder.build(
                        decision
                    );


                expect(profile.mode)
                    .toBe("performance");


                expect(profile.executionLevel)
                    .toBe("high");


                expect(profile.enabledFeatures.length)
                    .toBeGreaterThan(0);


                expect(profile.confidence)
                    .toBe(0.95);


            }
        );


    }
);
