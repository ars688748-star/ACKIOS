import type { PluginInfo } from "./PluginInfo.js";

import { PluginScanner } from "./scanner/PluginScanner.js";


export class PluginManager {


    private readonly plugins:

        Map<string, PluginInfo> =

            new Map();



    private readonly scanner =

        new PluginScanner();




    public register(

        plugin:

            PluginInfo

    ): void {


        this.plugins.set(

            plugin.id,

            plugin

        );


    }





    public async discover(

        root:

            string

    ): Promise<void> {


        const plugins =

            await this.scanner.scan(

                root

            );



        for(const plugin of plugins){


            this.register(

                plugin

            );


        }


    }






    public list():

        PluginInfo[] {


        return Array.from(

            this.plugins.values()

        );


    }






    public get(

        id:

            string

    ):

        PluginInfo | undefined {


        return this.plugins.get(

            id

        );


    }






    public enable(

        id:

            string

    ): void {


        const plugin =

            this.plugins.get(

                id

            );



        if(plugin){

            plugin.status = "enabled";

        }


    }






    public disable(

        id:

            string

    ): void {


        const plugin =

            this.plugins.get(

                id

            );



        if(plugin){

            plugin.status = "disabled";

        }


    }


}
