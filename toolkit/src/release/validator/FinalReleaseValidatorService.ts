import {FinalReleaseValidator} from "./FinalReleaseValidator.js";

export class FinalReleaseValidatorService {


 public check(){

  const result=
   new FinalReleaseValidator()
   .validate();


  return {

   result,

   approved:
    Object.values(result)
    .every(Boolean)

  };

 }

}
