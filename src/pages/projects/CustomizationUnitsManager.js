import ProjectLayout from "../../components/ProjectLayout";
import { SiElectron, SiReact, SiTypescript } from "react-icons/si";
import { FiTool } from "react-icons/fi";

export default function CustomizationUnitsManager() {
  return (
    <ProjectLayout
      title="Customization Units Manager"
      tagline="FLEXCUBE deployment automation, in a desktop app"
      description="A cross-platform Electron + React + TypeScript desktop tool for Oracle FLEXCUBE on-site deployment teams — track, version, and validate customization units across raw and final environments. Cut deployment review effort by ~30 minutes per change."
      tags={["Electron", "React", "TypeScript", "Monaco Editor", "jsdiff", "electron-builder"]}
      hero={{ placeholder: true, icon: <FiTool />, accent: "from-indigo-500 via-violet-500 to-fuchsia-500" }}
      github="https://github.com/Waseem-786"
      overview={{
        problem:
          "On FLEXCUBE deployments, every customization change requires a paired senior–junior review of raw vs. final environments. Manually diffing files is slow, error-prone, and turns release prep into a bottleneck — particularly close to cutover.",
        solution: {
          intro:
            "A local-first desktop tool that automates the diff, the conflict resolution, and the script assembly:",
          bullets: [
            "<strong>Automated diff detection</strong> across raw and final customization environments",
            "<strong>Side-by-side conflict resolver</strong> using Monaco Editor (the VS Code engine) with hunk-by-hunk merge selection",
            "<strong>Auto-generated deployment scripts</strong> from the approved customization set",
            "<strong>Local-first persistence</strong> — JSON files, no backend, no DB",
            "<strong>Windows distribution</strong> via electron-builder (NSIS installer + portable .exe) through GitHub Releases",
          ],
        },
      }}
      techStack={[
        { name: "Electron", icon: <SiElectron /> },
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
      ]}
      externalLibraries={[
        { name: "Monaco Editor", description: "The same editor that powers VS Code — used for syntax-aware diff rendering inside the conflict resolver." },
        { name: "jsdiff", description: "Computes the diff hunks displayed alongside Monaco for hunk-by-hunk merge selection." },
        { name: "electron-builder", description: "Packages the app into NSIS installers and portable .exe distributables for Windows." },
      ]}
      features={[
        {
          title: "Customization-unit Tracking",
          description:
            "Track every customization unit across raw and final environments with version awareness — the tool always knows what's drifted, what's been approved, and what needs review.",
        },
        {
          title: "Monaco Side-by-side Resolver",
          description:
            "When raw and final disagree, open a Monaco-powered side-by-side diff. Select merges hunk-by-hunk, with full FLEXCUBE syntax highlighting and the editor experience of VS Code.",
          bullets: [
            "Syntax-aware diff rendering",
            "Hunk-by-hunk merge selection",
            "Conflict resolution without leaving the desktop",
          ],
        },
        {
          title: "Auto-generated Deployment Scripts",
          description:
            "Once the customization set is approved, the tool produces the deployment scripts automatically — eliminating manual script-assembly errors before production cutover.",
        },
        {
          title: "Local-first, Distributable",
          description:
            "No backend, no database — everything is JSON-file persisted on the engineer's machine. Distributed as an NSIS installer + portable .exe through GitHub Releases.",
        },
      ]}
    />
  );
}