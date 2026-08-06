import { IPublishProvider } from "../contracts/IPublishProvider.js";
import { GuardianResult } from "../../guardian/models/GuardianResult.js";

export class PublishManager {

    private readonly providers =
        new Map<string, IPublishProvider>();

    public register(
        provider: IPublishProvider
    ): void {

        this.providers.set(
            provider.name,
            provider
        );

    }

    public async publish(
        provider: string,
        result: GuardianResult
    ): Promise<void> {

        const target =
            this.providers.get(provider);

        if (!target) {

            throw new Error(
                `Publish provider '${provider}' not found.`
            );

        }

        const valid =
            await target.validate();

        if (!valid) {

            throw new Error(
                `Publish provider '${provider}' validation failed.`
            );

        }

        await target.publish(result);

    }

}
