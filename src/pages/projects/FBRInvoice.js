import ProjectLayout from "../../components/ProjectLayout";
import { SiNodedotjs, SiJavascript } from "react-icons/si";
import { FiFileText } from "react-icons/fi";

export default function FBRInvoice() {
  return (
    <ProjectLayout
      title="FBR Invoice Integration System"
      tagline="Real-time e-invoicing client for Pakistan's FBR APIs"
      description="A Node.js client-side invoicing system integrated with Pakistan's Federal Board of Revenue (FBR) e-invoicing APIs — real-time invoice submission, validation, and structured error handling that meets FBR compliance and audit requirements."
      tags={["Node.js", "REST APIs", "FBR e-Invoicing", "JavaScript"]}
      hero={{ placeholder: true, icon: <FiFileText />, accent: "from-emerald-500 via-teal-500 to-cyan-500" }}
      github="https://github.com/Waseem-786"
      overview={{
        problem:
          "Pakistan's FBR mandates real-time e-invoice submission for tax compliance. Manual entry into the FBR portal is slow and error-prone, and most off-the-shelf accounting tools don't ship with a tested FBR-native integration.",
        solution: {
          intro:
            "A Node.js integration layer that talks to FBR's e-invoicing APIs directly:",
          bullets: [
            "<strong>Secure API integrations</strong> with FBR endpoints for invoice submission and validation",
            "<strong>Response validation</strong> and structured error handling for compliance and audit trails",
            "<strong>End-to-end automation</strong> of invoice generation and reporting — no manual data entry",
            "<strong>Real-time submission</strong> with retry / backoff for transient failures",
          ],
        },
      }}
      techStack={[
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ]}
      features={[
        {
          title: "Real-time FBR Submission",
          description:
            "Invoices flow directly from the source system to the FBR e-invoicing API in real time, with structured logging of every request and response for the audit trail.",
        },
        {
          title: "Compliance-grade Validation",
          description:
            "Every response is validated against FBR's schema and rules — discrepancies surface immediately with a clear, actionable error message instead of failing silently downstream.",
        },
        {
          title: "Structured Error Handling",
          description:
            "Network failures, rate limits, and FBR API errors are normalized into a single error model with retry, backoff, and dead-letter strategies — keeping the upstream system stable.",
        },
        {
          title: "Automated Reporting",
          description:
            "End-to-end invoice generation and reporting workflows replace manual entry, eliminating transcription errors and giving finance teams a clean, auditable record by default.",
        },
      ]}
    />
  );
}