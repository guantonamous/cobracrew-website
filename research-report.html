import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, Tag, BookOpen, Target, FlaskConical, BarChart3, Shield, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ResearchReport = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <span className="font-display text-xl font-bold tracking-widest text-primary text-glow">COBRA</span>
        </div>
      </nav>

      <main className="container mx-auto max-w-4xl px-6 pt-28 pb-24">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-xs uppercase tracking-widest text-primary text-glow-subtle">&gt; Research Report Template</p>

          <h1 className="mt-4 font-display text-3xl font-bold uppercase tracking-wider text-foreground md:text-4xl">
            [Research Project Title]
          </h1>

          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            [One-line subtitle or thesis statement summarizing the research]
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Calendar size={12} /> [Publication Date]</span>
            <span className="flex items-center gap-1"><Users size={12} /> [Author(s)]</span>
            <span className="flex items-center gap-1"><Tag size={12} /> [Domain: Malware / Network / AppSec / etc.]</span>
            <span className="border border-primary/50 px-2 py-0.5 text-primary">RPT-[ID]</span>
          </div>
        </motion.div>

        <div className="mt-8 h-px w-full bg-border" />

        {/* Table of Contents */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8 border border-border bg-card p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-primary text-glow-subtle">
            <FileText size={14} className="mr-2 inline" />Table of Contents
          </h2>
          <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              "Abstract",
              "Introduction & Motivation",
              "Threat Landscape / Background",
              "Methodology",
              "Findings & Analysis",
              "Case Studies / Proof of Concept",
              "Mitigations & Recommendations",
              "Conclusion & Future Work",
              "Appendix & References",
            ].map((item, i) => (
              <li key={item} className="transition-colors hover:text-primary cursor-pointer">
                <span className="font-mono text-primary/60">{i + 1}.</span> {item}
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Sections */}
        <div className="mt-12 space-y-16">
          {/* 1. Abstract */}
          <Section icon={<BookOpen size={16} />} number="01" title="Abstract">
            <p className="text-muted-foreground leading-relaxed">
              A concise summary (150–300 words) of the entire report. Cover the problem, approach, key findings, and significance. This should stand alone — a reader should understand the research scope without reading further.
            </p>
            <InfoBox title="Writing Tip">
              Write the abstract LAST, after completing all other sections. It should answer: What? Why? How? What did you find? Why does it matter?
            </InfoBox>
          </Section>

          {/* 2. Introduction */}
          <Section icon={<Target size={16} />} number="02" title="Introduction & Motivation">
            <p className="text-muted-foreground leading-relaxed">
              Set the stage for your research. Why is this topic important? What gap in knowledge or capability are you addressing?
            </p>
            <Checklist items={[
              "Define the problem space clearly",
              "State why this research matters NOW (recent incidents, emerging threats, etc.)",
              "Outline your research questions or hypotheses",
              "Briefly describe your approach",
              "Preview your key findings",
            ]} />
          </Section>

          {/* 3. Threat Landscape */}
          <Section icon={<Shield size={16} />} number="03" title="Threat Landscape / Background">
            <p className="text-muted-foreground leading-relaxed">
              Provide context. What does the reader need to know to understand your research? Cover relevant prior work, current threat actors, and existing defenses.
            </p>
            <CodeBlock title="Outline">
{`3.1 Historical Context
    - Evolution of [threat/technology]
    - Key incidents / milestones

3.2 Current State
    - Active threat actors & TTPs (MITRE ATT&CK mapping)
    - Existing detection / defense mechanisms
    - Known gaps and limitations

3.3 Related Work
    - Academic papers & industry reports
    - How your research extends or differs from prior work`}
            </CodeBlock>
          </Section>

          {/* 4. Methodology */}
          <Section icon={<FlaskConical size={16} />} number="04" title="Methodology">
            <p className="text-muted-foreground leading-relaxed">
              Detail your research approach so others can replicate it. Be specific about tools, datasets, environment, and procedures.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Research Type", value: "[Empirical / Analytical / Experimental / Survey]" },
                { label: "Environment", value: "[Lab setup, OS versions, hardware specs]" },
                { label: "Dataset", value: "[Source, size, collection period, any sampling]" },
                { label: "Tools & Frameworks", value: "[List primary tools with versions]" },
              ].map((item, i) => (
                <div key={i} className="border border-border bg-secondary/30 p-3">
                  <p className="font-display text-[10px] font-semibold uppercase tracking-widest text-primary">{item.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.value}</p>
                </div>
              ))}
            </div>
            <CodeBlock title="Procedure Steps">
{`Step 1: [Data Collection / Sample Gathering]
        - Describe sources and collection methods
        
Step 2: [Analysis / Processing]
        - Describe analytical techniques applied
        
Step 3: [Testing / Validation]
        - Describe how you validated results
        
Step 4: [Documentation]
        - How results were recorded and verified`}
            </CodeBlock>
          </Section>

          {/* 5. Findings */}
          <Section icon={<BarChart3 size={16} />} number="05" title="Findings & Analysis">
            <p className="text-muted-foreground leading-relaxed">
              Present your results with data, evidence, and analysis. Use tables, charts, and code samples to support findings. Separate raw findings from your interpretation.
            </p>
            <CodeBlock title="Findings Template">
{`Finding #1: [Title]
  Severity:    [Critical / High / Medium / Low / Informational]
  Evidence:    [Data points, logs, screenshots]
  Impact:      [What this means for defenders / attackers]
  Confidence:  [High / Medium / Low]

Finding #2: [Title]
  ...

Statistical Summary:
  - [X]% of samples exhibited [behavior]
  - [Metric] increased by [X]% compared to baseline
  - [Other quantitative results]`}
            </CodeBlock>
            <Note type="info">
              Always distinguish between correlation and causation. Be transparent about limitations in your data or methodology.
            </Note>
          </Section>

          {/* 6. Case Studies */}
          <Section icon={<Target size={16} />} number="06" title="Case Studies / Proof of Concept">
            <p className="text-muted-foreground leading-relaxed">
              Provide concrete examples that demonstrate your findings. Each case study should follow a consistent format.
            </p>
            <CodeBlock title="Case Study Format">
{`=== Case Study [#]: [Descriptive Title] ===

Background:
  [Context for this specific example]

Setup:
  [Environment, configuration, preconditions]

Execution:
  [Step-by-step walkthrough with evidence]

Results:
  [What happened, with supporting data]

Analysis:
  [How this supports your broader findings]`}
            </CodeBlock>
            <Note type="warning">
              If including exploit PoCs, follow responsible disclosure. Redact sensitive information and include appropriate warnings.
            </Note>
          </Section>

          {/* 7. Mitigations */}
          <Section icon={<Shield size={16} />} number="07" title="Mitigations & Recommendations">
            <p className="text-muted-foreground leading-relaxed">
              Provide actionable recommendations organized by audience and priority.
            </p>
            <div className="space-y-3">
              {[
                { priority: "Critical", desc: "[Immediate actions to address highest-risk findings]" },
                { priority: "High", desc: "[Important changes for near-term implementation]" },
                { priority: "Medium", desc: "[Best-practice improvements to adopt over time]" },
                { priority: "Low", desc: "[Long-term strategic enhancements]" },
              ].map((item) => (
                <div key={item.priority} className={`flex items-start gap-3 border p-3 ${
                  item.priority === "Critical" ? "border-destructive/50 bg-destructive/5" :
                  item.priority === "High" ? "border-primary/50 bg-primary/5" :
                  "border-border bg-secondary/30"
                }`}>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${
                    item.priority === "Critical" ? "text-destructive" : "text-primary"
                  }`}>{item.priority}</span>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* 8. Conclusion */}
          <Section icon={<BookOpen size={16} />} number="08" title="Conclusion & Future Work">
            <Checklist items={[
              "Summarize key findings and their significance",
              "Restate the problem and how your research addresses it",
              "Acknowledge limitations honestly",
              "Propose specific directions for future research",
              "Include a call to action for the community",
            ]} />
          </Section>

          {/* 9. Appendix */}
          <Section icon={<ExternalLink size={16} />} number="09" title="Appendix & References">
            <p className="text-muted-foreground leading-relaxed">
              Include supplementary material: raw data tables, full configuration files, extended code samples, and a complete bibliography.
            </p>
            <CodeBlock title="Reference Format">
{`[1] Author(s). "Title." Publication/Source, Year. URL
[2] Author(s). "Title." Publication/Source, Year. URL
[3] CVE-YYYY-XXXXX — [Brief description]. NIST NVD.
[4] MITRE ATT&CK — [Technique ID]: [Technique Name]`}
            </CodeBlock>
          </Section>
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            COBRA Research Group · Report ID: <span className="text-primary">RPT-[XXX]</span> · Classification: <span className="text-primary">[PUBLIC / TLP:CLEAR]</span>
          </p>
          <Link to="/" className="mt-4 inline-block border border-primary bg-primary/10 px-6 py-2 font-mono text-xs uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
};

/* ---- Reusable sub-components ---- */

const Section = ({ icon, number, title, children }: { icon: React.ReactNode; number: string; title: string; children: React.ReactNode }) => (
  <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <div className="flex items-center gap-3">
      <span className="text-primary">{icon}</span>
      <h2 className="font-display text-lg font-bold uppercase tracking-widest text-foreground">
        <span className="text-primary/50 mr-2">{number}</span>{title}
      </h2>
    </div>
    <div className="mt-1 h-px w-24 bg-primary/30" />
    <div className="mt-6 space-y-4">{children}</div>
  </motion.section>
);

const CodeBlock = ({ title, children }: { title: string; children: string }) => (
  <div className="border border-border bg-secondary/30 overflow-x-auto">
    <div className="border-b border-border px-4 py-2">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{title}</span>
    </div>
    <pre className="p-4 text-xs leading-relaxed text-foreground/80 whitespace-pre-wrap break-words">
      <code>{children}</code>
    </pre>
  </div>
);

const Note = ({ type, children }: { type: "info" | "warning"; children: React.ReactNode }) => (
  <div className={`border-l-2 p-4 text-xs leading-relaxed ${
    type === "warning" ? "border-destructive/50 bg-destructive/5 text-destructive" : "border-primary/50 bg-primary/5 text-muted-foreground"
  }`}>
    {children}
  </div>
);

const InfoBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border border-primary/30 bg-primary/5 p-4">
    <p className="font-display text-[10px] font-bold uppercase tracking-widest text-primary">{title}</p>
    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{children}</p>
  </div>
);

const Checklist = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
        <span className="mt-0.5 text-primary/60">☐</span>
        {item}
      </li>
    ))}
  </ul>
);

export default ResearchReport;
