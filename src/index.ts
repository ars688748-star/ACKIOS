#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";

import { createContainer } from "./core/bootstrap.js";
import { Logger } from "./core/Logger.js";
import { Workspace } from "./workspace/Workspace.js";
import { runAudit } from "./commands/audit.js";

const container = createContainer();

const logger = container.resolve<Logger>("logger");
const workspace = container.resolve<Workspace>("workspace");

const program = new Command();

program
    .name("acki")
    .description("ACKI Development Toolkit")
    .version("0.2.0");

program
    .command("doctor")
    .description("Check toolkit")
    .action(() => {

        logger.info("Starting doctor");

        console.log("");
        console.log(chalk.green("ACKI Toolkit OK"));
        console.log("");

        console.log(workspace.getState());

    });

program
    .command("audit")
    .description("Analyze current project")
    .action(async () => {

        logger.info("Starting audit");

        await runAudit();

    });


program.parse();

