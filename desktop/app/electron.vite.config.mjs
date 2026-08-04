import { defineConfig } from "electron-vite";
import { resolve } from "node:path";

export default defineConfig({

    main: {

        build: {

            rollupOptions: {

                input: resolve(__dirname, "src/main/main.ts")

            }

        }

    },

    preload: {

        build: {

            rollupOptions: {

                input: resolve(__dirname, "src/preload/preload.ts"),

                output: {

                    format: "cjs"

                }

            }

        }

    },

    renderer: {

        root: resolve(__dirname, "src/renderer")

    },

    resolve: {

        alias: {

                   "@ackios/core": resolve(__dirname, "../../packages/core/src"),

        "monaco-editor": resolve(__dirname, "../../node_modules/monaco-editor")

        }

    }

});


