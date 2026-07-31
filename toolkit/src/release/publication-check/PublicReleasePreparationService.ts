import { RemoteCheck } from "./RemoteCheck.js";

import { VersionCheck } from "./VersionCheck.js";

import { TagCheck } from "./TagCheck.js";

import { ReleaseNotesBuilder } from "./ReleaseNotesBuilder.js";

import { PublicationChecklist } from "./PublicationChecklist.js";



export class PublicReleasePreparationService {



    public prepare(){



        const remote =

            new RemoteCheck()

                .check();



        const version =

            new VersionCheck()

                .check();



        const tag =

            new TagCheck()

                .check();



        const notes =

            new ReleaseNotesBuilder()

                .build();



        const checklist =

            new PublicationChecklist()

                .check();





        return {



            remote,



            version,



            tag,



            notes,



            checklist,



            ready:


                remote.connected &&

                version.valid &&

                tag.ready &&

                checklist.complete



        };


    }


}
