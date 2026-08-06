import type { ReleaseAsset } from "./ReleaseAsset.js";

export interface IAssetBuilder {

    name:string;

    build(): ReleaseAsset;

}
