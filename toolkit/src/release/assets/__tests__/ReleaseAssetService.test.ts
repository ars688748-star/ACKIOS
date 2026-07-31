import { describe, expect, test } from "vitest";

import { ReleaseAssetFactory } from "../ReleaseAssetFactory.js";



describe(

    "ReleaseAssetService",

    () => {


        test(

            "builds release assets",

            () => {


                const service =

                    ReleaseAssetFactory.create();



                const result =

                    service.build();



                expect(

                    result.source.name

                ).toBe(

                    "ACKIOS-source.zip"

                );



                expect(

                    result.installer.type

                ).toBe(

                    "installer"

                );



                expect(

                    result.checksum.algorithm

                ).toBe(

                    "SHA256"

                );



                expect(

                    result.ready

                ).toBe(true);


            }

        );


    }

);
