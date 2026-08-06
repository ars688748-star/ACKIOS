import { describe, expect, test } from "vitest";

import { PackagingEngine } from "../PackagingEngine.js";

import { WindowsPackager } from "../WindowsPackager.js";
import { LinuxPackager } from "../LinuxPackager.js";
import { MacOSPackager } from "../MacOSPackager.js";


describe(

    "PackagingEngine",

    () => {


        test(

            "creates windows package",

            () => {


                const engine =

                    new PackagingEngine([

                        new WindowsPackager(),

                        new LinuxPackager(),

                        new MacOSPackager()

                    ]);



                const artifact =

                    engine.build(

                        "windows"

                    );



                expect(

                    artifact.name

                ).toBe(

                    "ACKIOS-Windows"

                );


            }

        );


    }

);
