import { ScanOptions } from "../models/ScanOptions.js";
import { ScanResult } from "../models/ScanResult.js";

export interface IScanner{

    scan(
        options:ScanOptions
    ):Promise<ScanResult>;

}
