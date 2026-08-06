export interface ClassificationRule {

    name:string;

    match:string;

    kind:"PUBLIC"|"INTERNAL"|"PRIVATE"|"COMMERCIAL"|"RESEARCH";

}
