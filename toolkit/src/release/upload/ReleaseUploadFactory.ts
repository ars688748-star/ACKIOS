import {ReleaseUploadService} from "./ReleaseUploadService.js";

export class ReleaseUploadFactory {

 public static create(){

  return new ReleaseUploadService();

 }

}
