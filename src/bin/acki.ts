#!/usr/bin/env node

import { bootstrap } from "../runtime/bootstrap.js";
import { AckiCli } from "../cli/AckiCli.js";

const application =
    await bootstrap();

const exitCode =
    await new AckiCli(application).run(
        process.argv.slice(2)
    );

process.exit(exitCode);
