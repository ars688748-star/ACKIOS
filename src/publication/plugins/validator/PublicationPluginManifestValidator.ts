import type { PublicationPluginManifest } from "../manifest/PublicationPluginManifest.js";


export class PublicationPluginManifestValidator {



    public validate(

        manifest:

            Partial<PublicationPluginManifest>

    ):

        boolean {



        return Boolean(

            manifest.id &&

            manifest.name &&

            manifest.version &&

            manifest.type &&

            manifest.entry

        );


    }



}
