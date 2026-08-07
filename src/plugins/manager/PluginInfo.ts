export type PluginStatus =
    
    | "installed"
    | "enabled"
    | "disabled"
    | "error";



export interface PluginInfo {


    id:

        string;



    name:

        string;



    version:

        string;



    status:

        PluginStatus;



    path?:

        string;



}
