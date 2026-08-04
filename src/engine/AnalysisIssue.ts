export type IssueSeverity =
    | "info"
    | "warning"
    | "error";

export type IssueCategory =
    | "project"
    | "documentation"
    | "repository"
    | "package"
    | "dependencies"
    | "typescript"
    | "security"
    | "quality";

export interface AnalysisIssue {

    id: string;

    category: IssueCategory;

    severity: IssueSeverity;

    title: string;

    description: string;

}
