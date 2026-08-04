import { describe, expect, test } from "vitest";

import { DocumentationFactory } from "../DocumentationFactory.js";



describe(

    "DocumentationService",

    () => {


        test(

            "generates user documentation",

            () => {


                const service =

                    DocumentationFactory.create();



                const guide =

                    service.generateUserGuide();



                expect(

                    guide.title

                ).toBe(

                    "ACKIOS User Guide"

                );



                expect(

                    guide.sections.length

                ).toBeGreaterThan(0);


            }

        );



        test(

            "generates installation documentation",

            () => {


                const service =

                    DocumentationFactory.create();



                const install =

                    service.generateInstallation();



                expect(

                    install.platforms

                ).toContain(

                    "Windows"

                );


            }

        );


    }

);
