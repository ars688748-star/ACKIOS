import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [

    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        ignores: [
            "**/*.backup.ts",
            "**/*.backup*.ts"
        ],

        files: ["src/**/*.ts"],

        languageOptions: {
            globals: globals.node
        },

        rules: {

            "no-console": "off",
            "no-unused-vars": "off",

            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    "argsIgnorePattern": "^_",
                    "varsIgnorePattern": "^_",
                    "caughtErrorsIgnorePattern": "^_"
                }
            ]

        }

    }

];

