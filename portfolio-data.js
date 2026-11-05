window.PORTFOLIO_DATA = {
  profile: {
    name: "Cassandra Dsouza",
    role: "Cybersecurity, GRC & IT Operations",
    location: "Ontario, Canada",
    intro: "I turn security requirements, technical evidence, and operational needs into clear decisions, practical documentation, and support people can use.",
    github: "https://github.com/Cassandra-3",
    linkedin: "https://www.linkedin.com/in/cassandradsouza54a784168/"
  },

  domains: [
    { id: "grc", label: "GRC", short: "Governance, risk & compliance" },
    { id: "incident-response", label: "Incident response", short: "Playbooks, escalation & coordination" },
    { id: "detection", label: "Detection", short: "Monitoring, telemetry & triage" },
    { id: "forensics", label: "Forensics", short: "Evidence, timelines & investigation" },
    { id: "vulnerability-management", label: "Vulnerability management", short: "Scanning, CVSS & prioritization" },
    { id: "it-operations", label: "IT operations", short: "Support, systems & service delivery" },
    { id: "automation", label: "Automation", short: "Python, Bash & repeatable workflows" }
  ],

  projects: [
    {
      id: "secure-architecture",
      title: "Secure Architecture Assessment",
      status: "published",
      type: "Individual academic design",
      completed: "2024",
      summary: "A NIST CSF 2.0-aligned current-state assessment, layered target architecture, gap analysis, and phased 12-month roadmap for a fictional organization.",
      scope: "Architecture assessment and recommendation design — not a production implementation.",
      contribution: "Cassandra assessed the supplied scenario, mapped current-to-target gaps, designed a vendor-neutral target architecture, and translated recommendations into a risk-based roadmap.",
      evidence: ["Architecture diagram", "NIST CSF 2.0 mapping", "Gap analysis", "12-month roadmap", "Success measures"],
      tools: ["NIST CSF 2.0", "Security architecture", "IAM", "Network segmentation"],
      domains: ["grc", "detection"],
      github: "https://github.com/Cassandra-3/Secure-Architecture-Assessment-and-Recommendations",
      accent: "violet"
    },
    {
      id: "box-ir",
      title: "Box Manufacturing Incident Response",
      status: "published",
      type: "Individual academic project",
      completed: "2024",
      summary: "A five-stage incident-response workflow for a fictional manufacturer working with an MSSP, exercised through a lost-endpoint scenario.",
      scope: "Process and documentation design — not a live response or SOC deployment.",
      contribution: "Cassandra designed the workflow, escalation logic, stakeholder responsibilities, evidence-handling expectations, response checklist, and audience-specific communications.",
      evidence: ["Five-stage workflow", "Escalation criteria", "Role map", "Communication templates", "Response checklist"],
      tools: ["NIST incident guidance", "CISA playbooks", "Endpoint response", "IoT risk"],
      domains: ["incident-response", "grc"],
      github: "https://github.com/Cassandra-3/Incident-Response-Workflow-Playbook-for-Box-Manufacturing-MSSP",
      accent: "coral"
    },
    {
      id: "sensor-design",
      title: "Security Monitoring Sensor Design",
      status: "published",
      type: "Individual academic design",
      completed: "2024",
      summary: "Seven monitoring domains translated into detection hypotheses, threshold logic, context requirements, false-positive analysis, playbooks, and a tuning lifecycle.",
      scope: "Monitoring and detection design — live production deployment and measured detection effectiveness are not claimed.",
      contribution: "Cassandra documented alert hypotheses for HTTP, MySQL, SSH, endpoint health, file integrity, Windows events, and network flows, with validation and tuning requirements.",
      evidence: ["Seven-domain catalogue", "Threshold hypotheses", "False-positive analysis", "Response playbooks", "Tuning guide"],
      tools: ["Detection engineering", "Telemetry analysis", "Alert tuning", "Triage design"],
      domains: ["detection", "incident-response"],
      github: "https://github.com/Cassandra-3/Security-Monitoring-Sensor-Design",
      accent: "cyan"
    },
    {
      id: "szechuan-forensics",
      title: "The Stolen Szechuan Sauce",
      status: "published",
      type: "Team academic investigation",
      completed: "January 2025",
      summary: "A digital-forensics investigation of public DFIR Madness training artifacts spanning disk, registry, network, memory, and persistence evidence.",
      scope: "Public training artifacts — not a live client incident. Team conclusions are distinguished from Cassandra's DC01/server workstream.",
      contribution: "Cassandra led the DC01/server workstream: disk-image examination, OS verification, registry extraction, time-zone and TCP/IP analysis, RDP investigation, server-side coreupdater.exe analysis, methodology, integration, and conclusion.",
      evidence: ["Structured report", "Evidence matrix", "DC01 disk analysis", "Registry findings", "RDP traffic analysis"],
      tools: ["Autopsy", "FTK Imager", "Registry Explorer", "Wireshark"],
      domains: ["forensics", "incident-response"],
      github: "https://github.com/Cassandra-3/Forensics-Report-Stolen-Szechuan-Sauce",
      accent: "lime"
    },
    {
      id: "cats-vulnerability",
      title: "Cat's Company Vulnerability Assessment",
      status: "published",
      type: "Individual academic assessment",
      completed: "Cybersecurity diploma project",
      summary: "A simulated-environment vulnerability assessment that turns scan findings into CVSS-informed priorities and an executive-facing remediation report.",
      scope: "Academic assessment in a simulated environment — production remediation and patch deployment were outside scope.",
      contribution: "Cassandra analyzed Greenbone/OpenVAS results, researched vulnerabilities, interpreted CVSS scores, evaluated impact, prioritized findings, and prepared the report.",
      evidence: ["Scan analysis", "CVSS assessment", "Risk prioritization", "Remediation recommendations", "Executive report"],
      tools: ["Greenbone / OpenVAS", "CVSS", "NIST resources", "MITRE resources"],
      domains: ["vulnerability-management", "grc"],
      github: "https://github.com/Cassandra-3/Cats-Company-Vulnerabilities",
      accent: "amber"
    },
    {
      id: "log-monitoring-v1",
      title: "Log Monitoring & Alert Automation",
      status: "published",
      type: "Individual academic scripting project",
      completed: "Version 1",
      summary: "Python and Bash scripts that collect Apache access logs and surface HTTP 404/500 entries and requests from unrecognized IP addresses.",
      scope: "A reproducible starting point with explicit limitations; no scheduling, notifications, automated response, or production validation is claimed.",
      contribution: "Cassandra implemented the Bash collection flow and Python line-by-line analysis, including file checks, regex IP extraction, known-address comparison, and terminal output.",
      evidence: ["Python analyzer", "Bash collector", "Apache log workflow", "Explicit limitations", "Published source"],
      tools: ["Python 3", "Bash", "Linux", "Apache", "Regex"],
      domains: ["detection", "automation"],
      github: "https://github.com/Cassandra-3/Log-Monitoring-Alert-Automation",
      accent: "cyan"
    },
    {
      id: "premium-house-lights",
      title: "Tracing the Attack — Premium House Lights",
      status: "published",
      type: "Academic investigation",
      completed: "Published case study",
      summary: "A repository-based breach investigation reconstructing an attack path through web, network, memory, and system evidence.",
      scope: "The public repository documents the investigation; individual contribution details are not separated, so this portfolio does not assign every finding to Cassandra personally.",
      contribution: "Evidence is presented at repository level: attack-path reconstruction, forensic analysis, and remediation recommendations.",
      evidence: ["Attack-path timeline", "Web log evidence", "Network evidence", "Memory evidence", "Recommendations"],
      tools: ["Autopsy", "Volatility", "Wireshark", "Linux CLI", "Log analysis"],
      domains: ["forensics", "incident-response"],
      github: "https://github.com/Cassandra-3/Tracing-the-Attack-Data-Breach-Analysis-at-Premium-House-Lights",
      accent: "lime"
    },
    {
      id: "risk-plan",
      title: "Risk Management Plan",
      status: "published",
      type: "Individual academic project",
      completed: "Published case study",
      summary: "A fictional-organization risk plan covering identification, likelihood and impact scoring, the CIA triad, risk treatment, and mitigation planning.",
      scope: "Academic planning artifact. Recommendations are treated as designs, not proof of production implementation.",
      contribution: "Cassandra structured the risk scenarios, scoring approach, treatment options, and proposed mitigation plan.",
      evidence: ["Risk register", "Likelihood / impact scoring", "CIA mapping", "Treatment plan", "Mitigation roadmap"],
      tools: ["NIST RMF", "ISO 31000", "Risk analysis", "Treatment planning"],
      domains: ["grc"],
      github: "https://github.com/Cassandra-3/Risk-Management-Plan",
      accent: "violet"
    },
    {
      id: "policy-integration",
      title: "Incident Response & Policy Integration",
      status: "published",
      type: "Academic design project",
      completed: "Published case study",
      summary: "A fictional ransomware playbook connected to malware response, data-breach management, and log-retention policy outlines.",
      scope: "Educational and fictional. The repository documents a policy/playbook relationship, not deployment or legal assurance.",
      contribution: "The design links response stages, policy expectations, responsibilities, communications, and post-incident review.",
      evidence: ["Ransomware playbook", "Three policy outlines", "Communication plan", "Responsibility model", "Training slides"],
      tools: ["Incident governance", "Policy design", "Ransomware response", "Communication planning"],
      domains: ["grc", "incident-response"],
      github: "https://github.com/Cassandra-3/Incident-Response-and-Policy-Integration-Framework",
      accent: "coral"
    },
    {
      id: "greeting-system",
      title: "Interactive Greeting System",
      status: "published",
      type: "Team academic capstone",
      completed: "2021 · First Prize Overall",
      summary: "A two-kiosk campus assistance system combining motion sensing, optional facial recognition, location search, web interfaces, and scheduled synchronization.",
      scope: "Team project. Voice recognition was built by another teammate; the original source code is not currently published in the repository.",
      contribution: "Cassandra developed facial-recognition support, registration, PIR input handling, location search, Flask/Jinja integration, and contributed to cron synchronization, integration, and testing.",
      evidence: ["Project documentation", "Demonstration video link", "Contribution breakdown", "System architecture", "Recognition record"],
      tools: ["Python", "Flask", "Jinja", "Linux", "PIR sensors", "Cron"],
      domains: ["it-operations", "automation"],
      github: "https://github.com/Cassandra-3/Interactive_greeting_system",
      accent: "amber"
    },
    {
      id: "log-monitoring-v2",
      title: "Log Monitoring & Alert Automation — Version 2",
      status: "planned",
      type: "Planned individual project",
      completed: "Not yet completed",
      summary: "A planned upgrade to Version 1 with configurable rules, structured output, test fixtures, incremental processing, rotation handling, scheduling examples, and automated quality checks.",
      scope: "Planned work only — excluded from demonstrated-skills claims until implementation evidence is published.",
      contribution: "Intended learning: production-style Python structure, testing, configuration, state handling, alert quality, Bash hardening, and continuous integration.",
      evidence: ["Planned: configuration", "Planned: JSON / CSV output", "Planned: automated tests", "Planned: scheduling", "Planned: CI"],
      tools: ["Python", "Bash", "Testing", "CI"],
      domains: ["detection", "automation"],
      github: "https://github.com/Cassandra-3/Log-Monitoring-Alert-Automation",
      accent: "cyan"
    },
    {
      id: "power-bi-grc",
      title: "Power BI — GRC & Audit Readiness Dashboard",
      status: "planned",
      type: "Planned individual project",
      completed: "Not yet completed",
      summary: "A planned dashboard using synthetic data to explore control ownership, evidence collection, remediation, exceptions, vendor risk, and policy-review dates.",
      scope: "Planned learning project using synthetic data — not professional dashboard experience.",
      contribution: "Intended learning: Power Query, data modelling, DAX, KPI design, drill-through reporting, audit metrics, and executive dashboard communication.",
      evidence: ["Planned: synthetic dataset", "Planned: evidence status", "Planned: remediation view", "Planned: vendor risk", "Planned: policy dates"],
      tools: ["Power BI", "Power Query", "DAX", "Data modelling"],
      domains: ["grc", "automation"],
      github: "https://github.com/Cassandra-3/cassandras-portfolio#power-bi--grc-and-audit-readiness-dashboard",
      accent: "violet"
    },
    {
      id: "tableau-service-desk",
      title: "Tableau — IT Service Desk Dashboard",
      status: "planned",
      type: "Planned individual project",
      completed: "Not yet completed",
      summary: "A planned dashboard using synthetic service-desk data to explore volume, backlog, priority, category, resolution time, escalation, and customer satisfaction.",
      scope: "Planned learning project using synthetic data — not professional Tableau experience.",
      contribution: "Intended learning: data preparation, calculated fields, parameters, filters, operational KPIs, interactive dashboards, and service reporting.",
      evidence: ["Planned: synthetic ticket data", "Planned: backlog view", "Planned: resolution trends", "Planned: escalation view", "Planned: satisfaction view"],
      tools: ["Tableau", "Calculated fields", "Parameters", "Dashboard design"],
      domains: ["it-operations", "automation"],
      github: "https://github.com/Cassandra-3/cassandras-portfolio#tableau--it-service-desk-operations-dashboard",
      accent: "amber"
    }
  ],

  experience: [
    {
      title: "GRC & Audit Specialist",
      setting: "Cybersecurity technology company",
      label: "Professional experience · anonymized",
      summary: "Documentation, audit evidence, vendor risk, compliance-platform testing, and quality review at the intersection of security and operations.",
      signals: ["Policy lifecycle", "Québec Law 25 evidence", "Vendor risk", "Platform QA"],
      details: [
        "Authored and maintained policies.",
        "Collected and organized Québec Law 25 self-assessment evidence, identified missing documentation, and coordinated evidence review and approval.",
        "Supported vendor-risk work and an external Trust Center.",
        "Tested an internal compliance platform, documented defects, and retested fixes.",
        "Reviewed junior-intern work."
      ],
      note: "Employer, client identities, internal metrics, and proprietary artifacts are intentionally omitted."
    },
    {
      title: "Enterprise IT Service Desk Analyst",
      setting: "Global technology-services environment",
      label: "Professional experience · anonymized",
      summary: "Identity-aware support, remote access, sign-in guidance, and troubleshooting delivered with clear communication.",
      signals: ["Identity verification", "Approved access", "RSA support", "Remote access"],
      details: [
        "Verified users before modifying approved access rights.",
        "Supported RSA-based temporary access.",
        "Guided first-time sign-in and password changes.",
        "Provided remote-access and general troubleshooting.",
        "Received positive management feedback for communication."
      ],
      note: "No claim of account creation is made. Confidential clients are not named."
    },
    {
      title: "Technical Support Advisor",
      setting: "Confidential consumer-technology account",
      label: "Professional experience · anonymized",
      summary: "Front-line technical support across devices, software, connectivity, and accounts.",
      signals: ["Device support", "Software", "Connectivity", "Accounts", "90%+ satisfaction"],
      details: [
        "Served as the first point of contact for troubleshooting.",
        "Supported device, software, connectivity, and account issues.",
        "Maintained customer satisfaction above 90%."
      ],
      note: "The client identity and proprietary support details are intentionally omitted."
    },
    {
      title: "Informal & Occasional Technical Support",
      setting: "Local clients · active since May 2023",
      label: "Community support · compensated in kind",
      summary: "Practical, relationship-based technology help for approximately five or six recurring local clients.",
      signals: ["Migrations", "Networking", "AV equipment", "Cross-platform support", "Vendor escalation"],
      details: [
        "Supported laptops, mobile devices, migrations, networking, and audiovisual equipment.",
        "Worked across Android and Apple devices, accounts, and applications.",
        "Troubleshot issues and escalated to vendors when needed."
      ],
      note: "This is informal and occasional support, not represented as self-employment."
    }
  ],

  workPrinciples: [
    { title: "Evidence that moves", text: "Organize requirements, surface gaps, and coordinate review so evidence is ready for decisions." },
    { title: "Access with care", text: "Verify identity and authorization before supporting approved access changes." },
    { title: "Explain the path", text: "Turn technical steps into clear guidance for sign-in, remote access, devices, software, and connectivity." },
    { title: "Follow through", text: "Document issues, retest fixes, escalate when needed, and keep stakeholders informed." }
  ],

  skills: [
    { area: "Governance, risk & compliance", proof: "Framework maps, risk plans, policy work, evidence coordination", projects: ["secure-architecture", "risk-plan", "policy-integration"] },
    { area: "Incident response", proof: "Lifecycle design, escalation logic, evidence handling, communications", projects: ["box-ir", "policy-integration", "szechuan-forensics"] },
    { area: "Detection & monitoring", proof: "Seven-domain detection catalogue and log-analysis source", projects: ["sensor-design", "log-monitoring-v1"] },
    { area: "Digital forensics", proof: "Disk, registry, RDP, network, and cross-artifact analysis", projects: ["szechuan-forensics", "premium-house-lights"] },
    { area: "Vulnerability management", proof: "Greenbone/OpenVAS analysis, CVSS, prioritization, reporting", projects: ["cats-vulnerability"] },
    { area: "Programming & automation", proof: "Python, Bash, Flask/Jinja, regex, sensors, scheduled sync", projects: ["log-monitoring-v1", "greeting-system"] },
    { area: "Technical communication", proof: "Executive reports, case studies, playbooks, templates, roadmaps", projects: ["secure-architecture", "box-ir", "cats-vulnerability"] }
  ]
};
