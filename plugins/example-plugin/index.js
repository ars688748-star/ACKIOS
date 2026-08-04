export default {

    metadata: {
        id: "example-plugin",
        name: "Example Plugin",
        version: "1.0.0",
        author: "ACKI"
    },


    activate(context) {

        context.log(
            "Example Plugin activated"
        );

    },


    deactivate() {

        console.log(
            "Example Plugin deactivated"
        );

    }

};
