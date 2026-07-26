import { describe, expect, it } from "vitest";
import { OperatingSystemDetector } from "../OperatingSystemDetector.js";


describe(
    "OperatingSystemDetector",
    () => {


        it(
            "detects operating system",
            () => {

                const detector =
                    new OperatingSystemDetector();


                const result =
                    detector.detect();


                expect(result.platform)
                    .toBeDefined();


                expect(result.version)
                    .toBeDefined();


                expect(result.architecture)
                    .toBeDefined();


            }
        );


    }
);
