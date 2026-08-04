import { describe, expect, it } from "vitest";
import { RuntimeEnvironmentDetector } from "../RuntimeEnvironmentDetector.js";
import { OperatingSystemDetector } from "../OperatingSystemDetector.js";
import { HardwareDetector } from "../HardwareDetector.js";


describe(
    "RuntimeEnvironmentDetector",
    () => {


        it(
            "creates runtime environment profile",
            () => {


                const detector =
                    new RuntimeEnvironmentDetector(
                        new OperatingSystemDetector(),
                        new HardwareDetector()
                    );


                const result =
                    detector.detect();


                expect(result.os)
                    .toBeDefined();


                expect(result.hardware)
                    .toBeDefined();


                expect(result.runtime.nodeVersion)
                    .toBeDefined();


            }
        );


    }
);
