import { describe, expect, it } from "vitest";
import { HardwareDetector } from "../HardwareDetector.js";


describe(
    "HardwareDetector",
    () => {


        it(
            "detects hardware information",
            () => {

                const detector =
                    new HardwareDetector();


                const result =
                    detector.detect();


                expect(result.cpuCores)
                    .toBeGreaterThan(0);


                expect(result.memoryGB)
                    .toBeGreaterThan(0);


                expect(result.architecture)
                    .toBeDefined();


            }
        );


    }
);
