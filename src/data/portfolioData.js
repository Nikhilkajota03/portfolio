export const personalInfo = {
  name: "Nikhil Kajota",
  role: "AI & Systems Engineer",
  location: "Bengaluru, Karnataka, India",
  phone: "+91 9413750125",
  email: "nikhil941kajota@gmail.com",
  linkedin: "https://linkedin.com/in/nikhilkajota",
  github: "https://github.com/Nikhilkajota03",
  statementTitle: "Building AI systems that reason, remember & execute safely.",
  statementDesc: "At the intersection of multi-agent orchestration, sandboxed execution, and low-latency infrastructure built for production.",
  education: {
    institution: "The LNM Institute of Information Technology",
    location: "Jaipur, India",
    degree: "Bachelor of Technology",
    period: "Aug 2020 – May 2024",
    note: "Focused on Distributed Systems, Machine Learning & Algorithms."
  }
};

export const heroPaths = [
  {
    index: "01",
    label: "Autonomous Data Governance · Safe Agent Execution",
    question: "How do you guarantee zero DB mutations?",
    anchor: "#work-data-cleaner"
  },
  {
    index: "02",
    label: "FinIntel Copilot · Hybrid Retrieval & GraphRAG",
    question: "How do you eliminate financial hallucination across PDFs?",
    anchor: "#work-finintel"
  },
  {
    index: "03",
    label: "Real-Time AI Voice · Sub-400ms Turnaround",
    question: "Where do the milliseconds go in voice pipelines?",
    anchor: "#work-voice-agent"
  }
];

export const expertisePillars = [
  {
    icon: "workflow",
    title: "Multi-Agent Systems & Orchestration",
    description: "Architecting deterministic agent flows with LangGraph, supervisor-worker topologies, self-reflective CRAG loops, and human-in-the-loop guardrails.",
    anchor: "#work"
  },
  {
    icon: "database",
    title: "GraphRAG & Hybrid Retrieval",
    description: "Combining dense vector embeddings (pgvector, Qdrant) with sparse BM25 and knowledge graph traversal (Neo4j) fused via Reciprocal Rank Fusion.",
    anchor: "#work"
  },
  {
    icon: "shield-check",
    title: "Sandboxed Infrastructure & Fast Execution",
    description: "Building air-gapped FastMCP sandboxes, AST-level SQL validation with sqlglot, atomic transaction rollback mechanisms, and sub-400ms streaming voice pipelines.",
    anchor: "#work"
  }
];

export const workExperience = [
  {
    period: "Jan 2025 — Aug 2026",
    role: "AI Engineer",
    company: "DataBlock Technologies",
    location: "Remote, India",
    isCurrent: true,
    summary: "Engineered FinIntel Copilot for a US-based hedge fund, architected secure Text-to-SQL sandboxes with AST validation, and built multi-step agentic workflows with self-reflective CRAG loops.",
    technologies: [
      "Python",
      "LangGraph",
      "FastMCP",
      "sqlglot",
      "pgvector",
      "GraphRAG",
      "BM25",
      "LangSmith",
      "FastAPI",
      "Next.js"
    ],
    responsibilities: [
      "Engineered 'FinIntel Copilot', an in-house document intelligence platform for a US-based hedge fund, combining hybrid retrieval (pgvector, BM25) and GraphRAG to process complex PDFs and PPTs, improving retrieval precision by 35% and reducing LLM hallucinations by 25%.",
      "Architected a secure Text-to-SQL engine backed by a custom FastMCP sandbox layer, utilizing 'sqlglot' AST validation and transactional rollbacks to ensure zero database mutations while cutting client data-retrieval time by 60%.",
      "Built multi-step agentic workflows and conversational dashboard chatbots using LangGraph with self-reflective CRAG (Corrective RAG) loops, increasing automated task completion rates by 35% while maintaining strict in-house data security.",
      "Integrated full-lifecycle LLM observability and evaluation pipelines using LangSmith and Langfuse, tracking latency percentiles, token consumption, and context precision."
    ]
  },
  {
    period: "July 2023 — Dec 2024",
    role: "AI Engineer",
    company: "Content Creation",
    location: "Noida, India",
    isCurrent: false,
    summary: "Developed and deployed a real-time AI voice agent integrating STT, LLM reasoning, and TTS pipelines, achieving sub-400ms latency for seamless, natural user interactions.",
    technologies: [
      "Python",
      "WebSockets",
      "Groq",
      "Redis",
      "STT / TTS",
      "FastAPI",
      "Node.js",
      "Docker"
    ],
    responsibilities: [
      "Developed and deployed a real-time AI voice agent integrating speech-to-text (STT), low-latency LLM reasoning, and text-to-speech (TTS) streaming pipelines, achieving sub-400ms end-to-end latency for seamless natural conversations.",
      "Architected backend APIs, tool-calling pipelines, and multi-turn conversation memory, connecting the voice agent with external services and increasing automated task completion rates by 35%.",
      "Implemented a Redis-based distributed caching layer for active sessions and frequent semantic requests, reducing database load by 45% and accelerating overall API response times by 50%."
    ]
  }
];

export const selectedProjects = [
  {
    id: "data-cleaner",
    categoryIndex: "01",
    categoryName: "Multi-agent governance & security",
    title: "Autonomous Data Cleaning & Governance Agent",
    headline: "Cyclical multi-agent orchestration with zero-mutation sandboxing.",
    summary: "An air-gapped autonomous multi-agent system utilizing LangGraph (Planner, Guardrail, Worker, LLM Judge) with state persistence, human-in-the-loop approval gates, and automated quality evaluation scoring.",
    designChoice: "Block destructive SQL at the AST level with sqlglot before execution, capturing pre-image row snapshots for deterministic atomic rollbacks.",
    proof: {
      value: "> 0.85",
      label: "quality evaluation score",
      context: "Automated benchmarked precision on messy tabular datasets with zero unintended schema mutations."
    },
    technologies: ["LangGraph", "FastMCP", "sqlglot", "LangSmith", "PostgreSQL", "Python"],
    githubUrl: "https://github.com/Nikhilkajota03",
    statusText: "Production Architecture · Open Design",
    artwork: {
      type: "control",
      topSub: "Autonomous Data Cleaner",
      topCategory: "Agent production engineering",
      words: ["Zero mutation.", "Guaranteed rollback."],
      bottomLeft: "AST Validation. Atomic Pre-image. Telemetry.",
      bottomRight: "LangGraph / FastMCP / LangSmith"
    },
    caseStudy: {
      problem: "When LLMs generate SQL queries to cleanse or transform enterprise databases, unvalidated execution can execute catastrophic schema or data alterations (DROP, TRUNCATE, unindexed DELETEs) and hallucinate transforms.",
      solution: "Engineered a 4-agent state machine in LangGraph: (1) Planner generates clean step definitions; (2) Guardrail validates the AST via sqlglot, verifying read-only or staged views; (3) Worker executes inside an air-gapped FastMCP sandbox taking row pre-image snapshots; (4) LLM Judge verifies statistical distributions before committing, with instant rollback on failure.",
      impact: "Zero accidental data mutations across all evaluation benchmarks, with automated quality scores consistently exceeding 0.85."
    }
  },
  {
    id: "finintel",
    categoryIndex: "02",
    categoryName: "Document intelligence & knowledge graphs",
    title: "FinIntel Copilot",
    headline: "Eliminate hallucination across complex financial PDFs and balance sheets.",
    summary: "An enterprise document intelligence platform built for a US-based hedge fund, combining dense pgvector search, sparse BM25, and GraphRAG to traverse entity relationships across complex filings.",
    designChoice: "Decouple vector semantic similarity from hierarchical entity graph traversal, combining results through Reciprocal Rank Fusion (RRF).",
    proof: {
      value: "+35%",
      label: "retrieval precision",
      context: "Measured against standard vector-only RAG on SEC 10-K filings, reducing hallucinations by 25%."
    },
    technologies: ["GraphRAG", "pgvector", "BM25", "Neo4j", "FastAPI", "Next.js"],
    githubUrl: "https://github.com/Nikhilkajota03",
    statusText: "Deployed Client System · Production",
    artwork: {
      type: "memory",
      topSub: "FinIntel Copilot",
      topCategory: "Financial Document Intelligence",
      words: ["Unstructured.", "To Knowledge."],
      bottomLeft: "Hybrid RRF Retrieval\nDense + Sparse + Graph",
      bottomRight: "SEC Filings\nReal-time Traversal"
    },
    caseStudy: {
      problem: "Standard naive RAG models frequently fail on financial reports because vital numbers (such as EBITDA or YoY debt) exist in cross-page tables and footnotes where cosine similarity loses entity context.",
      solution: "Built a dual-layer retrieval pipeline: extracted entities and relationships are linked into a Neo4j knowledge graph, while text chunks are indexed in pgvector (dense) and BM25 (sparse). Queries execute parallel traversal and are re-ranked using a custom Reciprocal Rank Fusion algorithm before LLM context packing.",
      impact: "Increased retrieval precision by 35%, slashed client data-retrieval time by 60%, and reduced hallucination rates by 25%."
    }
  },
  {
    id: "voice-agent",
    categoryIndex: "03",
    categoryName: "Real-time multimodal systems",
    title: "Ultra-Low Latency AI Voice Engine",
    headline: "Streaming speech chunking with sub-400ms conversational turn-around.",
    summary: "A production-grade real-time AI voice system connecting streaming WebSockets STT, low-latency LLM inference, and TTS audio synthesis with a distributed Redis caching layer for continuous context.",
    designChoice: "Stream first-token completions directly into acoustic synthesizer buffers rather than waiting for sentence boundaries, eliminating turn-taking stutter.",
    proof: {
      value: "380ms",
      label: "end-to-end latency",
      context: "Speech-to-Speech turnaround measured from audio silence detection to initial synthetic audio packet arrival."
    },
    technologies: ["WebSockets", "Groq", "Redis", "FastAPI", "STT/TTS", "Docker"],
    githubUrl: "https://github.com/Nikhilkajota03",
    statusText: "Production Architecture · Sub-400ms",
    artwork: {
      type: "voice",
      topSub: "Voice Engine",
      topCategory: "Low-latency systems",
      words: ["Real-time.", "Sub-400ms."],
      bottomLeft: "Streaming WebSocket Pipeline\nSTT → Groq → TTS",
      bottomRight: "Redis Cache\n45% DB Load Reduction"
    },
    caseStudy: {
      problem: "Traditional voice bots suffer from 1.5s - 3s latency delays, making human conversations awkward, interrupted, and robotic.",
      solution: "Architected a full streaming duplex pipeline over WebSockets. As the user speaks, chunked VAD (Voice Activity Detection) immediately triggers fast whisper STT. Tokens from ultra-fast inference (Groq) are directly piped into a streaming TTS buffer, while Redis holds warm conversation state and frequent tool responses.",
      impact: "Achieved sub-400ms latency (averaging 380ms), reduced backend database load by 45%, and increased automated conversation completion rates by 35%."
    }
  }
];

export const secondaryProjects = [
  {
    category: "Deterministic sandboxing",
    title: "FastMCP Text-to-SQL Sandbox",
    summary: "Air-gapped Model Context Protocol server that intercepts raw generated SQL, parses ASTs with sqlglot, and rejects unindexed writes and non-whitelisted schemas.",
    proofValue: "0",
    proofLabel: "unauthorized mutations",
    technologies: ["FastMCP", "sqlglot", "PostgreSQL", "Python"],
    githubUrl: "https://github.com/Nikhilkajota03"
  },
  {
    category: "Agent reliability & loops",
    title: "Self-Reflective CRAG Loops",
    summary: "LangGraph-powered stateful agent workflows featuring corrective query reformulation, web fallbacks, and LLM-as-a-judge relevance checks.",
    proofValue: "35%",
    proofLabel: "task completion uplift",
    technologies: ["LangGraph", "LangSmith", "LlamaIndex", "Groq"],
    githubUrl: "https://github.com/Nikhilkajota03"
  },
  {
    category: "Distributed state & caching",
    title: "Redis Semantic Session Cache",
    summary: "High-throughput vector and session caching layer for multi-turn conversational agents, providing instant cache hits on repeated queries.",
    proofValue: "50%",
    proofLabel: "faster API responses",
    technologies: ["Redis", "FastAPI", "Docker", "Node.js"],
    githubUrl: "https://github.com/Nikhilkajota03"
  }
];

export const skillsCategories = [
  {
    category: "AI & GenAI Architectures",
    skills: [
      "Multi-Agent Orchestration",
      "Supervisor-Worker Pattern",
      "ReAct",
      "GraphRAG",
      "Corrective RAG (CRAG)",
      "FastMCP",
      "Reciprocal Rank Fusion (RRF)",
      "Hybrid Search"
    ]
  },
  {
    category: "LLM Frameworks & APIs",
    skills: [
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "OpenAI API",
      "Anthropic Claude API",
      "Groq",
      "Ollama",
      "Hugging Face"
    ]
  },
  {
    category: "Observability, Evals & Security",
    skills: [
      "LangSmith",
      "Langfuse",
      "Arize Phoenix",
      "LLM-as-a-Judge",
      "Context Precision & Recall",
      "Faithfulness Evals",
      "FastMCP Sandboxing",
      "sqlglot AST Validation"
    ]
  },
  {
    category: "Vector DBs & Search",
    skills: [
      "pgvector",
      "ChromaDB",
      "Pinecone",
      "Qdrant",
      "Neo4j",
      "BM25",
      "Dense & Sparse Retrieval",
      "Cross-Encoder Reranking"
    ]
  },
  {
    category: "Languages & Frameworks",
    skills: [
      "Python (NumPy, Pandas)",
      "TypeScript",
      "JavaScript",
      "C++",
      "FastAPI",
      "NestJS",
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js"
    ]
  },
  {
    category: "Databases, Cloud & DevOps",
    skills: [
      "PostgreSQL",
      "Supabase",
      "Redis",
      "DynamoDB",
      "AWS (EC2, Lambda, SageMaker)",
      "GCP (Cloud Run, Secret Manager)",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Prisma",
      "SQLAlchemy"
    ]
  }
];

export const openSourceContributions = [
  {
    date: "Aug 2026",
    title: "Deterministic Pre-Execution AST Guardrails for FastMCP",
    category: "Security & MCP RFC",
    summary: "Engineered an open-source middleware for Model Context Protocol servers to parse incoming SQL AST trees, forbidding mutating tokens prior to database connection pool dispatch.",
    stat: "100%",
    statLabel: "DDL block rate"
  },
  {
    date: "May 2026",
    title: "GraphRAG Entity Disambiguation for Financial Tables",
    category: "Information Extraction",
    summary: "Formulated a structured graph pipeline mapping SEC 10-K tabular footnotes directly into Neo4j property graphs with temporal quarterly validity.",
    stat: "35%",
    statLabel: "precision gain"
  },
  {
    date: "Dec 2024",
    title: "Sub-400ms WebSocket Audio Chunk Buffer for Groq + Whisper",
    category: "Low Latency Audio",
    summary: "Optimized VAD chunking to trigger speculative token generation ahead of punctuation completion, cutting dead air by 400ms.",
    stat: "380ms",
    statLabel: "measured turnaround"
  }
];
