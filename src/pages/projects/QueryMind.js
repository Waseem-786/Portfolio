import ProjectLayout from "../../components/ProjectLayout";
import { FaDatabase } from "react-icons/fa";
import { SiOracle, SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiAnthropic, SiGoogle } from "react-icons/si";

export default function QueryMind() {
  return (
    <ProjectLayout
      title="QueryMind"
      tagline="AI-powered Oracle SQL Optimizer & Assistant"
      description="A schema-aware optimizer that introspects an Oracle database (DDL, indexes, statistics, constraints), generates AI-driven query rewrites grounded in that metadata, verifies them against the original via MINUS set comparison, and surfaces the execution plan through a hand-built SVG flowchart."
      tags={[
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Oracle 19c",
        "PL/SQL",
        "Gemini 2.5",
        "Claude API",
        "Tailwind v4",
      ]}
      hero={{ image: "/QueryMind/portfolio-Hero-result.png" }}
      github="https://github.com/Waseem-786/Query_Optimizer"
      demoVideo="/QueryMind/QueryMind.mp4"
      overview={{
        problem:
          "The manual loop for tuning Oracle SQL — read EXPLAIN PLAN, scroll DBMS_XPLAN, spot anti-patterns, rewrite, re-EXPLAIN, time it — is slow and error-prone. Generic LLMs can rewrite SQL but have no schema context, so they hallucinate columns, miss indexes, and can silently change the result set. There's no single tool that introspects the live schema, suggests a rewrite, and proves the new query returns the same rows.",
        solution: {
          intro:
            "QueryMind replaces that loop with one click. A 5-stage pipeline — analyze → plan-tree → schema → AI → benchmark — pairs deterministic rule-based detection with schema-grounded LLM rewrites, and every candidate is set-compared against the original before it's surfaced:",
          bullets: [
            "<strong>Three custom PL/SQL packages</strong> — <span class='font-mono text-xs'>QUERY_ANALYZER_PKG</span>, <span class='font-mono text-xs'>RULE_ENGINE_PKG</span>, <span class='font-mono text-xs'>VALIDATION_ENGINE_PKG</span> — backed by 3 audit tables",
            "Extracts plans and metadata as <strong>structured JSON</strong> via EXPLAIN PLAN, DBMS_XPLAN, and the ALL_TABLES / ALL_INDEXES / ALL_TAB_COL_STATISTICS views",
            "<strong>14 rules across 3 categories</strong> — 7 Enhanced, 3 Deep-analysis, 4 Precision — flagging Cartesian joins, missing indexes, FBI / NVL anti-patterns",
            "Every rewrite is <strong>MINUS-verified</strong> via <span class='font-mono text-xs'>COUNT(((A MINUS B) UNION ALL (B MINUS A)))</span> with a 3-tier fallback (STRICT → ROW_COUNT → FAILED)",
            "Three LLM providers (<strong>Claude Code, Anthropic Claude, Google Gemini 2.5</strong>) behind one abstraction — runtime swap, shared prompts, only the model changes",
            "Hand-built <strong>SVG plan flowchart</strong> — no charting library, verified on a 67-node EXPLAIN PLAN with PX COORDINATOR + HASH GROUP BY + multiple MERGE JOINs",
          ],
        },
      }}
      stats={[
        { value: "1.45×", label: "Verified speedup", note: "37.76 ms → 26.05 ms · MINUS-identical (43 rows)" },
        { value: "14", label: "Optimization rules", note: "7 Enhanced · 3 Deep · 4 Precision" },
        { value: "3", label: "LLM providers", note: "Claude Code · Gemini 2.5 · Anthropic Claude" },
        { value: "67", label: "Plan nodes handled", note: "Tested on Flexcube production-schema queries" },
      ]}
      techStack={[
        { name: "Oracle 19c", icon: <SiOracle /> },
        { name: "PL/SQL", icon: <FaDatabase /> },
        { name: "Next.js 16", icon: <SiNextdotjs /> },
        { name: "React 19", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind v4", icon: <SiTailwindcss /> },
        { name: "Gemini API", icon: <SiGoogle /> },
        { name: "Claude API", icon: <SiAnthropic /> },
      ]}
      features={[
        {
          title: "Schema-grounded analysis",
          description:
            "Before the LLM sees anything, the analyzer pulls live schema metadata from the database and renders it as a Plan Summary — tables touched, indexes used, and a health check on row estimates. Every downstream prompt is grounded in this real metadata, not the model's training data.",
          bullets: [
            "Reads DDL, indexes, table & column statistics, and constraints",
            "Serializes everything as structured JSON for LLM context",
            "Cost and cardinality estimates pulled from DBMS_XPLAN",
            "Phase 1 + 2 (EXPLAIN + 14-rule engine) returned in ~530 ms on a 4-table comma-join",
          ],
          image: "/QueryMind/portfolio-SchemaIntrospection.png",
        },
        {
          title: "AI rewrite with confidence",
          description:
            "Side-by-side view of the original query and the AI-generated rewrite, with the active LLM provider and its confidence score in the header. On the IATM_EQUITY_GLS Flexcube query, Gemini reported 0.90 and Claude Code 0.87 — both rewrites verified row-identical before being surfaced.",
          bullets: [
            "Provider abstraction over Claude Code, Anthropic Claude, and Gemini 2.5",
            "Confidence badge per rewrite, reported in aiAnalysis.confidence",
            "Switch providers mid-session — prompts and schema context are shared, only the model swaps",
            "Copy-to-clipboard on every code block",
          ],
          image: "/QueryMind/portfolio-QueryRewrite.png",
        },
        {
          title: "Reasoning behind every rewrite",
          description:
            "Trust is the whole game with AI-generated SQL. The Recommendation tab shows a decision card explaining why the original is inefficient, why the rewrite is better, and what trade-offs the model considered — so engineers can audit the suggestion instead of taking it on faith.",
          bullets: [
            "Plain-English explanation of the rewrite's structural changes",
            "Issues list (anti-patterns hit, indexes ignored)",
            "Trade-offs surfaced — readability vs cost, plan stability, parameter sniffing",
          ],
          image: "/QueryMind/portfolio-Recommendation.png",
        },
        {
          title: "MINUS-verified benchmarks",
          description:
            "Every rewrite is benchmarked against the original by running both queries and set-comparing the results. Only candidates that return identical rows are surfaced — and each one ships with min/avg/max timing across 3 iterations plus a clear speedup multiplier. On the IATM_EQUITY_GLS query, the rewrite went 37.76 ms → 26.05 ms (1.45×); on the larger SELECT * UNION ALL query, 49.28 ms → 34.44 ms (1.43×). Both verified identical at 43 rows.",
          bullets: [
            "Set equality via <span class='font-mono text-xs'>SELECT COUNT(*) FROM ((A MINUS B) UNION ALL (B MINUS A))</span> — count of 0 means identical sets",
            "3-tier fallback: STRICT MINUS → ROW_COUNT (when SELECT * triggers ORA-00918) → FAILED",
            "Result surfaced as Identical / Row count only / Differs / Not tested badges per candidate",
            "3 iterations per candidate with min / avg / max timing reported",
          ],
          image: "/QueryMind/portfolio-Benchmark.png",
        },
        {
          title: "Execution plan, two views",
          description:
            "A hand-built SVG flowchart for the picture-says-it-all moment, and a tabular plan view with cost-bar visualization for the engineer who wants to scan numerically. No charting library — the flowchart is custom-laid React + SVG so every node, edge, and color is exactly intentional. Verified on a 67-node EXPLAIN PLAN including PX COORDINATOR, HASH GROUP BY, and multiple MERGE JOINs.",
          bullets: [
            "Color-coded operations: scans, joins, aggregates, sorts",
            "Cost-bar visualization in table view for quick hotspot scanning",
            "Click-to-expand modal showing 30+ plan ops at once",
          ],
          images: [
            "/QueryMind/portfolio-PlanFlowchart.png",
            "/QueryMind/portfolio-PlanTable.png",
          ],
        },
        {
          title: "Rule engine for anti-patterns",
          description:
            "Before the LLM ever runs, a deterministic rule engine scans the query and plan for classic SQL anti-patterns. 14 rules across 3 categories — 7 Enhanced, 3 Deep-analysis, 4 Precision — grade findings HIGH / MEDIUM / LOW, with the exact column or join clause that triggered them. The cheap wins surface in milliseconds, no API call required.",
          bullets: [
            "Cartesian joins, redundant DISTINCTs, missing indexes",
            "Function-based index (FBI) and NVL-wrapped predicate detection",
            "Severity-graded findings with the specific token that triggered each rule",
            "Returns in ~530 ms — cheap wins land before the LLM is even invoked",
          ],
          image: "/QueryMind/portfolio-AntiPatterns.png",
        },
        {
          title: "Three LLM providers, one abstraction",
          description:
            "QueryMind ships with Claude Code, Anthropic Claude, and Google Gemini 2.5 Flash behind a provider-abstraction layer. The Settings modal shows real-time availability for each provider, and switching is a single click. End-to-end timing trade-off observed on the same query: ~72 s with Gemini (AI step dominates), ~7 min 33 s with Claude Code (Sonnet) — Oracle-side work was ~5 s either way.",
          bullets: [
            "Provider availability indicator (green / amber / off)",
            "Per-provider API-key storage with a single config surface",
            "Model swap preserves chat history and schema context",
            "Same prompt contract across providers — model choice is one config line",
          ],
          image: "/QueryMind/portfolio-Settings-ProviderPicker.png",
        },
        {
          title: "Schema-aware Database Assistant",
          description:
            "A ChatGPT-style chat panel for SQL and PL/SQL questions — but every reply is grounded in the live schema, not the model's training. Multi-conversation history in the sidebar lets users hop between investigations without losing thread.",
          bullets: [
            "Rich markdown rendering — bold, tables, bullet lists",
            "Fenced SQL code blocks with one-click Copy",
            "Persistent multi-chat history sidebar (ChatGPT-style)",
          ],
          images: [
            "/QueryMind/portfolio-ChatAssistant.png",
            "/QueryMind/portfolio-ChatHistory-Sidebar.png",
          ],
        },
      ]}
      diagrams={{
        title: "Built for craft",
        description:
          "The product details that don't make feature lists but make daily use feel right — onboarding, theme support, and a focus-mode rail for when you just want the editor. 36 bugs were tracked and fixed in BUGS.md across development, each with severity, repro, root cause, fix, and verification notes.",
        images: [
          "/QueryMind/portfolio-Hero-welcome.png",
          "/QueryMind/portfolio-LightTheme.png",
          "/QueryMind/portfolio-CollapsedRail.png",
        ],
      }}
    />
  );
}