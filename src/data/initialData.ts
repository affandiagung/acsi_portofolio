import { PortfolioData } from '../types';
import { INITIAL_PORTFOLIO_DATA_ID } from './initialDataId';
import { PROJECTS_DATA_EN } from './projectsEn';

export { INITIAL_PORTFOLIO_DATA_ID };

export const INITIAL_PORTFOLIO_DATA_EN: PortfolioData = {
  personal: {
    name: 'Affandi Agung Laksono',
    roleTitle: 'Software Engineer',
    heroHeading: "Hi, I'm Affandi.",
    heroSubtitle: 'A Backend-focused Software Engineer building reliable APIs, data-intensive systems, and AI-powered applications.',
    specializationPills: [
      'ERP Systems & Customization',
      'Website & SaaS Development',
      'Cloud & VPS Software Installation',
      'Production Software Maintenance',
      'Database & API Optimization',
      'Real-Time Monitoring Dashboard',
    ],
    aboutStory:[
      "I'm a Software Engineer with experience building and maintaining web applications, backend systems, and AI-powered applications.",
      "My main focus is backend development, with experience in APIs, databases, cloud deployment, and system integration.",
      "I used to solve  technical problems, improving system performance, and building reliable applications for real-world use."
    ],
    email: 'ccoc.20001@gmail.com',
    phone: '+62858 1317 7600',
    domicile: 'South Tangerang, Banten, Indonesia',
    github: 'https://github.com/affandiagung',
    linkedin: 'https://linkedin.com/in/affandi-agung',
    portfolioUrl: 'https://affandiagung.github.io/',
    openToRelocation: 'Open to relocation across Indonesia and internationally'
  },
  stats: [
    {
      label: 'Telemetry Data',
      value: '3.5 TB+',
      helper: 'Annual processed time-series data'
    },
    {
      label: 'Query Latency',
      value: '4m → 18s',
      helper: '92% reduction via indexing & views'
    },
    {
      label: 'Monitored Sites',
      value: '10K+',
      helper: 'Telecom BTS infrastructure nodes'
    },
    {
      label: 'System Uptime',
      value: '99.9%',
      helper: 'Regulatory & enterprise SLA'
    }
  ],
  whatIDo: [
    {
      id: 'erp-systems',
      title: 'ERP Systems & Enterprise Operations',
      icon: 'Layers',
      description: 'Designing, customizing, and maintaining Enterprise Resource Planning (ERP) modules for operations, inventory, and procurement.',
      items: [
        'Multi-module business logic (Inventory stock movements, Purchase Orders, Sales Orders)',
        'Role-Based Access Control (RBAC), multi-tier approval chains & audit trails',
        'Database relational modeling, ACID transaction integrity & soft-delete safeguards',
        'Enterprise ERP maintenance, legacy module modernization & custom workflows',
        'Automated document & PO generation with email dispatch'
      ]
    },
    {
      id: 'website-development',
      title: 'Website & Web Application Development',
      icon: 'Layers',
      description: 'Building modern responsive fullstack web apps, SaaS tools for UMKM, and public portal templates.',
      items: [
        'SaaS POS UMKM: cashier checkout, product catalog & daily sales summary',
        'SukaVillage community & village profile portal templates with responsive UI',
        'Modern SPAs & SSR apps using React, Next.js, Svelte, and Tailwind CSS',
        'RESTful API integrations, session management & high-contrast UI design',
        'Type-safe contracts end-to-end with TypeScript and clean component architecture'
      ]
    },
    {
      id: 'cloud-server-install',
      title: 'Software Installation & Cloud VPS Setup',
      icon: 'Server',
      description: 'Configuring and deploying production web software across AWS, IDCloudHost, and Linux VPS environments.',
      items: [
        'Linux server provisioning & OS hardening (Ubuntu/Debian) on AWS & IDCloudHost',
        'Nginx reverse proxy setup, rate limiting, and Let’s Encrypt SSL/TLS certbot',
        'Docker containerization and Docker Compose multi-container orchestration',
        'Database provisioning & backup automations (PostgreSQL, MySQL, Redis)',
        'Domain DNS mapping, UFW firewall configurations, and SSH key security'
      ]
    },
    {
      id: 'maintenance-troubleshooting',
      title: 'Software Maintenance, Bug Fixing & Troubleshooting',
      icon: 'Cpu',
      description: 'Diagnosing live production anomalies, fixing runtime bugs, and implementing continuous client change requests.',
      items: [
        'Systematic bug reproduction, root-cause diagnosis, and zero-downtime hotfixes',
        'Handling client change requests (CR) & scope enhancements without workflow regressions',
        'Query execution plan analysis (EXPLAIN), indexing & 92% latency reduction',
        'Log auditing & monitoring (Nginx access/error logs, PHP-FPM, Docker logs)',
        'Legacy codebase refactoring, dependency upgrades & security patch rollouts'
      ]
    },
    {
      id: 'ai-eng',
      title: 'AI Engineering & RAG Pipelines',
      icon: 'Bot',
      description: 'Building production AI features that ground LLMs in structured domain documents with zero hallucinations.',
      items: [
        'FastAPI & Python microservices for domain-specific AI workloads',
        'Retrieval-Augmented Generation (RAG) with LLM Model',
        'Indonesian tax regulations RAG assistant with semantic legal chunking',
        'Server-Sent Events (SSE) streaming APIs for real-time conversational UIs',
        'Hybrid keyword (BM25) and dense vector embeddings matching'
      ]
    },
    {
      id: 'backend-data',
      title: 'Backend Engineering & Data Systems',
      icon: 'Database',
      description: 'Architecting scalable schemas, time-series partitions, and high-concurrency ingestion pipelines.',
      items: [
        'High-throughput RESTful & RPC APIs with OpenAPI/Swagger specifications',
        'Time-series partitioning handling 3.5 TB annual telemetry data',
        'Redis caching layers (Cache-Aside, TTL invalidation, session state)',
        'Zero-downtime migrations between database engines',
        'Regulatory government compliance endpoints integration (SISPEK KLHK)'
      ]
    }
  ],
  projects: PROJECTS_DATA_EN,
  engineeringThoughts: [
    {
      id: 'api-design',
      title: 'API Design & Contracts',
      subtitle: 'Predictable, self-documenting REST APIs with idempotent mutations and typed error formats',
      tag: 'RESTful Architecture',
      keyPoints: [
        'RFC 7807 problem details for structured, informative error responses with trace IDs',
        'Strict DTO validation before payload reaches domain business logic',
        'Idempotency keys on sensitive financial and sensor submission mutations',
        'Semantic HTTP status codes (201 Created vs 200 OK, 422 Unprocessable vs 400 Bad Request)',
        'Comprehensive OpenAPI / Swagger specification generated from code annotations'
      ],
      codeSnippet: {
        language: 'typescript',
        title: 'Standardized Error Response Contract',
        code: `// RFC 7807 Compliant Backend Error Envelope
export interface ProblemDetails {
  type: string;           // "https://api.domain.com/errors/validation"
  title: string;          // "Invalid Telemetry Payload"
  status: number;         // 422
  detail: string;         // "Sensor reading exceeds physical limits [0..5000]"
  instance: string;       // "/api/v1/sensors/stack-04/readings"
  invalidParams?: {
    name: string;
    reason: string;
  }[];
  traceId: string;        // "req-98f21-789a"
}`
      }
    },
    {
      id: 'database-optimization',
      title: 'Database & Query Optimization',
      subtitle: 'Partitioning, indexing strategies, and EXPLAIN ANALYZE tuning on multi-million row datasets',
      tag: 'PostgreSQL & SQL',
      keyPoints: [
        'Time-range table partitioning for time-series telemetry data (weekly/monthly chunks)',
        'Composite B-Tree & partial indexes tailored to common WHERE filter combinations',
        'Materialized views refreshed during off-peak windows for heavy analytical queries',
        'Elimination of N+1 query traps using eager loading and CTEs (Common Table Expressions)',
        'Connection pooling configuration (PgBouncer) to prevent database thread starvation'
      ],
      codeSnippet: {
        language: 'sql',
        title: 'Time-Series Partitioning & Materialized View',
        code: `-- Partition high-volume sensor telemetry by month
CREATE TABLE sensor_telemetry (
    id BIGSERIAL,
    station_id INT NOT NULL,
    recorded_at TIMESTAMPTZ NOT NULL,
    pm25 NUMERIC(6,2),
    status VARCHAR(20),
    PRIMARY KEY (id, recorded_at)
) PARTITION BY RANGE (recorded_at);

-- Pre-aggregated materialized view for sub-20ms dashboard queries
CREATE MATERIALIZED VIEW mv_hourly_station_averages AS
SELECT
    station_id,
    date_trunc('hour', recorded_at) AS hour_bucket,
    ROUND(AVG(pm25), 2) AS avg_pm25,
    COUNT(*) AS sample_count
FROM sensor_telemetry
GROUP BY station_id, date_trunc('hour', recorded_at);

CREATE UNIQUE INDEX idx_mv_station_hour ON mv_hourly_station_averages (station_id, hour_bucket);`
      }
    },
    {
      id: 'performance-caching',
      title: 'Performance & Caching Strategies',
      subtitle: 'Multi-layer caching, O(n) to O(1) hash indexing, and asynchronous background queuing',
      tag: 'Redis & Algorithms',
      keyPoints: [
        'Cache-Aside pattern with TTL and proactive cache invalidation on resource update',
        'Optimized algorithmic lookup complexity from O(n) linear scans to O(1) keyed dictionaries',
        'Offloading expensive PDF generation, email dispatches, and third-party APIs to worker queues',
        'Distributed lock primitives in Redis to prevent race conditions during bulk updates',
        'Gzip/Brotli payload compression and payload trimming on mobile-targeted endpoints'
      ],
      codeSnippet: {
        language: 'python',
        title: 'Redis Cache-Aside Pattern with Fallback',
        code: `async def get_station_summary(station_id: int) -> dict:
    cache_key = f"station:summary:{station_id}"
    
    # 1. Fast path: in-memory cache check (<2ms)
    cached = await redis.get(cache_key)
    if cached:
        return json.loads(cached)
        
    # 2. Slow path: database aggregation
    summary = await db.fetch_station_kpis(station_id)
    
    # 3. Populate cache with 15-minute TTL
    await redis.setex(cache_key, 900, json.dumps(summary))
    return summary`
      }
    },
    {
      id: 'reliability-fault',
      title: 'Reliability & Fault Tolerance',
      subtitle: 'Graceful degradation, automated retry with exponential backoff, and sensor outage spooling',
      tag: 'System Resilience',
      keyPoints: [
        'Local SQLite spool buffer on edge hardware when network connection drops',
        'Exponential backoff with jitter on outgoing government API calls',
        'Circuit breaker pattern preventing cascade failures when upstream services degrade',
        'Comprehensive structured JSON logs with correlation IDs for rapid debugging',
        'Health check probes (/healthz, /readyz) verifying DB connections, Redis, and disk space'
      ],
      codeSnippet: {
        language: 'typescript',
        title: 'Exponential Backoff with Jitter for Integrations',
        code: `async function syncWithGovernmentGateway(payload: TelemetryPayload, maxRetries = 4) {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      return await http.post('/sispek/v1/emissions', payload, { timeout: 10000 });
    } catch (err) {
      attempt++;
      if (attempt >= maxRetries) {
        await localSpoolBuffer.enqueue(payload); // Spool locally so no data is lost
        throw new SystemException('Outage detected, payload spooled to local disk');
      }
      // Exponential backoff + randomized jitter
      const delay = Math.pow(2, attempt) * 1000 + Math.random() * 500;
      await sleep(delay);
    }
  }
}`
      }
    },
    {
      id: 'deployment-devops',
      title: 'Deployment & Infrastructure',
      subtitle: 'Repeatable Docker containerization, Nginx reverse proxy, and Linux administration',
      tag: 'DevOps & Linux',
      keyPoints: [
        'Multi-stage Docker builds minimizing production container attack surface',
        'Nginx reverse proxy with SSL termination, HTTP/2, and rate-limiting zones',
        'Systemd service unit configuration with restart policies on unexpected crashes',
        'Automated CI/CD pipelines running linting, automated unit tests, and seamless deploy',
        'Real-time server resource monitoring (CPU, RAM, Disk I/O, Network sockets)'
      ],
      codeSnippet: {
        language: 'dockerfile',
        title: 'Optimized Multi-Stage Container',
        code: `# Production container for Python FastAPI service
FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY . .
USER nobody
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]`
      }
    }
  ],
  techStack: [
    {
      category: 'Backend Languages & Frameworks',
      description: 'Core runtime environments for high-throughput APIs and background workers',
      skills: [
        { name: 'Python (FastAPI)', highlight: true },
        { name: 'PHP (Laravel, CodeIgniter)', highlight: true },
        { name: 'Node.js (NestJS, Express)', highlight: true },
        { name: 'Bun (Elysia)', highlight: true },
        { name: 'TypeScript / JavaScript', highlight: true },
        { name: 'RESTful API & OpenAPI/Swagger', highlight: true },
        { name: 'Microservices Architecture', highlight: true }
      ]
    },
    {
      category: 'Databases & Storage',
      description: 'Relational, document, in-memory, and vector persistence',
      skills: [
        { name: 'SQL (PostgreSQL , MySQL / MariaDB, SQLite)', highlight: true },
        { name: 'NoSQL ( MongoDB )', highlight: true },
        { name: 'Redis (Caching & Queues)', highlight: true },
        { name: 'Prisma ORM , SQL Alchemy & Eloquent', highlight: true },
        { name: 'Query Optimization (EXPLAIN)', highlight: true }
      ]
    },
    {
      category: 'AI & Data Engineering',
      description: 'LLM integration, retrieval systems, and sensor processing',
      skills: [
        { name: 'RAG (Retrieval Augmented Generation)', highlight: true },
        { name: 'AI & LLM', highlight: true },
        { name: 'Ollama (Local LLMs)', highlight: true },
        { name: 'Prompt Engineering & Chunking', highlight: true },
        { name: 'Time-Series Data Aggregation', highlight: true },
        { name: 'Sensor Telemetry Pipelines (CEMS/AQMS/BTS)', highlight: true },
        { name: 'Predictive ML Modeling (Scikit-learn)', highlight: true }
      ]
    },
    {
      category: 'Frontend & UI (When Needed)',
      description: 'Clean, responsive interfaces to complement backend services',
      skills: [
        { name: 'React', highlight: true },
        { name: 'Next.js', highlight: true },
        { name: 'Svelte', highlight: true },
        { name: 'HTML, CSS', highlight: true }
      ]
    },
    {
      category: 'Infrastructure & DevOps',
      description: 'Deployment, containerization, and production system maintenance',
      skills: [
        { name: 'Docker & Docker Compose', highlight: true },
        { name: 'Linux (Ubuntu, CentOS)', highlight: true },
        { name: 'Nginx & Reverse Proxy', highlight: true },
        { name: 'CI/CD (GitLab, GitHub Actions)', highlight: true },
        { name: 'AWS & Cloud Hosting', highlight: true },
        { name: 'Windows Server & On-Premise', highlight: true},
        { name: 'Git & Version Control', highlight: true }
      ]
    }
  ],
  experiences: [
    {
      id: 'exp-1',
      role: 'Software Engineer',
      company: 'PT Cetta Trans Digital',
      period: 'Sep 2024 — Present',
      location: 'Jakarta, Indonesia (Hybrid)',
      type: 'Full-time',
      impactBullets: [
        'Architected and maintained enterprise web applications spanning environmental tech (AQMS/CEMS), ERP systems, and taxation platforms.',
        'Reduced API response times from ~4 minutes to under 20 seconds through deep PostgreSQL query optimization and restructured data access layers.',
        'Improved algorithmic computational complexity from O(n) to O(1) for critical business processes.',
        'Integrated 50+ industrial environmental sensors into centralized monitoring systems and successfully transmitted regulatory data to KLHK.',
        'Successfully delivery a critical enterprise project without incurring business penalties.',
        'Collaborated with academic researchers on AI/ML forecasting initiatives, enhancing air quality prediction accuracy by ~15%.'
      ],
      technologies: ['Php', 'Laravel', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx', 'AWS', 'IDCloudHost', 'Redis', 'FastAPI', 'Ubuntu/Windows Server']
    },
    {
      id: 'exp-2',
      role: 'Backend Developer',
      company: 'PT Datasintesa',
      period: 'Jun 2022 — Sep 2024',
      location: 'Jakarta, Indonesia (Hybrid)',
      type: 'Full-time',
      impactBullets: [
        'Engineered and maintained over 10 production REST APIs and 7+ microservices supporting large-scale government systems.',
        'Optimized PostgreSQL queries, dropping average query latency from 500ms down to 100ms across high-traffic endpoints.',
        'Implemented Redis caching architectures that drastically minimized database server load during peak hours.',
        'Utilized PostgreSQL Materialized Views and partition strategies for analytical reporting on datasets reaching 3.5 TB annually.',
        'Participated in end-to-end MongoDB-to-PostgreSQL schema and data migration with zero production downtime.',
        'Collaborated across multidisciplinary Agile teams with frontend engineers and data scientists.'
      ],
      technologies: ['Node.js', 'NestJS', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Linux', 'Docker', 'Swagger', 'Postman']
    },
    {
      id: 'exp-3',
      role: 'Programmer IT',
      company: 'PT Sang Saka Gemilang',
      period: 'Mar 2022 — Jun 2022',
      location: 'Jakarta, Indonesia',
      type: 'Contract',
      impactBullets: [
        'Collaborated in backend development for the MyGO merchant platform.',
        'Constructed merchant registration portals and administrative dashboards for onboarding business partners.',
        'Designed relational database schemas with normalized tables in MySQL for merchant transaction management.'
      ],
      technologies: ['PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL']
    }
  ],
  notes: [
    {
      id: 'note-query-opt',
      title: 'How I Optimized PostgreSQL Queries for a 3.5TB Monitoring System (4 min to 18s)',
      date: 'Aug 2024',
      readTime: '6 min read',
      tags: ['PostgreSQL', 'Performance', 'Database'],
      summary: 'A deep dive into indexing strategies, removing accidental Cartesian products, table partitioning, and using materialized views to slash analytical query times.',
      content: `When dealing with millions of time-series records from 10,000+ infrastructure sites, naive SQL queries will bring your database to its knees.

Here is the exact step-by-step breakdown of how we took our heaviest analytical query from ~4 minutes down to under 18 seconds:

### 1. The Bottleneck: Unbounded Sequential Scans
Our initial schema held time-series logs in a monolithic table. When querying a 30-day window for 15+ KPIs:
- Postgres performed a sequential scan over 40+ million rows.
- High disk I/O saturated the storage volume, causing cascading latency on write endpoints.

### 2. Time-Range Partitioning
We restructured the table using declarative range partitioning by month:
\`\`\`sql
CREATE TABLE bts_telemetry (
  id BIGSERIAL,
  site_id INT NOT NULL,
  recorded_at TIMESTAMPTZ NOT NULL,
  metrics JSONB NOT NULL,
  PRIMARY KEY (id, recorded_at)
) PARTITION BY RANGE (recorded_at);
\`\`\`
With partition pruning enabled, queries targeting last month only scan the relevant child table, immediately ignoring 90% of the data.

### 3. Target Compound Indexes
We replaced generic single-column indexes with compound indexes matching our query WHERE and ORDER BY clauses:
\`\`\`sql
CREATE INDEX idx_telemetry_site_time 
ON bts_telemetry (site_id, recorded_at DESC);
\`\`\`

### 4. Materialized Views with Automated Refresh
Rather than calculating aggregate percentiles and averages on every dashboard load, we created materialized views refreshed every hour via a background worker:
\`\`\`sql
CREATE MATERIALIZED VIEW mv_daily_kpi_summary AS
SELECT 
  site_id,
  date_trunc('day', recorded_at) AS day_bucket,
  AVG((metrics->>'latency')::numeric) AS avg_latency,
  MAX((metrics->>'temperature')::numeric) AS max_temp
FROM bts_telemetry
GROUP BY site_id, date_trunc('day', recorded_at);
\`\`\`

Result: Query execution dropped by over 92%, and CPU utilization during peak reporting dropped from 85% to under 25%.`
    },
    {
      id: 'note-redis-caching',
      title: 'Understanding Redis Caching in High-Throughput REST APIs: Beyond Key-Value',
      date: 'May 2024',
      readTime: '5 min read',
      tags: ['Redis', 'Architecture', 'Caching'],
      summary: 'Why simple caching often leads to stale data or cache stampedes, and how to use Cache-Aside with distributed locks and smart TTLs.',
      content: `Many developers start with Redis by simply caching everything with a 5-minute TTL. While that works for small apps, high-throughput systems quickly face cache stampedes and inconsistent state.

### The Cache-Aside Pattern Done Right
1. Read from Redis first.
2. If cache hit, return immediately.
3. If cache miss, fetch from PostgreSQL, write to Redis with jittered TTL, and return.

### Preventing Cache Stampede
When an expensive key expires under 1,000 requests/sec, all 1,000 requests hit the database simultaneously. We solve this using a Redis distributed mutex (SETNX):
\`\`\`python
async def get_with_stampede_protection(key: str, fetch_fn):
    val = await redis.get(key)
    if val:
        return json.loads(val)
        
    lock_key = f"lock:{key}"
    if await redis.set(lock_key, "1", nx=True, ex=5):
        try:
            fresh_data = await fetch_fn()
            await redis.setex(key, 900, json.dumps(fresh_data))
            return fresh_data
        finally:
            await redis.delete(lock_key)
    else:
        # Another worker is already regenerating, wait 100ms and retry
        await asyncio.sleep(0.1)
        return await get_with_stampede_protection(key, fetch_fn)
\`\`\`

This guarantees only 1 request queries the database while others wait briefly for the warm cache.`
    },
    {
      id: 'note-rag-fastapi',
      title: 'Building a Production RAG API with FastAPI,LLM Model, and Streaming Responses',
      date: 'Jan 2025',
      readTime: '7 min read',
      tags: ['AI', 'Python', 'FastAPI', 'RAG'],
      summary: 'Practical patterns for chunking dense legal documents, metadata filtering, and streaming token responses via Server-Sent Events (SSE).',
      content: `Building a proof-of-concept RAG takes 20 lines of Python. Making it reliable for Indonesian tax laws and regulations requires deliberate architecture.

### 1. The Challenge of Legal Documents
Tax laws have strict hierarchies: Law → Chapter → Article (Pasal) → Clause (Ayat).
If you use standard fixed-character chunking (e.g. 500 characters), an article gets split in half, losing the tariff condition stated in the preceding paragraph.

### 2. Structure-Aware Chunking
We wrote a regex-based parser that preserves complete articles as single document units with rich metadata:
- \`law_number\`: UU No. 7 Tahun 2021
- \`article_number\`: Pasal 17
- \`tax_type\`: PPh Orang Pribadi
- \`valid_from_year\`: 2022

### 3. Hybrid Filtering in the RAG Pipeline
When the user asks: "What is the PPh rate for income above 5 billion in 2024?", we perform a hybrid query:
\`\`\`python
results = collection.query(
    query_texts=["PPh tarif penghasilan di atas 5 milyar"],
    where={"tax_type": "PPh Orang Pribadi"},
    n_results=4
)
\`\`\`

### 4. Streaming Tokens with Server-Sent Events (SSE)
Instead of waiting 4 seconds for the entire LLM completion, we use FastAPI's \`StreamingResponse\`:
\`\`\`python
from fastapi.responses import StreamingResponse

@app.post("/api/v1/tax-chat/stream")
async def stream_tax_answer(req: ChatRequest):
    async def token_generator():
        async for chunk in rag_service.generate_stream(req.query):
            yield f"data: {json.dumps({'text': chunk})}\\n\\n"
            
    return StreamingResponse(token_generator(), media_type="text/event-stream")
\`\`\`
This dropped perceived latency to under 300ms for user interaction.`
    },
    {
      id: 'note-sensor-sispek',
      title: 'From Industrial Sensor Streams to Regulatory Compliance (SISPEK KLHK)',
      date: 'Nov 2024',
      readTime: '5 min read',
      tags: ['IoT', 'Laravel', 'Integration'],
      summary: 'Handling industrial chimney sensors, RS485 communication, intermittent connectivity, and guaranteed regulatory transmission.',
      content: `In environmental monitoring, missing data doesn't just mean a broken chart—it means government fines for our industrial clients.

### The Requirements
1. Read emissions (SO2, NOx, CO, Flow, Opacity) from continuous sensors.
2. Apply calibration formulas and standardizations (dry basis, O2 correction).
3. Transmit hourly average payloads to the Ministry of Environment (KLHK) SISPEK endpoint with an HMAC signature.
4. Maintain 99.9% uptime despite factory power flickers or internet dropouts.

### The Edge-to-Cloud Resilience Model
We implemented a local spooling queue on the on-premise industrial gateway. When the internet connection drops:
1. Telemetry is appended to an encrypted local SQLite queue.
2. An exponential backoff background daemon polls the gateway health.
3. Once internet connectivity is restored, records are drained in FIFO batches with regulatory timestamps preserved.

This guaranteed zero lost data and satisfied KLHK's strict compliance audit requirements.`
    }
  ],
  education: [
    {
      school: 'Universitas Pamulang (UNPAM)',
      degree: 'Bachelor of Computer Science (S.Kom)',
      year: '2020 — 2024',
      gpa: 'IPK 3.75 / 4.00'
    }
  ],
  certifications: [
    {
      name: 'The Fundamental Theories and Implementations of Data Science',
      org: 'Matsuo-Iwasawa Lab, University of Tokyo (U-Tokyo)',
      year: '2026'
    },
    {
      name: 'AWS re/Start - Cloud Computing',
      org: 'Orbit Future Academy',
      year: '2026'
    },
    {
      name: 'AI Productivity and AI API Integration for Developers',
      org: 'HACKTIV8',
      year: '2025'
    },
    {
      name: 'HCIA Cloud Service (Fresh Graduate Academy)',
      org: 'DIGITALENT Kominfo',
      year: '2025'
    },
    {
      name: 'MongoDB Database Admin Path (Self-Managed)',
      org: 'MongoDB University',
      year: '2025'
    },
    {
      name: 'React JS - Web Frontend Development',
      org: 'Sanbercode',
      year: '2025'
    },
    {
      name: 'Back End Development Bootcamp (Best Showcase)',
      org: 'Glints Academy Powered by Binar',
      year: '2022'
    }
  ]
};

export const INITIAL_PORTFOLIO_DATA: PortfolioData = INITIAL_PORTFOLIO_DATA_ID;

export function getInitialPortfolioData(lang: 'id' | 'en' = 'id'): PortfolioData {
  return lang === 'id' ? INITIAL_PORTFOLIO_DATA_ID : INITIAL_PORTFOLIO_DATA_EN;
}

