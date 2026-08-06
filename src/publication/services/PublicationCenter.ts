import { Guardian } from "../../guardian/Guardian.js";
import { PublishManager } from "../../publish/manager/PublishManager.js";

import { PublicationSession } from "../models/PublicationSession.js";

export class PublicationCenter {

    public constructor(

        private readonly guardian: Guardian,

        private readonly publishManager: PublishManager

    ){}

    public async createSession():Promise<PublicationSession>{

        const guardian =
            await this.guardian.execute();

        return{

            guardian,

            provider:"folder",

            createdAt:new Date()

        };

    }

    public async publish(
        session:PublicationSession
    ):Promise<void>{

        await this.publishManager.publish(

            session.provider,

            session.guardian

        );

    }

}
