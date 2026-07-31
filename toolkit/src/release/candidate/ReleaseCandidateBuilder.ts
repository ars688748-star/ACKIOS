import type { ReleaseMetadata } from "./ReleaseMetadata.js";



export class ReleaseCandidateBuilder {



    public build(

        metadata:

            ReleaseMetadata

    ){


        return {


            artifact:

                `${metadata.name}-${metadata.version}`,


            createdAt:

                new Date()


        };


    }


}
