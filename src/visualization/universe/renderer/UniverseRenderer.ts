import type { Universe } from "../model/Universe.js";

import type { CelestialObject } from "../model/CelestialObject.js";


import { StarRenderer } from "./StarRenderer.js";

import { PlanetRenderer } from "./PlanetRenderer.js";

import { MoonRenderer } from "./MoonRenderer.js";

import { SatelliteRenderer } from "./SatelliteRenderer.js";



export type UniverseRenderObject =


    | ReturnType<StarRenderer["render"]>

    | ReturnType<PlanetRenderer["render"]>

    | ReturnType<MoonRenderer["render"]>

    | ReturnType<SatelliteRenderer["render"]>;




export class UniverseRenderer {



    private readonly starRenderer =

        new StarRenderer();



    private readonly planetRenderer =

        new PlanetRenderer();



    private readonly moonRenderer =

        new MoonRenderer();



    private readonly satelliteRenderer =

        new SatelliteRenderer();





    public render(

        universe: Universe

    ): UniverseRenderObject[] {



        return universe.objects.map(

            object =>

                this.renderObject(object)

        );


    }





    private renderObject(

        object: CelestialObject

    ): UniverseRenderObject {



        switch (

            object.type

        ) {


            case "star":

                return this.starRenderer.render(

                    object

                );



            case "planet":

                return this.planetRenderer.render(

                    object

                );



            case "moon":

                return this.moonRenderer.render(

                    object

                );



            case "satellite":

                return this.satelliteRenderer.render(

                    object

                );


        }


    }


}
