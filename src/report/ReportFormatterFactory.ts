import { ReportFormatter } from "./ReportFormatter.js";
import { ReportFormat } from "./ReportFormat.js";

import { ConsoleReportFormatter } from "./formatters/ConsoleReportFormatter.js";
import { JsonReportFormatter } from "./formatters/JsonReportFormatter.js";
import { MarkdownReportFormatter } from "./formatters/MarkdownReportFormatter.js";
import { HtmlReportFormatter } from "./formatters/HtmlReportFormatter.js";

export class ReportFormatterFactory {

    public create(
        format: ReportFormat
    ): ReportFormatter {

        switch (format) {

            case ReportFormat.Json:
                return new JsonReportFormatter();

            case ReportFormat.Markdown:
                return new MarkdownReportFormatter();

            case ReportFormat.Html:
                return new HtmlReportFormatter();

            default:
                return new ConsoleReportFormatter();

        }

    }

}
