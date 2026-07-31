import {UploadQueue} from "./UploadQueue.js";
import {GitHubReleaseTarget} from "./GitHubReleaseTarget.js";
import {UploadExecutor} from "./UploadExecutor.js";


export class ReleaseUploadService {


 public upload(){

  const assets =
   new UploadQueue()
   .getAssets();


  const target =
   new GitHubReleaseTarget()
   .getTarget();


  const execution =
   new UploadExecutor()
   .execute();


  return {

   assets,

   target,

   execution,

   ready:
    target.ready &&
    execution.uploaded

  };

 }

}
