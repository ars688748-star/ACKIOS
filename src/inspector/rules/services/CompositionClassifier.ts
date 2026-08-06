import { AllowedCompositionPatterns } from "../../models/AllowedCompositionPatterns.js";
import { AllowedCompositionRoots } from "../../models/AllowedCompositionRoots.js";

import { CompositionKind } from "./CompositionKind.js";

export class CompositionClassifier{

    public classify(
        file:string
    ):CompositionKind{

        const normalized =
            file.replace(/\\/g,"/");

        if(
            AllowedCompositionRoots.some(root =>
                normalized.includes(root)
            )
        ){
            return CompositionKind.CompositionRoot;
        }

        if(
            normalized.endsWith("Factory.ts")
        ){
            return CompositionKind.Factory;
        }

        if(
            normalized.endsWith("Builder.ts")
        ){
            return CompositionKind.Builder;
        }

        if(
            normalized.endsWith("Module.ts")
        ){
            return CompositionKind.Module;
        }

        return CompositionKind.Regular;

    }

}
