import { PluginPermission } from "./PluginPermission.js";


export class PluginSecurityManager {


    private allowed: PluginPermission[] = [

        PluginPermission.ANALYSIS,

        PluginPermission.WORKSPACE_READ

    ];



    validate(
        permissions: string[]
    ): boolean {


        return permissions.every(
            permission =>
                this.allowed.includes(
                    permission as PluginPermission
                )
        );

    }



    getAllowedPermissions(): PluginPermission[] {

        return this.allowed;

    }

}
