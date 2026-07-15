import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [

    {
        ignores: [
            "dist/**",
            "node_modules/**",
            "src/**/*.backup.ts",
            "src/**/*.backup*.ts",
            "src/**/__tests__/**",
            "src/**/*.test.ts"
        ]
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
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
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_"
                }
            ],

            "@typescript-eslint/no-empty-object-type": "off"

        }

    }

];

