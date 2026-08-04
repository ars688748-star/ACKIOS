import { describe, expect, test } from "vitest";

import { ReleasePackageFactory } from "../ReleasePackageFactory.js";



describe(

    "ReleasePackageService",

    () => {


        test(

            "creates release package",

            () => {


                const service =

                    ReleasePackageFactory.create();



                const result =

                    service.prepare();



                expect(

                    result.package.manifest.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.package.manifest.assets.length

                ).toBeGreaterThan(0);



                expect(

                    result.checksums.length

                ).toBeGreaterThan(0);


            }

        );


    }

);
