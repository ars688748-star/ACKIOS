export class PluginValidator {


    validate(
        manifest: Record<string, unknown>
    ): boolean {


        if (!manifest) {
            return false;
        }


        if (!manifest.id) {
            return false;
        }


        if (!manifest.name) {
            return false;
        }


        if (!manifest.version) {
            return false;
        }


        if (!manifest.main) {
            return false;
        }


        return true;

    }


}

