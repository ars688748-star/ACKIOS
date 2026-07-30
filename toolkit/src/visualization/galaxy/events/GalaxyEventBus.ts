import type { GalaxyEvent, GalaxyEventType } from "./GalaxyEvent.js";


type GalaxyEventListener = (

    event: GalaxyEvent

) => void;



export class GalaxyEventBus {


    private readonly listeners =

        new Map<
            GalaxyEventType,
            GalaxyEventListener[]
        >();



    public subscribe(

        type: GalaxyEventType,

        listener: GalaxyEventListener

    ): void {


        const existing =

            this.listeners.get(type) ?? [];



        existing.push(
            listener
        );



        this.listeners.set(
            type,
            existing
        );


    }



    public publish(

        event: GalaxyEvent

    ): void {


        const listeners =

            this.listeners.get(
                event.type
            ) ?? [];



        for (const listener of listeners) {

            listener(
                event
            );

        }


    }



    public clear(): void {

        this.listeners.clear();

    }


}
