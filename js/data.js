const PORTFOLIO_DATA = {
  profile: {
    name: "Sriram S",
    degree: "B.E. Computer Science & Engineering",
    year: "2nd Year",
    college: "Sri Ramakrishna Institute of Technology (SriIT)",
    status: "Seeking Internship Opportunities",
    badge: "Available for Summer / Fall Internships 2026",
    tagline: "AI/ML • IOT • FULL-STACK",
    bio: "Passionate engineer architecting resilient AI systems, geospatial intelligence platforms, and high-performance full-stack architectures. Driven by solving mission-critical real-world challenges—from satellite-based maritime spill attribution to enterprise AI agent red-teaming and custom storage engines.",
    location: "Coimbatore / Remote, India",
    links: {
      github: "https://github.com/srixram08",
      linkedin: "https://www.linkedin.com/in/sriram-s-3a52aa382/",
      email: "sriram082008s@gmail.com"
    },
    stats: [
      { label: "Major Projects", value: "10+" },
      { label: "Hackathons & Challenges", value: "9+" },
      { label: "Certifications", value: "8+" },
      { label: "Core Competencies", value: "15+" }
    ]
  },

  skills: [
    {
      category: "AI & Machine Learning",
      icon: "brain-circuit",
      color: "#000000",
      items: [
        "Artificial Intelligence", "Machine Learning", "Computer Vision", 
        "Predictive Analytics", "Generative AI", "AI Agent Security", 
        "Fraud Detection", "Anomaly Detection"
      ]
    },
    {
      category: "IoT & Hardware Systems",
      icon: "cpu",
      color: "#000000",
      items: [
        "ESP32", "Arduino UNO", "Arduino Mega", "Embedded Sensors", 
        "ThingSpeak Cloud", "Wokwi Simulation", "Edge AI"
      ]
    },
    {
      category: "Full-Stack Development",
      icon: "layers",
      color: "#000000",
      items: [
        "React", "React Native", "Node.js", "Express.js", 
        "REST APIs", "Vite", "Axios", "Expo"
      ]
    },
    {
      category: "Space & Geospatial Tech",
      icon: "satellite",
      color: "#000000",
      items: [
        "Satellite Imagery Processing", "AIS Vessel Telemetry", "GIS & Spatial Analytics", 
        "Geospatial Intelligence", "Spatiotemporal Graph Analysis", 
        "Ocean Current Modelling", "Vessel Route Reconstruction"
      ]
    },
    {
      category: "Cybersecurity & Agent Safety",
      icon: "shield-alert",
      color: "#000000",
      items: [
        "AI Agent Red Teaming", "Attack Surface Analysis", "Account Takeover Detection", 
        "SIM-Swap Fraud Detection", "Security Monitoring", "Automated Guardrails"
      ]
    },
    {
      category: "Databases & Storage Engines",
      icon: "database",
      color: "#000000",
      items: [
        "PostgreSQL", "MongoDB", "Prisma ORM", "Custom Bitcask Storage Engine", 
        "Log-Structured Append", "Keydir Hash Indexing", "MongoDB Atlas"
      ]
    },
    {
      category: "Cloud, DevOps & Observability",
      icon: "cloud",
      color: "#000000",
      items: [
        "Git", "GitHub", "Vercel", "Render", "Railway", 
        "Netlify", "Heroku", "OpenTelemetry"
      ]
    },
    {
      category: "Programming & Blockchain",
      icon: "code-2",
      color: "#000000",
      items: [
        "C", "C++", "Python", "JavaScript", 
        "Algorand Blockchain", "x402 Protocol", "Digital Twins"
      ]
    }
  ],

  projects: [
    {
      id: "tracex",
      title: "TraceX",
      subtitle: "AI-Powered Maritime Satellite Oil Spill Intelligence & Source Attribution",
      domain: "Space Technology / AI / Geospatial Intelligence",
      category: "space-ai",
      featured: true,
      badge: "SIH 2026 • NTRO Problem SIH26143",
      heroIcon: "satellite",
      glowColor: "black",
      problem: "Identifying rogue marine vessels responsible for clandestine offshore oil spills from raw satellite imagery while accounting for dynamic oceanic drift.",
      solution: "TraceX is an end-to-end maritime intelligence platform combining high-resolution satellite imagery, AIS vessel trajectories, dynamic ocean currents, wind vectors, and physics-based simulations to reverse-engineer oil spills to their exact vessel origin.",
      innovation: "✨ Rewind the Ocean: Instead of merely detecting slick extents, TraceX computes reverse hydrodynamic advection to reconstruct the slick origin in space and time, subsequently ranking vessels by spatio-temporal proximity and trajectory anomalies.",
      features: [
        "🛰️ Satellite-based Computer Vision Oil Spill Detection",
        "🚢 Continuous AIS Vessel Trajectory Tracking & Anomaly Extraction",
        "🌊 Dynamic Ocean-Current & Wind Drift Physics Modeling",
        "🔙 'Rewind the Ocean' Backward Advection Origin Reconstruction",
        "📍 Probable Spill Source Geolocation & Timestamp Estimation",
        "📊 Multi-factor Vessel Risk Ranking & Responsibility Score",
        "🕸️ Spatiotemporal Graph Correlation Network",
        "🔬 Counterfactual Hydrodynamic Spill Simulation",
        "🧠 Explainable Forensic Investigation Reports for Maritime Authorities"
      ],
      techStack: ["Computer Vision", "Satellite Imagery", "GIS", "AIS Telemetry", "Geospatial AI", "Graph Analysis", "Hydrodynamic Modeling", "Python", "React", "Vite"],
      architecture: "Satellite Ingestion → CV Slick Segmentation → Reverse Ocean Current Drift Model ('Rewind the Ocean') → Spatiotemporal Graph Correlator (AIS) → Vessel Attribution Engine",
      links: {
        github: "https://github.com/srixram08"
      }
    },
    {
      id: "trustforge",
      title: "TrustForge",
      subtitle: "Enterprise AI Agent Red Teaming & Behavioral Security Platform",
      domain: "AI Security / Cybersecurity / Enterprise AI",
      category: "cybersecurity",
      featured: true,
      badge: "Build with Bharat 2.0 • AI Red Teaming",
      heroIcon: "shield-alert",
      glowColor: "black",
      problem: "Autonomous AI agents with tool-calling capabilities can execute destructive state changes in production environments without conventional guardrails catching the breach.",
      solution: "TrustForge sandboxes and subjects autonomous agents to exhaustive adversarial red-teaming simulations across tool executions before deployment to prevent real-world catastrophic failure.",
      innovation: "Synthetic Tool Digital Twins with dynamic DNA mapping that intercept tool calls, compute failure graphs, and auto-generate mutual evaluation guardrails in real-time.",
      features: [
        "🛡️ Automated AI Agent Red Teaming & Jailbreak Probing",
        "🔍 Attack Surface Discovery across Registered Agent Tools",
        "🧬 Digital Twin Environment Generation for Safe Exploitation",
        "⚡ Adversarial Multi-Turn Tool Call Simulation",
        "🕸️ Interactive Failure Graph Visualization",
        "🛑 Automated Runtime Guardrail Code Generation",
        "⚖️ Mutual Evaluation Guard (Multi-LLM Arbiter)",
        "🔌 Universal Tool Adapter with OpenTelemetry Observability"
      ],
      techStack: ["AI Red Teaming", "OpenTelemetry", "Digital Twins", "Python", "Dynamic DNA", "Synthetic APIs", "Adversarial Simulation", "Graph Visualizer"],
      architecture: "AI Agent → Decision Engine → Tool Call Interceptor → Digital Twin Sandbox → State Change Evaluation → Failure Graph → Dynamic Guardrail Synthesis",
      links: {
        demo: "https://trustforge-um86.onrender.com/",
        github: "https://github.com/srixram08/TrustForge"
      }
    },
    {
      id: "revivex",
      title: "ReviveX",
      subtitle: "AI-Driven Self-Healing & Fault-Tolerant Examination Platform",
      domain: "AI/ML + EdTech + Resilient Systems",
      category: "space-ai",
      featured: true,
      badge: "Self-Healing Architecture • 100Hz Telemetry",
      heroIcon: "refresh-cw",
      glowColor: "black",
      problem: "High-stakes online exams suffer from devastating candidate loss due to abrupt network disconnects, browser crashes, or hardware glitches.",
      solution: "A resilient distributed examination platform that predicts client-side instability at 100Hz and orchestrates continuous autonomous rollbacks to verified cryptographic checkpoints without data loss.",
      innovation: "Shadow Session Digital Twin paired with SHA-256 state hashing and explainable rollback engine, maintaining uninterrupted exam state across fatal failures.",
      features: [
        "⚡ 100Hz Predictive Telemetry for Pre-emptive Crash Detection",
        "💾 Continuous State Capture with SHA-256 Integrity Verification",
        "🔄 Adaptive Checkpointing with Zero Candidate Latency",
        "👥 Digital Twin / Shadow Session Mirroring",
        "⏪ Autonomous Explainable Rollback Engine",
        "📡 Edge-Synchronized Offline-Resilient Local Storage",
        "📊 Dual Real-Time Monitoring Dashboards for Proctors & Systems"
      ],
      techStack: ["AI/ML Predictive Telemetry", "SHA-256 State Hashing", "WebSockets", "Digital Twin", "Distributed State", "Node.js", "React"],
      architecture: "Client Telemetry Stream (100Hz) → ML Failure Predictor → Edge Checkpoint Cache → SHA-256 Hash Ring → Autonomous Rollback Orchestrator",
      links: {
        github: "https://github.com/srixram08/Team7"
      }
    },
    {
      id: "sentinelx",
      title: "SENTINELX",
      subtitle: "Next-Gen SIM-Swap & Account-Takeover Fraud Detection Engine",
      domain: "Cybersecurity / AI Fraud Detection",
      category: "cybersecurity",
      featured: true,
      badge: "OMNIKON National Hackathon 2026 • Team Hack Jacks",
      heroIcon: "user-x",
      glowColor: "black",
      problem: "Sophisticated telecom-layer attacks like SIM swapping bypass 2FA and result in catastrophic account takeover within minutes.",
      solution: "SENTINELX analyses multi-dimensional behavioral biometrics, IMSI churn anomalies, and velocity signals to detect and neutralize account-takeover attempts before funds or data are exfiltrated.",
      innovation: "Cross-correlating telecom carrier signaling changes with sudden user-agent and session velocity spikes into a real-time risk coefficient score.",
      features: [
        "🚨 Telecom IMSI / SIM-Swap Anomaly Detection",
        "🛡️ Multi-factor Account Takeover (ATO) Prevention",
        "📈 Real-time Behavioral Biometrics Velocity Engine",
        "🔍 Session Hijack & Token Replay Interception",
        "📊 Risk Coefficient Scoring Dashboard",
        "⚡ Instant Step-Up Authentication Triggers"
      ],
      techStack: ["Cybersecurity", "Anomaly Detection", "Behavioral Analysis", "Python", "FastAPI", "React", "Machine Learning"],
      architecture: "Carrier Signal Stream + Device Telemetry → Feature Extractor → Ensembled Anomaly Detector → Step-up Auth Trigger",
      links: {
        demo: "https://sentinelx-frontend-zeta.vercel.app/",
        github: "https://github.com/srixram08"
      }
    },
    {
      id: "crimevision-ai",
      title: "CrimeVision AI",
      subtitle: "Predictive Smart City Crime Analysis & Geospatial Intelligence Dashboard",
      domain: "AI/ML + Smart City + Geospatial",
      category: "space-ai",
      featured: false,
      badge: "Live Deployment • Open Source",
      heroIcon: "crosshair",
      glowColor: "black",
      problem: "Municipal law enforcement lack actionable predictive geospatial insights to allocate patrol units effectively across high-risk urban sectors.",
      solution: "An interactive, AI-driven crime surveillance and analytics platform that ingests historical incident datasets to predict hotspot clusters and visualize spatio-temporal crime patterns.",
      innovation: "Interactive geospatial heatmaps combined with time-series crime forecasting models for smart city safety planning.",
      features: [
        "🗺️ High-Resolution Geospatial Crime Hotspot Heatmapping",
        "📈 Predictive Crime Trend Forecasting Models",
        "📊 Interactive Multi-Attribute Crime Filter Dashboard",
        "🚨 Zone-based Risk Factor Scoring for Patrol Optimization",
        "🌐 Fully Responsive Production Web Deployment"
      ],
      techStack: ["AI/ML", "Predictive Analytics", "Leaflet/GIS", "React", "Node.js", "Express", "Vercel"],
      architecture: "Historical Incident Records → Spatial Clustering (DBSCAN) → Time-Series Trend Engine → Leaflet Geospatial UI",
      links: {
        demo: "https://crimevision-ai-chi.vercel.app/",
        github: "https://github.com/srixram08/crimevision-AI"
      }
    },
    {
      id: "inventra-erp",
      title: "Inventra ERP",
      subtitle: "AI-Powered Enterprise Inventory & Sales Management Suite",
      domain: "Full-Stack Development + Business Intelligence",
      category: "fullstack",
      featured: false,
      badge: "PostgreSQL • Prisma ORM • Recharts",
      heroIcon: "package",
      glowColor: "black",
      problem: "Small-to-midsize businesses struggle with fragmented stock management, untracked inventory leakage, and delayed revenue forecasting.",
      solution: "Inventra is a robust, full-stack ERP web suite offering real-time stock telemetry, automated reorder triggers, role-based access control, and rich financial charts.",
      innovation: "Integrated predictive replenishment engine coupled with automated ledger reconciliation and JWT-secured microservices.",
      features: [
        "📦 Dynamic SKU Inventory & Warehouse Tracking",
        "📊 Real-time Sales Pipeline & Revenue Analytics with Recharts",
        "🔒 Enterprise JWT & Bcrypt Authentication & RBAC",
        "⚡ Type-Safe PostgreSQL Database Layer with Prisma ORM",
        "📉 Stock Outage Alerts & Re-order Automation"
      ],
      techStack: ["React", "Vite", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "Bcrypt", "Axios", "Recharts"],
      architecture: "React Single Page App → Express REST APIs (JWT Protected) → Prisma ORM → PostgreSQL Instance",
      links: {
        demo: "https://inventra-idey.onrender.com/",
        github: "https://github.com/srixram08"
      }
    },
    {
      id: "forcedb",
      title: "ForgeDB / Vector Engine",
      subtitle: "High-Throughput Bitcask-Inspired Log-Structured Storage & Vector Engine",
      domain: "Systems / Database & Vector Engineering",
      category: "fullstack",
      featured: true,
      badge: "Bitcask Architecture • Vector Engine",
      heroIcon: "database",
      glowColor: "black",
      problem: "Standard relational stores incur severe write amplification and lock contention under append-heavy ingest workloads.",
      solution: "ForgeDB is a custom-engineered key-value storage and vector processing engine modeled after Riak's Bitcask architecture, delivering O(1) reads and blazingly fast sequential append-only writes.",
      innovation: "In-memory Keydir hash map indexing directly into immutable append-only data segment files with background compaction and merge routines.",
      features: [
        "⚡ O(1) Disk Read Latency via In-Memory Keydir Hash Index",
        "✍️ Append-Only Immutable Log File Storage Design",
        "🧹 Background Segment Merging & Dead-Record Compaction",
        "💻 Interactive CLI / REPL Query Interface",
        "🛡️ CRC32 Checksums for File Corruption Recovery"
      ],
      techStack: ["C / C++", "Systems Programming", "Bitcask Architecture", "Hash Indexing", "Log-Structured Append", "REPL Engine"],
      architecture: "CLI / REPL → Query Parser → Keydir Index (Memory) → Active Data Segment Append (Disk) → Background Merge Daemon",
      links: {
        demo: "https://vector-4cde.onrender.com/",
        github: "https://github.com/srixram08"
      }
    },
    {
      id: "lumora-analytics",
      title: "Lumora Analytics",
      subtitle: "Interactive Multi-Dimensional Business Intelligence Platform",
      domain: "Data Analytics / Business Intelligence",
      category: "fullstack",
      featured: false,
      badge: "Data Visualization • BI Dashboard",
      heroIcon: "bar-chart-3",
      glowColor: "black",
      problem: "Decision-makers require intuitive, low-latency visual breakdown of cross-department metrics without complex SQL querying.",
      solution: "Lumora delivers a responsive, modular BI workspace featuring interactive drag-and-drop metric boards, dynamic aggregations, and exportable executive reports.",
      innovation: "Client-side aggregation pipelines that render instant visual insights across millions of data points smoothly.",
      features: [
        "📊 Dynamic Multi-Metric Visualization Dashboards",
        "⚡ Real-Time Data Filtering & Slicing",
        "📈 KPI Trend Forecasting & Anomaly Flags",
        "📤 High-Fidelity PDF & CSV Analytical Exporting"
      ],
      techStack: ["JavaScript", "Data Visualization", "Chart.js", "React", "REST APIs", "Modern CSS"],
      architecture: "Raw Metrics Ingestion → Client Aggregator Pipeline → Modular Chart Widgets → Executive Presentation Layer",
      links: {
        demo: "https://lumora-ai-navy.vercel.app/",
        github: "https://github.com/srixram08"
      }
    },
    {
      id: "smart-energy-iot",
      title: "Smart Energy Monitoring System",
      subtitle: "Cloud-Connected Real-Time Power Telemetry & Conservation Platform",
      domain: "IoT / Energy Management / Smart Grid",
      category: "iot",
      featured: false,
      badge: "ESP32 • ThingSpeak Cloud",
      heroIcon: "zap",
      glowColor: "black",
      problem: "Undetected industrial vampire power draw and phase imbalances cause substantial energy waste and electrical hazard risks.",
      solution: "An ESP32-powered edge monitoring system measuring voltage, current, and power factor with live telemetry streamed to ThingSpeak cloud analytics.",
      innovation: "Edge-based anomaly threshold calculation notifying facility managers of erratic surge conditions within milliseconds.",
      features: [
        "⚡ High-Precision Current & Voltage Sensor Telemetry",
        "📡 Real-Time IoT Cloud Telemetry Sync with ThingSpeak",
        "🚨 Threshold Surge Alarm & Notification Triggers",
        "📊 Historical Consumption & Peak Usage Analytics"
      ],
      techStack: ["ESP32 Microcontroller", "ThingSpeak IoT Cloud", "C++ / Arduino", "Current Sensors", "REST Telemetry"],
      architecture: "Analog Sensor Array → ESP32 Edge Processor (Calibration) → ThingSpeak REST API → Cloud Analytics Dashboard",
      links: {
        github: "https://github.com/srixram08"
      }
    },
    {
      id: "copymate-app",
      title: "Copymate",
      subtitle: "Cross-Platform Mobile Developer Clipboard & Productivity Hub",
      domain: "Mobile Application Development",
      category: "iot",
      featured: false,
      badge: "React Native • Expo",
      heroIcon: "smartphone",
      glowColor: "black",
      problem: "Developers and creators lose crucial code snippets, URLs, and text notes when switching contexts across mobile sessions.",
      solution: "Copymate is a sleek, gesture-driven mobile clipboard manager offering categorized historical clips, instant search, and encrypted local storage.",
      innovation: "Zero-latency quick drawer overlay with markdown preview and smart syntax highlighting for code snippets.",
      features: [
        "📱 Native Smooth Cross-Platform UX with Expo & React Native",
        "📋 Categorized Snippet & Clipboard History Storage",
        "🔍 Instant Fuzzy Filter & Search",
        "🌙 Dark Neon Cyber-Themed Mobile Design"
      ],
      techStack: ["React Native", "Expo", "JavaScript", "AsyncStorage", "Mobile UI Design"],
      architecture: "React Native UI Layer → Redux/Context Store → AsyncStorage Secure Device Persistence",
      links: {
        github: "https://github.com/srixram08/Copymate"
      }
    }
  ],

  hackathons: [
    {
      title: "Smart India Hackathon 2026 (SIH 2026)",
      project: "TraceX",
      role: "Lead Architect / AI & Geospatial Specialist",
      problemId: "SIH26143",
      organization: "National Technical Research Organisation (NTRO)",
      domain: "Space Technology / AI / Geospatial",
      summary: "Engineered satellite-based oil spill detection and 'Rewind the Ocean' hydrodynamic origin reconstruction correlated with AIS vessel trajectories.",
      icon: "satellite"
    },
    {
      title: "OMNIKON National Hackathon 2026",
      project: "SENTINELX",
      role: "Core Developer (Team: Hack Jacks)",
      problemId: "Omni_CyberTech_8",
      organization: "OMNIKON",
      domain: "Cybersecurity / AI",
      summary: "Built real-time SIM-Swap and Account-Takeover anomaly detection system analyzing velocity patterns and carrier signaling.",
      icon: "shield-alert"
    },
    {
      title: "Build with Bharat 2.0",
      project: "TrustForge",
      role: "Security & AI Developer",
      problemId: "AI Agent Security Track",
      organization: "Build with Bharat",
      domain: "Enterprise AI Agent Security",
      summary: "Pioneered automated tool-call red-teaming, failure graph synthesis, and dynamic guardrails to safeguard autonomous agents.",
      icon: "shield"
    },
    {
      title: "HackIndia Spark 9 — SRM Chennai",
      project: "Nexus AI",
      role: "Participant & Prototype Developer",
      problemId: "Open Innovation Track",
      organization: "SRM University, Chennai",
      domain: "AI / Next-Gen Systems",
      summary: "Prototyped and presented intelligent collaborative agent framework under intense 24h sprint conditions.",
      icon: "zap"
    },
    {
      title: "Datathon 2026",
      project: "Predictive Analytics & Modelling",
      role: "Team: Digital Innovator",
      problemId: "Data Track",
      organization: "National Datathon League",
      domain: "Data Analytics & ML",
      status: "Shortlisted",
      summary: "Shortlisted among top national finalists for predictive feature modeling and high-accuracy trend classification.",
      icon: "bar-chart-2"
    },
    {
      title: "Adobe University Hackathon 2026",
      project: "Brand Visibility Proctored Case Study",
      role: "Individual Competitor",
      problemId: "Brand Visibility Case Study",
      organization: "Adobe Systems",
      domain: "Product & Analytics",
      summary: "Evaluated complex proctored case study scenarios on brand resonance, user journeys, and data-driven visibility.",
      icon: "layout"
    },
    {
      title: "Algorand / x402 Hackathon Exploration",
      project: "x402 Micropayment Protocol & AVM",
      role: "Web3 / Blockchain Explorer",
      problemId: "x402 Facilitator Integration",
      organization: "Algorand Ecosystem / GoPlausible",
      domain: "Blockchain / Web3",
      summary: "Explored x402 payment protocol integration, Algorand Testnet smart contracts, and @x402-avm payment channels.",
      icon: "link"
    },
    {
      title: "SustainabilityHackathon 2026",
      project: "Eco-Tech Innovation",
      role: "Participant",
      problemId: "Green Tech Track",
      organization: "IIT Bombay",
      domain: "Sustainability & IoT",
      summary: "Ideated sensor-driven automated resource recycling and energy footprint minimization.",
      icon: "leaf"
    },
    {
      title: "HBTM — IIIT Pune",
      project: "Advanced Hackathon Challenge",
      role: "Registered Competitor",
      problemId: "National Level Hackathon",
      organization: "IIIT Pune",
      domain: "Algorithms & AI",
      summary: "Competitive engineering solving advanced algorithmic and architectural challenges.",
      icon: "award"
    }
  ],

  certifications: [
    {
      title: "IBM Enterprise Design Thinking Practitioner",
      issuer: "IBM",
      category: "Architecture & Design",
      icon: "award",
      badge: "Verified Practitioner"
    },
    {
      title: "HackerRank Python (Basic) Certified",
      issuer: "HackerRank",
      category: "Programming Mastery",
      icon: "code",
      badge: "Gold Standard"
    },
    {
      title: "MongoDB Skill-a-thon (5 Badges)",
      issuer: "MongoDB University",
      category: "Databases & Cloud",
      icon: "database",
      badge: "5 Badges Awarded"
    },
    {
      title: "SRM Chennai Hackathon Participation",
      issuer: "SRM University Chennai",
      category: "Hackathon Excellence",
      icon: "medal",
      badge: "National Competitor"
    },
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      category: "Data & Telemetry",
      icon: "trending-up",
      badge: "Certified Specialist"
    },
    {
      title: "SWAYAM / NPTEL Learning Courses",
      issuer: "Ministry of Education, Govt. of India",
      category: "Core Computer Science",
      icon: "book-open",
      badge: "Academic Honor"
    },
    {
      title: "MathWorks Certified Learning",
      issuer: "MathWorks",
      category: "Computational Engineering",
      icon: "cpu",
      badge: "Simulation Skills"
    },
    {
      title: "Infosys Springboard Accreditations",
      issuer: "Infosys",
      category: "Enterprise Software",
      icon: "check-circle-2",
      badge: "Verified Credentials"
    }
  ]
};
