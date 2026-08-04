export interface RiskProfile {
    level: "low" | "medium" | "high" | "critical";

    summary: string;

    recommendations: string[];
}

