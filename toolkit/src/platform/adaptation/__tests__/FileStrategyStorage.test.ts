import { describe, expect, test } from "vitest";

import { FileStrategyStorage } from "../storage/FileStrategyStorage.js";
import { StrategyProfile } from "../models/StrategyProfile.js";


describe(
    "FileStrategyStorage",
    () => {


        test(
            "saves and loads strategy",
            async () => {


                const storage =
                    new FileStrategyStorage(
                        ".work/strategy/test-strategy.json"
                    );


                const strategy: StrategyProfile =
                {

                    mode: "performance",

                    executionLevel: "high",

                    enabledFeatures: [
                        "brain",
                        "analysis"
                    ],

                    restrictions: [],

                    confidence: 0.95

                };


                await storage.save(
                    strategy
                );


                const result =
                    await storage.load();


                expect(result)
                    .not
                    .toBeNull();


                expect(result?.mode)
                    .toBe("performance");


                expect(result?.confidence)
                    .toBe(0.95);


                await storage.clear();


            }
        );


    }
);
