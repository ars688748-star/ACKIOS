import type { GalaxyEvent, GalaxyEventType } from "./GalaxyEvent.js";


type GalaxyEventHandler = (

    event: GalaxyEvent

) => void;



export class GalaxyEventDispatcher {


    private readonly handlers =

        new Map<
            GalaxyEventType,
            GalaxyEventHandler[]
        >();



    public register(

        type: GalaxyEventType,

        handler: GalaxyEventHandler

    ): void {


        const existing =

            this.handlers.get(type) ?? [];



        existing.push(
            handler
        );



        this.handlers.set(
            type,
            existing
        );


    }



    public dispatch(

        event: GalaxyEvent

    ): void {


        const handlers =

            this.handlers.get(
                event.type
            ) ?? [];



        for (const handler of handlers) {

            handler(
                event
            );

        }


    }



    public clear(): void {

        this.handlers.clear();

    }


}
