import { dialog } from "electron";

export class ProjectDialog {

    async open() {

        const result = await dialog.showOpenDialog({

            properties: [

                "openDirectory"

            ]

        });

        console.log("Dialog result =", result);

        if (result.canceled) {

            console.log("User canceled");

            return null;

        }

        console.log("Selected path =", result.filePaths[0]);

        return result.filePaths[0];

    }

}
