import { describe, expect, it } from "vitest";
import { RuntimeRecoveryManager } from "../RuntimeRecoveryManager.js";


describe(
    "RuntimeRecoveryManager",
    () => {


        const manager =
            new RuntimeRecoveryManager();



        it(
            "returns restart for created state",
            () => {

                expect(
                    manager.decide({

                        initialized: false,

                        installed: false,

                        workspaceReady: false,

                        ready: false,

                        stage:
                            "created"

                    })
                )
                .toBe("restart");

            }
        );



        it(
            "returns resume for installed state",
            () => {

                expect(
                    manager.decide({

                        initialized: false,

                        installed: true,

                        workspaceReady: true,

                        ready: false,

                        stage:
                            "installed"

                    })
                )
                .toBe("resume");

            }
        );



        it(
            "returns continue for wizard state",
            () => {

                expect(
                    manager.decide({

                        initialized: true,

                        installed: true,

                        workspaceReady: false,

                        ready: false,

                        stage:
                            "wizard"

                    })
                )
                .toBe("continue");

            }
        );



        it(
            "returns ready for completed runtime",
            () => {

                expect(
                    manager.decide({

                        initialized: true,

                        installed: true,

                        workspaceReady: true,

                        ready: true,

                        stage:
                            "ready"

                    })
                )
                .toBe("ready");

            }
        );


    }
);
