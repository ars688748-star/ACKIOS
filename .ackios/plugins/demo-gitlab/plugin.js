export default {

    id: "demo-external",

    name: "Demo External Plugin",

    platform: {

        id: "demo-external",

        name: "Demo External Platform",


        async connect(){

            return true;

        },


        async publish(request){

            return {

                platform: "demo-external",

                status: "published",

                artifact: request.artifact

            };

        }


    },


    async activate(){

        console.log(
            "Demo External Plugin activated"
        );

    }

};
