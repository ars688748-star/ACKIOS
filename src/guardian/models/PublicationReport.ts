export interface PublicationReport {

    scanned:number;

    public:number;

    internal:number;

    private:number;

    commercial:number;

    research:number;

    profile:string;

    risk:"LOW"|"MEDIUM"|"HIGH";

    recommendations:string[];

}
