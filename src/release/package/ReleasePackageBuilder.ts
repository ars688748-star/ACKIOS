import type { AssetManifest } from "./AssetManifest.js";

import type { ReleaseNotes } from "./ReleaseNotes.js";



export class ReleasePackageBuilder {



    public build(){


        const manifest:

            AssetManifest = {



                version:

                    "1.0.0",



                assets:


                    [


                        {


                            name:

                                "ACKIOS-source.zip",


                            type:

                                "source",


                            platform:

                                "all"


                        },


                        {


                            name:

                                "ACKIOS-windows-installer.exe",


                            type:

                                "installer",


                            platform:

                                "windows"


                        },


                        {


                            name:

                                "ACKIOS-linux-installer.sh",


                            type:

                                "installer",


                            platform:

                                "linux"


                        },


                        {


                            name:

                                "ACKIOS-macos-installer.pkg",


                            type:

                                "installer",


                            platform:

                                "macos"


                        }


                    ]


            };




        const notes:

            ReleaseNotes = {



                title:

                    "ACKIOS 1.0.0 Release",



                changes:


                    [


                        "First public release",


                        "Cross platform support",


                        "Installer included"


                    ]


            };




        return {


            manifest,


            notes


        };


    }


}
