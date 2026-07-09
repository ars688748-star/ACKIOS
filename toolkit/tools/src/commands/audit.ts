import path from "node:path";

import { ProjectScanner } from "../scanner/ProjectScanner.js";
import { WorkspaceWriter } from "../scanner/WorkspaceWriter.js";
import { AnalysisEngine } from "../engine/AnalysisEngine.js";
import { MarkdownReportGenerator } from "../report/MarkdownReportGenerator.js";
import { MarkdownWriter } from "../report/MarkdownWriter.js";

export async function runAudit(): Promise<void> {

    const root = path.resolve(".");

    const workspace = new ProjectScanner().scan(root);

    new WorkspaceWriter().save(root, workspace);


    const analysis =
        new AnalysisEngine()
            .analyze(workspace);

    const markdown =
        new MarkdownReportGenerator()
            .generate(analysis);

    new MarkdownWriter().save(
        root,
        markdown
    );

    console.log("");
    console.log("ACKI Project Audit");
    console.log("==================");
    console.log("");

    console.log("Project");
    console.table(workspace.project);

    console.log("Environment");
    console.table(workspace.environment);

    console.log("Git");
    console.table(workspace.git);

    console.log("Framework");
    console.table(workspace.framework);

    console.log("Dependencies");

    console.table({
        production: workspace.dependencies.production.length,
        development: workspace.dependencies.development.length,
        peer: workspace.dependencies.peer.length,
        optional: workspace.dependencies.optional.length
    });

    console.log("");

    console.log("Analysis");
    console.log("========");
    console.log("");

    console.log("Score:", analysis.score);
    console.log("");

    for (const issue of analysis.issues) {

        console.log(
            `[${issue.severity.toUpperCase()}] ${issue.title}`
        );

        console.log(issue.description);
        console.log("");

    }

    console.log("Workspace saved:");
    console.log(".acki/workspace.json");

    console.log("");

    console.log("Markdown report:");
    console.log(".acki/report.md");

    console.log("");

}
