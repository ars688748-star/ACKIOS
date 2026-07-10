#!/usr/bin/env node

import { AckiCli } from "../cli/AckiCli.js";

const exitCode =
    await new AckiCli().run(
        process.argv.slice(2)
    );

process.exit(exitCode);
