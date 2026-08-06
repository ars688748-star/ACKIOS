export default {

    id: "demo-gitlab",

    name: "Demo GitLab Plugin",

    platform: {

        id: "demo-gitlab",

        name: "Demo GitLab Platform",


        async connect(){

            return true;

        },


        async publish(request){

            return {

                platform: "demo-gitlab",

                status: "published",

                artifact: request.artifact

            };

        }


    },


    async activate(){

        console.log(
            "Demo GitLab Plugin activated"
        );

    }

};


