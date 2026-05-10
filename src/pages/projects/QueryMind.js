import ProjectLayout from "../../components/ProjectLayout";
import { FaDatabase } from "react-icons/fa";
import { SiOracle, SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiAnthropic, SiGoogle } from "react-icons/si";
import { FiZap } from "react-icons/fi";

export default function QueryMind() {
  return (
    <ProjectLayout
      title="QueryMind"
      tagline="AI-powered Oracle SQL Optimizer & Assistant"
      description="A full-stack tool that introspects an Oracle schema (DDL, indexes, table & column statistics, constraints) and generates AI-driven query rewrites — benchmarked against the original via MINUS set comparison and surfaced through a hand-built SVG execution-plan flowchart."
      tags={["Next.js 16", "React 19", "TypeScript", "Oracle 19c", "PL/SQL", "Gemini 2.5", "Claude API", "Tailwind v4"]}
      hero={{ placeholder: true, icon: <FiZap />, accent: "from-amber-400 via-orange-500 to-rose-500" }}
      github="https://github.com/Waseem-786"
      overview={{
        problem:
          "Oracle DBAs and developers spend significant time identifying poorly-performing SQL — reading EXPLAIN PLAN output, hunting for missing indexes, and rewriting queries by hand. The feedback loop is slow and the tooling rarely understands the actual schema or current statistics.",
        solution: {
          intro:
            "A schema-aware AI optimizer that grounds every LLM rewrite in live Oracle metadata, then proves correctness via MINUS comparison:",
          bullets: [
            "<strong>Three custom PL/SQL packages</strong> — QUERY_ANALYZER_PKG, RULE_ENGINE_PKG, VALIDATION_ENGINE_PKG",
            "Extracts execution plans and metadata as <strong>structured JSON</strong> using EXPLAIN PLAN, DBMS_XPLAN, dynamic SQL, and ALL_TABLES / ALL_INDEXES / ALL_TAB_COL_STATISTICS",
            "Rule engine flags <strong>Cartesian joins, redundant DISTINCTs, missing indexes</strong>, and other anti-patterns",
            "Recommends <strong>indexes and triggers</strong> based on query shape and statistics",
            "Hand-built <strong>SVG flowchart</strong> of the execution plan — no charting library — plus tabular plan view and session-persistent chat",
          ],
        },
      }}
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
          title: "Schema Introspection Engine",
          description:
            "PL/SQL analyzer pulls DDL, indexes, table/column statistics, and constraints from the live database and serializes them as structured JSON for the LLM context.",
          bullets: [
            "Uses EXPLAIN PLAN and DBMS_XPLAN for execution-plan extraction",
            "Reads ALL_TABLES / ALL_INDEXES / ALL_TAB_COL_STATISTICS for grounding",
            "Dynamic SQL handles arbitrary user queries safely",
          ],
        },
        {
          title: "Rule-based Anti-pattern Detection",
          description:
            "Before invoking the LLM, deterministic rules flag Cartesian joins, redundant DISTINCTs, missing indexes, and other classic SQL anti-patterns — surfacing the cheap wins instantly.",
          bullets: [
            "Index recommendations from query shape + column statistics",
            "Trigger suggestions for cascading constraints",
            "Suggestions persist alongside the AI rewrites for comparison",
          ],
        },
        {
          title: "MINUS-based Validation",
          description:
            "Every AI-generated rewrite is benchmarked against the original via SQL MINUS set comparison — guaranteeing the rewrite returns the same rows before it's recommended.",
        },
        {
          title: "Hand-built SVG Plan Flowchart",
          description:
            "No charting library. A custom React component renders the execution plan as an interactive SVG flowchart, paired with a tabular plan view and session-persistent chat for follow-up questions.",
        },
        {
          title: "Schema-grounded LLM Provider Layer",
          description:
            "Provider-abstraction layer over Google Gemini 2.5 Flash and Anthropic Claude — every prompt is grounded in live Oracle metadata for schema-aware rewrites and accurate SQL/PL-SQL Q&A in Assistant mode.",
        },
      ]}
    />
  );
}