import type { ReactionRule } from "./ReactionRule.js";



export class BrainEventReactionMapper {



    private readonly rules:

        ReactionRule[] = [



            {

                eventType:

                    "planet-alert",


                reaction:

                    "critical"


            },



            {

                eventType:

                    "warning",


                reaction:

                    "warning"


            }


        ];





    public resolve(

        eventType:string

    ) {



        return this.rules.find(

            rule =>

                rule.eventType === eventType

        );


    }


}
