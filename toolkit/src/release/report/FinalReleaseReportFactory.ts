import { FinalReleaseReportService } from "./FinalReleaseReportService.js";



export class FinalReleaseReportFactory {



    public static create(){


        return new FinalReleaseReportService();



    }


}
