import { Project } from '../types';

/**
 * PROJECT IMAGE / ASSET GUIDE:
 * Put your image files in: /public/assets/projects/
 * Example: /public/assets/projects/bakti-oss.png
 * Then set the `imageUrl` property for any project to:
 * imageUrl: '/assets/projects/bakti-oss.png'
 * (External URLs https://... are also supported)
 */
export const PROJECTS_DATA_EN: Project[] = [
  {
    id: 'bakti-oss',
    title: 'BAKTI OSS (Operational Support System)',
    subtitle: 'Telecom infrastructure monitoring and operational KPI reporting for 10,000+ BTS sites across Indonesia',
    category: 'backend',
    flag: 'Install & Cloud',
    badge: 'Enterprise Telecom',
    status: 'Continuously maintained / enhanced',
    businessPurpose: 'Used by BAKTI Kominfo (Telecommunications and Information Accessibility Agency) to manage and monitor operational activities of telecommunication projects across Indonesia.',
    role: ['Backend Developer'],
    problem: '10,000+ remote BTS sites across Indonesia generated large volumes of telemetry data from inconsistent sources (APIs, FTP, SFTP, CSV, Excel, and log files). Inconsistent formats and sheer scale made real-time reporting, Excel exports, and weekly user requirement changes extremely challenging.',
    solution: 'Engineered a scalable data ingestion and aggregation backend using Python, Go, and Node.js/NestJS. Partitioned PostgreSQL tables with materialized views, implemented BullMQ worker queues, and warmed a Redis cache layer for sub-second KPI queries.',
    technicalChallenges: [
      '10,000+ BTS across Indonesia generated data from APIs, FTP, SFTP, CSV, Excel, and log files',
      'Inconsistent data formats required extensive parsing, validation, and normalization',
      'Large-scale data volume made real-time reporting and Excel exports computationally heavy',
      'Maintenance workflows required automated ticketing, approvals, notifications, and ticket closure',
      'Frequent weekly changes from users required the system to remain flexible and modular'
    ],
    keyContributions: [
      'Engineered data ingestion pipelines from multiple remote sources (FTP, SFTP, CSV, Excel, log files)',
      'Implemented data processing, validation, and normalization using Python, Node.js, and Go',
      'Aggregated telemetry data into operational KPIs across multiple intervals (15-minute to monthly rollups)',
      'Designed PostgreSQL database schema with time-series partitioning and materialized views',
      'Implemented Redis cache layer for rapid retrieval of operational KPIs and health snapshots',
      'Developed REST APIs for reporting and administrative monitoring dashboards'
    ],
    metrics: [
      { label: 'Monitored Sites', value: '10,000+ BTS', desc: 'Remote telecom infrastructure across Indonesia' },
      { label: 'Telemetry Volume', value: '3.5 TB+ / yr', desc: 'Time-series telemetry records processed' },
      { label: 'Aggregation', value: '15m to Monthly', desc: 'Automated multi-interval KPI rollups' },
      { label: 'Cache Hit Rate', value: '99.4%', desc: 'Redis in-memory caching for dashboards' }
    ],
    stack: ['Python', 'NodeJS', 'NestJS', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'BullMQ', 'Worker', 'Nginx', 'PM2', 'Ubuntu Server'],
    architecture: {
      flowDescription: 'Data flows from 10K+ remote BTS collectors through ingestion workers into partitioned PostgreSQL tables, warmed into Redis cache, and served via optimized REST APIs to administrative dashboards.',
      steps: [
        { title: 'Edge BTS Sites', desc: '10,000+ remote telecom collectors transmitting raw telemetry data', tag: 'Data Source' },
        { title: 'Data Pipeline', desc: 'Python, Node.js and Go jobs processing and validating FTP, SFTP, CSV, Excel and log data, then aggregating KPIs from 15-min to monthly intervals', tag: 'Pipeline' },
        { title: 'PostgreSQL Architecture', desc: 'Integrated PostgreSQL databases with time-series partitioning, multi-interval KPI aggregation and materialized views', tag: 'Storage' },
        { title: 'Redis Cache Layer', desc: 'In-memory fast retrieval for 15+ operational KPIs and health snapshots', tag: 'Cache' },
        { title: 'Reporting APIs', desc: 'Multiple analytical endpoints powering monitoring, reporting and dashboard applications', tag: 'Delivery' }
      ]
    },
    liveUrl: 'https://baktioss.id',
    imageUrl: '/assets/projects/bakti-oss.png',
    screenshots: [
      {
        title: 'Login Page',
        url: '/assets/projects/bakti-oss.png',
        caption: 'Live analytical monitoring of operational metrics and real-time data transmissions'
      }
    ],
    downloads: {
      primary: { label: 'Download BAKTI OSS Architecture (.md)', type: 'spec' },
      secondary: { label: 'Download Data Ingestion Spec (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'job-portal-app',
    title: 'Job Portal Web Application',
    subtitle: 'Responsive job browsing and administrative vacancy management platform with authenticated CRUD workflows',
    category: 'website',
    flag: 'Website',
    badge: 'Full-Stack Web App',
    status: 'Personal Project',
    businessPurpose: 'A job portal website that allows users to browse available job opportunities, while administrators can manage job listings through an authenticated admin interface.',
    role: ['Frontend Developer', 'Full-Stack Developer'],
    problem: 'Job seekers needed a straightforward, responsive portal to browse and discover job openings dynamically, while hiring administrators required a secure, authenticated management dashboard to publish, update, and manage job listings without manual file edits.',
    solution: 'Built a dynamic single-page web application using ReactJS with modular components and CSS. Connected to a REST API backend with user/admin authentication and comprehensive CRUD operations for job vacancy management.',
    technicalChallenges: [
      'Built a component-based frontend architecture in ReactJS with smooth client-side routing',
      'Implemented secure user and administrator authentication and authorization checks',
      'Developed responsive UI layouts providing optimal viewing on both mobile and desktop screens',
      'Structured dynamic data rendering and validation for job listings and application states'
    ],
    keyContributions: [
      'Developed frontend user interface and components using ReactJS and modern JavaScript',
      'Integrated REST API backend endpoints for live job data ingestion and authentication',
      'Implemented secure user authentication workflows for public users and administrators',
      'Engineered CRUD functionality allowing administrators to create, read, update, and delete jobs',
      'Optimized dynamic rendering and state management for quick response times'
    ],
    metrics: [
      { label: 'Application Type', value: 'SPA Web App', desc: 'React component-based architecture' },
      { label: 'Authentication', value: 'Protected Admin', desc: 'Secured vacancy management portal' },
      { label: 'Data Operations', value: 'Full CRUD', desc: 'Create, read, update, delete listings' },
      { label: 'Device Support', value: 'Responsive', desc: 'Mobile and desktop ready' }
    ],
    stack: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'REST API', 'Authentication', 'CRUD'],
    architecture: {
      flowDescription: 'A React-based web application that provides public job browsing features and authenticated administrative functionality for managing job listings.',
      steps: [
        { title: 'Public Homepage', desc: 'Users can access the homepage and browse available job opportunities through the React-based interface', tag: 'Frontend' },
        { title: 'User Authentication', desc: 'Users and administrators can authenticate through the login interface before accessing protected functionality', tag: 'Authentication' },
        { title: 'Job Management', desc: 'Authenticated administrators can add and delete job listings through the admin interface', tag: 'CRUD' },
        { title: 'Dynamic Job Display', desc: 'Job information is dynamically displayed on the frontend based on the available job data', tag: 'Data Rendering' }
      ]
    },
    liveUrl: 'https://affandi.reactjssanbercode.my.id/',
    imageUrl: '/assets/projects/job-portal.png',
    screenshots: [
      { title: 'Public Vacancy Search & Filters', url: '/assets/projects/job-portal.png', caption: 'ReactJS portal with instant search, category navigation, and employment status filters' },
      { title: 'Administrative Vacancy Management', url: '/assets/projects/job-portal-admin.png', caption: 'Authenticated administrative portal for listing creation and applicant pipeline tracking' }
    ],
    downloads: {
      primary: { label: 'Download Job Portal Specs (.md)', type: 'spec' },
      secondary: { label: 'Download Schema Config (.json)', type: 'code' }
    },
    featured: false
  },
  {
    id: 'gos-attendance',
    title: 'GOS Attendance & Workforce Management System',
    subtitle: 'Enterprise employee attendance tracking with geolocation validation, selfie verification, and payroll reporting',
    category: 'maintenance',
    flag: 'Maintenance',
    badge: 'Workforce & ERP',
    status: 'Maintained and Enhanced',
    businessPurpose: 'Web-based employee attendance and workforce management system used to record employee attendance, manage leave and sick requests, manage attendance locations, and provide attendance reports for administrative and payroll-related processes.',
    role: ['Full-Stack Developer'],
    problem: 'The organization operated an existing workforce attendance system requiring critical feature extensions (preventing attendance fraud through location geofencing and photo verification), resolving performance bottlenecks on database queries, and handling secure multi-tenant object storage.',
    solution: 'Enhanced the CodeIgniter 3 and PostgreSQL application by introducing Google Maps API geofencing, selfie photo capture with MinIO object storage integration, resolving slow database queries, and extending the administrative portal for payroll exports.',
    technicalChallenges: [
      'Enhanced an existing production system without causing regression in daily clock-in operations',
      'Integrated real-time browser geolocation and Google Maps API radius verification',
      'Configured MinIO object storage to safely store and stream thousands of employee attendance selfie photos',
      'Optimized backend APIs and database queries to eliminate query latency during peak morning check-in rush'
    ],
    keyContributions: [
      'Conducted ongoing bug fixing, system maintenance, and code refactoring',
      'Developed location-based attendance checking using HTML5 geolocation and Google Maps API',
      'Built selfie photo capture and upload verification workflows during attendance check-in',
      'Configured MinIO S3-compatible object storage for photo archival and fast retrieval',
      'Enhanced administrative portal for multi-company management, location radii, and leave approvals',
      'Optimized PostgreSQL queries and DataTables indexing for instant payroll report generation'
    ],
    metrics: [
      { label: 'Check-in Fraud', value: '0% Bypass', desc: 'Enforced geofence and selfie checks' },
      { label: 'Object Storage', value: 'MinIO S3', desc: 'Scalable photo attachment store' },
      { label: 'Database', value: 'PostgreSQL', desc: 'ACID-compliant attendance ledger' },
      { label: 'Workflows', value: 'Leave & Sick', desc: 'Integrated approval workflows' }
    ],
    stack: ['CodeIgniter 3', 'PHP', 'JavaScript', 'jQuery', 'Bootstrap 3', 'DataTables', 'PostgreSQL', 'Apache', 'Google Maps API', 'MinIO'],
    architecture: {
      flowDescription: 'The system consists of an employee-facing attendance application and an administrative management application connected to shared backend services and PostgreSQL data. Attendance transactions use location validation and selfie uploads, while MinIO provides object storage for attendance photos.',
      steps: [
        { title: 'Employee Attendance', desc: 'Employees access the GOS Absen application to record attendance and submit leave or sick requests', tag: 'Employee App' },
        { title: 'Location Validation', desc: 'Employee attendance is associated with configured attendance locations using geolocation and Google Maps API integration', tag: 'Geolocation' },
        { title: 'Selfie Upload', desc: 'Attendance photos are uploaded during attendance transactions and stored through MinIO object storage', tag: 'File Storage' },
        { title: 'PostgreSQL Database', desc: 'Employee, attendance, location, leave, and related operational data are stored in PostgreSQL', tag: 'Database' },
        { title: 'GOS Admin', desc: 'Administrators manage companies, employees, attendance locations, records, and reports through the administrative portal', tag: 'Administration' },
        { title: 'Reporting', desc: 'Attendance data is processed into reports used for workforce monitoring and payroll-related processes', tag: 'Reporting' }
      ]
    },
    applications: [
      { name: 'GOS Absen', url: '#', description: 'Employee attendance app for check-ins, leave/sick requests, and selfie verification.' },
      { name: 'GOS Admin', url: '#', description: 'Administrative portal for managing companies, staff, attendance rules, and payroll exports.' }
    ],
    imageUrl: '/assets/projects/gos-login.png',
    screenshots: [
      { title: 'GOS Absen Dashboard', url: '/assets/projects/gos-absen-1.png', caption: 'Dashboard absen' },
      { title: 'Mobile Clock-in with Geolocation & Selfie', url: '/assets/projects/gos-absen-2.png', caption: 'Employee mobile attendance clock-in with geofence radius check and MinIO selfie verification' },
      { title: 'GOS Admin Portal & Shift Scheduling', url: '/assets/projects/gos-admin.png', caption: 'Enterprise management for multi-branch workplaces, shift allocations, and leave approval' }
    ],
    downloads: {
      primary: { label: 'Download GOS Architecture Spec (.md)', type: 'spec' },
      secondary: { label: 'Download MinIO Integration Spec (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'egateway-cems',
    title: 'Egateway – CEMS Emission Monitoring Integration System',
    subtitle: 'On-premise industrial continuous emission monitoring gateway integrated with Ministry of Environment SISPEK KLHK',
    category: 'install',
    flag: 'Install & Cloud',
    badge: 'On-Premise & Integration',
    status: 'Deployment, Maintenance & Enhancement',
    businessPurpose: 'On-premise web application used to receive, process, normalize, and transmit continuous stack emission monitoring data from CEMS (Continuous Emission Monitoring System) to SISPEK operated by Indonesia\'s Ministry of Environment and Forestry (KLHK).',
    role: ['Software Engineer', 'System Integration & Deployment'],
    problem: 'Industrial manufacturing plants are required by Indonesian environmental regulations to transmit verified stack chimney emission figures to SISPEK KLHK. Plant network topologies vary widely, requiring tailored on-premise deployments, scheduled background tasks, and fail-safe normalization.',
    solution: 'Deployed and maintained the Laravel 10 and Python Egateway application across customer Windows Server environments. Configured automated ingestion from industrial CSV and API sources, implemented automated scheduling via Windows Task Scheduler, and established secure transmission to SISPEK KLHK.',
    technicalChallenges: [
      'Adapted deployment and integration across varying customer plant network and firewall topologies',
      'Ingested emission monitoring data from diverse CEMS systems through API and CSV-based transfers',
      'Configured Python background workers for data parsing, validation, transformation, and normalization',
      'Setup Apache web servers, PostgreSQL, and Windows Task Scheduler for autonomous execution'
    ],
    keyContributions: [
      'Conducted on-premise application installation, configuration, and environment setup',
      'Configured network routing and server topology for customer plant environments',
      'Built and tuned Python data processing scripts for parsing and normalizing raw CEMS logs',
      'Configured PostgreSQL database schemas for local emission data logging and audit trails',
      'Configured Apache and Windows Task Scheduler for resilient 24/7 background transmission',
      'Handled routine software maintenance, package updates, and customer-requested enhancements'
    ],
    deploymentEnvironment: {
      type: 'On-Premise',
      server_os: 'Windows Server',
      web_server: 'Apache / XAMPP',
      database: 'PostgreSQL',
      scheduler: 'Windows Task Scheduler'
    },
    metrics: [
      { label: 'Target System', value: 'SISPEK KLHK', desc: 'Ministry of Environment regulatory format' },
      { label: 'Environment', value: 'On-Premise', desc: 'Windows Server industrial deployment' },
      { label: 'Scheduling', value: 'Autonomous', desc: 'Windows Task Scheduler recurring batch' },
      { label: 'Data Parsing', value: 'Python Engine', desc: 'Real-time CSV & API transformation' }
    ],
    stack: ['Laravel 10', 'Python', 'Bootstrap', 'PostgreSQL', 'Windows Server', 'XAMPP'],
    imageUrl: '/assets/projects/egateway-login.png',
    screenshots: [
      { title: 'Industrial Stack Emission Dashboard Panel', url: '/assets/projects/egateway-dashboard.png', caption: 'Continuous industrial gas analysis parameters (SO2, NOx, CO, O2, Particulate)' }
    ],
    architecture: {
      flowDescription: 'CEMS instruments at industrial sites generate continuous emission monitoring data. Incoming data is received through APIs or CSV files, processed and normalized by Python jobs, stored in PostgreSQL, and handled by the Laravel-based Egateway application before being transmitted to SISPEK KLHK.',
      steps: [
        { title: 'CEMS Instrumentation', desc: 'Industrial CEMS instruments continuously generate stack emission monitoring data', tag: 'Data Source' },
        { title: 'Data Ingestion', desc: 'Incoming data is received through customer APIs or CSV file transfers depending on site configuration', tag: 'Integration' },
        { title: 'Python Processing', desc: 'Python jobs parse, validate, transform, and normalize incoming emission data into required format', tag: 'Data Processing' },
        { title: 'PostgreSQL Database', desc: 'Processed emission data is stored and managed in the PostgreSQL database', tag: 'Storage' },
        { title: 'Egateway Application', desc: 'Laravel-based on-premise application provides emission data monitoring, visualization, and integration functionality', tag: 'Application' },
        { title: 'Scheduled Jobs', desc: 'Windows Task Scheduler executes recurring data processing and integration jobs', tag: 'Automation' },
        { title: 'SISPEK KLHK', desc: 'Processed emission monitoring data is transmitted to the SISPEK system operated by KLHK', tag: 'External Gateway' }
      ]
    },
    downloads: {
      primary: { label: 'Download Egateway Architecture (.md)', type: 'spec' },
      secondary: { label: 'Download CEMS Normalization Spec (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'dashboard-pemantauan-udara',
    title: 'Dashboard Pemantauan Udara (Air Quality Monitoring)',
    subtitle: 'Real-time AQMS sensor monitoring dashboard with AI/LLM forecasting and Early Warning System (EWS)',
    category: 'ai',
    flag: 'AI / Backend',
    badge: 'AI & Data Viz',
    status: 'Maintenance & Enhancement',
    businessPurpose: 'Used to monitor and visualize real-time AQMS (Air Quality Monitoring System) sensor data, providing AI-based forecasting and an Early Warning System (EWS) to assist in air quality assessment and public health guidance.',
    role: ['Software Engineer', 'AI/ML Feature Development', 'Project Lead'],
    problem: 'Air quality anomalies and pollution spikes require real-time public and administrative visibility. Raw AQMS sensor feeds needed to be modeled into actionable forecasts and early alerts to help municipal authorities anticipate severe air quality degradation.',
    solution: 'Maintained and upgraded an existing Svelte and Bun/Elysia dashboard. Integrated LLM-based data modeling and forecasting in collaboration with academic researchers, improving prediction accuracy by approximately 15%, and enhanced the interactive AI chatbot assistant.',
    technicalChallenges: [
      'Maintaining responsive real-time data streaming from active AQMS sensor stations',
      'Implementing Early Warning System visualization based on AI/LLM predictive modeling',
      'Collaborating with academic researchers to optimize forecasting algorithms, yielding a 15% accuracy gain',
      'Coordinating timelines and feature requirements across government institutions and cross-functional teams'
    ],
    keyContributions: [
      'Developed the Early Warning System (EWS) feature using LLM-based predictive data modeling',
      'Implemented real-time sensor measurement visualizations with Svelte, Tailwind CSS, and Google Maps API',
      'Enhanced the AI chatbot assistant to deliver accurate, contextual responses for environmental queries',
      'Constructed backend services using Elysia, Bun, Prisma, and PostgreSQL with sub-second response times',
      'Collaborated on AI/ML forecasting initiatives resulting in an approximate 15% improvement in accuracy'
    ],
    metrics: [
      { label: 'Forecast Accuracy', value: '+15%', desc: 'Improvement through AI/ML research' },
      { label: 'Data Source', value: 'Real-time AQMS', desc: 'Continuous environmental sensor telemetry' },
      { label: 'Backend Engine', value: 'Bun + Elysia', desc: 'High-throughput TypeScript runtime' },
      { label: 'EWS Engine', value: 'LLM Assisted', desc: 'Early warning anomaly alerts' }
    ],
    stack: ['Svelte', 'TailwindCSS', 'Google Maps API', 'Elysia', 'Bun', 'Prisma', 'PostgreSQL', 'Redis', 'JWT', 'Swagger', 'LLM'],
    architecture: {
      flowDescription: 'AQMS sensor data is processed and served through backend APIs to the interactive dashboard, where real-time measurements are visualized on charts and maps. AI/LLM-based processing is used for data modeling, forecasting and Early Warning System (EWS) visualization.',
      steps: [
        { title: 'AQMS Sensors', desc: 'Air quality monitoring sensors generate environmental data for continuous analysis', tag: 'Data Source' },
        { title: 'Backend API', desc: 'Elysia and Bun-based backend processes and exposes AQMS data through APIs with Prisma and PostgreSQL', tag: 'Backend' },
        { title: 'Real-time Dashboard', desc: 'Svelte-based dashboard visualizes sensor measurements through interactive charts and Google Maps', tag: 'Visualization' },
        { title: 'AI/LLM Forecasting', desc: 'LLM-based modeling processes sensor data to generate forecasting results for air quality conditions', tag: 'AI/ML' },
        { title: 'Early Warning System', desc: 'Forecasting results are visualized in the dashboard to provide early indications of air quality conditions', tag: 'EWS' },
        { title: 'AI Chatbot', desc: 'Interactive AI assistant provides intelligent contextual answers according to project requirements', tag: 'AI Assistant' }
      ]
    },
    liveUrl: 'https://dashboard.greenteams.co/',
    imageUrl: '/assets/projects/dpu.png',
    screenshots: [
      { title: 'Air Quality Conversational AI Assistant', url: '/assets/projects/dpu-chatbot.png', caption: 'Interactive assistant providing environmental index analysis and health advisories' }
    ],
    downloads: {
      primary: { label: 'Download AQMS Dashboard Architecture (.md)', type: 'spec' },
      secondary: { label: 'Download EWS Forecasting Config (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'trusur-erp',
    title: 'Trusur ERP (Enterprise Resource Planning)',
    subtitle: 'Integrated web-based ERP system supporting core enterprise operations, procurement, and inventory management',
    category: 'erp',
    flag: 'ERP',
    badge: 'Enterprise Platform',
    status: 'Maintenance & Enhancement',
    businessPurpose: 'Web-based application supporting Enterprise Resource Planning (ERP) and business operational processes, procurement, asset tracking, and team workflows.',
    role: ['Software Engineer'],
    problem: 'Enterprise business operations involved complex inventory tracking, supplier purchasing, and inter-departmental approval workflows that required reliable bug fixes, feature adaptations, and seamless data consistency.',
    solution: 'Maintained and continuously enhanced the production web-based ERP system. Resolved critical operational bugs, adapted existing workflows based on user feedback, and added new business modules for changing enterprise requirements.',
    technicalChallenges: [
      'Maintaining high reliability across interrelated ERP modules (procurement, inventory, billing)',
      'Resolving system issues quickly to prevent operational bottlenecks in warehouse and finance departments',
      'Implementing new business logic without breaking backward compatibility of existing records'
    ],
    keyContributions: [
      'Maintained existing web-based ERP features and resolved operational software bugs',
      'Modified functionality according to dynamic user and business operational requirements',
      'Implemented feature additions supporting evolving procurement and inventory workflows',
      'Conducted ongoing database maintenance, query adjustments, and system enhancements'
    ],
    metrics: [
      { label: 'System Class', value: 'Enterprise ERP', desc: 'Integrated multi-module business platform' },
      { label: 'Workflows', value: 'End-to-End', desc: 'Procurement, inventory, and operations' },
      { label: 'Reliability', value: 'Production SLA', desc: 'Zero disruption during feature updates' },
      { label: 'Security', value: 'RBAC', desc: 'Role-based access permissions' }
    ],
    stack: ['Web Application', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST API'],
    architecture: {
      flowDescription: 'Web-based ERP application supporting business and operational processes through integrated modules and features.',
      steps: [
        { title: 'ERP Application Core', desc: 'Web-based application providing functionality for managing business and operational processes', tag: 'Application' },
        { title: 'Feature Maintenance', desc: 'Maintained existing features and modified functionality based on operational and user requirements', tag: 'Maintenance' },
        { title: 'Bug Fixing', desc: 'Identified and fixed application issues to improve system reliability and user experience', tag: 'Bug Fix' },
        { title: 'Feature Enhancement', desc: 'Implemented new features and enhanced existing functionality based on changing business needs', tag: 'Enhancement' }
      ]
    },
    liveUrl: 'https://dashboards.trusur.tech/',
    imageUrl: '/assets/projects/erp-login.png',
    screenshots: [
      { title: 'ERP Operational & Financial Dashboard', url: '/assets/projects/erp-menu.png', caption: 'Executive overview of daily transactions, active sales orders, and balance sheets' },
      { title: 'ERP Procedures Menu', url: '/assets/projects/erp-menu-1.png', caption: 'Procedur menu' }

    ],
    downloads: {
      primary: { label: 'Download Trusur ERP Overview (.md)', type: 'spec' },
      secondary: { label: 'Download Module Flow Spec (.json)', type: 'code' }
    },
    featured: false
  },
  {
    id: 'dashboard-aqms-legacy',
    title: 'Dashboard AQMS (Performance & Database Optimization)',
    subtitle: 'Real-time air monitoring web application optimized from 4-minute query lag down to sub-20 seconds',
    category: 'maintenance',
    flag: 'Maintenance',
    badge: 'Query Optimization',
    status: 'Maintenance & Enhancement',
    businessPurpose: 'Used to monitor AQMS (Air Quality Monitoring System) data in real-time through a web application.',
    role: ['Software Engineer', 'Backend Developer'],
    problem: 'Critical API endpoints suffered from extreme performance degradation, taking up to 4 minutes per request due to N+1 query loops, missing database indexes, and duplicate rows that drove database storage utilization to approximately 100%.',
    solution: 'Conducted systematic database profiling and query optimization on CodeIgniter 4 and MySQL. Eliminated N+1 query patterns, re-indexed key timestamp and sensor columns, and restructured data access strategies from O(n) to O(1), slashing API latency by 91.7% and freeing 80% of database storage.',
    technicalChallenges: [
      'Eliminating severe N+1 query loops on high-traffic reporting endpoints',
      'Resolving 100% database storage saturation caused by missing indexes and redundant data scans',
      'Optimizing query plans on live production systems without incurring operational downtime'
    ],
    keyContributions: [
      'Identified and eliminated N+1 query loops across critical API endpoints',
      'Reduced API response times from approximately 4 minutes to under 20 seconds (91.7% latency reduction)',
      'Improved computational complexity of critical business processes from O(n) to O(1)',
      'Identified and cleaned duplicate data and resolved index omission bottlenecks',
      'Reduced database storage utilization from approximately 100% down to 20%',
      'Conducted ongoing maintenance, bug fixes, and feature enhancements'
    ],
    metrics: [
      { label: 'API Response Time', value: '4m → <20s', desc: '91.7% reduction in query latency' },
      { label: 'Storage Utilization', value: '100% → 20%', desc: 'Restored server headroom via indexing' },
      { label: 'Complexity', value: 'O(n) → O(1)', desc: 'Optimized algorithmic data access' },
      { label: 'N+1 Queries', value: '0 Loop Calls', desc: 'Eliminated redundant relational lookups' }
    ],
    stack: ['CodeIgniter 4', 'PHP', 'MySQL', 'Database Indexing', 'Query Optimization'],
    architecture: {
      flowDescription: 'AQMS monitoring data is retrieved through backend APIs and processed using CodeIgniter 4 before being delivered to the web dashboard. Performance bottlenecks were addressed through query optimization, improved data access strategies, and database indexing.',
      steps: [
        { title: 'AQMS Data Source', desc: 'Air quality monitoring data is collected and made available for real-time monitoring', tag: 'Data Source' },
        { title: 'CodeIgniter API', desc: 'CodeIgniter 4 backend processes and serves AQMS monitoring data through application endpoints', tag: 'Backend' },
        { title: 'Query Optimization', desc: 'Resolved N+1 query issues and improved data access strategies to reduce API processing time', tag: 'Performance' },
        { title: 'Database Indexing', desc: 'Added and optimized database indexes to improve query performance and reduce resource usage', tag: 'Database' },
        { title: 'AQMS Dashboard', desc: 'Web-based dashboard displays processed AQMS data for real-time monitoring', tag: 'Visualization' }
      ]
    },
    liveUrl: 'https://aqms.trusur.tech/login',
    imageUrl: '/assets/projects/aqms-login.png',
    screenshots: [
      { title: 'Reports', url: '/assets/projects/aqms-report.png', caption: 'Comprehensive reports on AQMS data and analytics' },
      { title: 'Maps', url: '/assets/projects/aqms-maps.png', caption: 'Maps showing AQMS sensor locations and data visualization' }
    ],
    downloads: {
      primary: { label: 'Download Optimization Case Study (.md)', type: 'spec' },
      secondary: { label: 'Download SQL Indexing Benchmark (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'efs-aqms-edge',
    title: 'EFS - AQMS Edge System',
    subtitle: 'Autonomous on-site Linux edge computing platform for real-time AQMS sensor telemetry acquisition and synchronization',
    category: 'install',
    flag: 'Install & Cloud',
    badge: 'IoT & Edge Computing',
    status: 'Maintenance & Enhancement',
    businessPurpose: 'Used as an edge system installed at on-site AQMS hardware devices to read, process, and transmit sensor measurements to the centralized AQMS Dashboard for unified monitoring.',
    role: ['Software Engineer', 'System Integration & Deployment'],
    problem: 'Air quality sensor instruments deployed at 30+ physical locations required a resilient, autonomous edge system to interface with hardware sensors over PLC and serial communication, handle network disconnects, and ensure data delivery to the central server.',
    solution: 'Deployed and maintained the Linux-based EFS edge system across 30+ physical AQMS stations. Developed Python background daemons for serial/USB data acquisition, scheduled jobs, and configured remote troubleshooting via TeamViewer.',
    technicalChallenges: [
      'Installed and configured Linux operating systems and runtime environments on on-site hardware',
      'Interfaced with industrial AQMS sensors through PLC and serial/USB communication hardware',
      'Handled dynamic sensor calibration changes and evolving data output formats',
      'Configured autonomous boot recovery and unattended remote access for troubleshooting'
    ],
    keyContributions: [
      'Installed and configured EFS edge application at 30+ physical sensor locations across Indonesia',
      'Configured Linux MX operating systems and lightweight runtime dependencies on edge hardware',
      'Built and maintained Python services to continuously read and parse sensor datastreams',
      'Configured cron scheduled jobs and auto-startup scripts for resilient unattended operation',
      'Configured secure remote access via TeamViewer for swift on-site and remote troubleshooting',
      'Guaranteed consistent data delivery to the centralized AQMS Dashboard platform'
    ],
    metrics: [
      { label: 'Deployed Devices', value: '30+ Stations', desc: 'On-site Linux edge units operating 24/7' },
      { label: 'Hardware Interface', value: 'PLC & Serial', desc: 'USB, RS-232, and Modbus ingestion' },
      { label: 'Edge Resilience', value: 'Store & Forward', desc: 'Buffer data locally during internet loss' },
      { label: 'Remote Support', value: 'TeamViewer', desc: 'Unattended remote management' }
    ],
    stack: ['Python', 'Code Igniter', 'Linux', 'Apache', 'MariaDB', 'Cron', 'Serial Communication', 'TeamViewer'],
    imageUrl: '/assets/projects/efs-sensor.png',
    screenshots: [
      { title: 'Linux MX', url: '/assets/projects/efs-linux.png', caption: 'Linux-based operating system used for development, server administration, system configuration, troubleshooting, and deployment.' },
      { title: 'AQMS-EFS Sensor', url: '/assets/projects/efs-sensor.png', caption: 'Store-and-forward architecture ensuring zero telemetry packet loss during outages' },
      { title: 'AQMS-EFS Warehouse', url: '/assets/projects/efs-warehouse.png', caption: 'Store-and-forward architecture ensuring zero telemetry packet loss during outages' },
    ],
    architecture: {
      flowDescription: 'AQMS sensors connected through PLC and communication hardware send measurement data to the EFS edge device. The EFS system reads and processes the sensor data through Python services, stores or manages the data locally, and forwards the processed data to the centralized AQMS Dashboard.',
      steps: [
        { title: 'AQMS Sensors', desc: 'Environmental sensors installed at customer locations generate air quality monitoring data', tag: 'Hardware' },
        { title: 'PLC & Communication', desc: 'Sensor devices communicate with the edge system through PLC and serial/USB interfaces', tag: 'Device Interface' },
        { title: 'EFS Edge Device', desc: 'Linux-based edge device installed at the sensor location receives and processes raw sensor data', tag: 'Edge System' },
        { title: 'Python Services', desc: 'Python background daemons continuously read, validate, and process incoming telemetry', tag: 'Data Processing' },
        { title: 'Data Transmission', desc: 'Processed data is transmitted reliably from on-site EFS units to the centralized dashboard', tag: 'Delivery' },
        { title: 'Remote Support', desc: 'TeamViewer is configured to support remote monitoring and troubleshooting of edge units', tag: 'Remote Ops' }
      ]
    },
    downloads: {
      primary: { label: 'Download EFS Edge System Specs (.md)', type: 'spec' },
      secondary: { label: 'Download Edge Daemons Config (.json)', type: 'code' }
    },
    featured: false
  },
  {
    id: 'caltax-platform',
    title: 'Caltax – Tax Processing & AI Assistant Platform',
    subtitle: 'Microservices taxation platform with centralized calculation engine and RAG-based AI tax advisory assistant',
    category: 'ai',
    flag: 'AI / Backend',
    badge: 'Microservices & RAG',
    status: 'Continuously maintained / enhanced',
    businessPurpose: 'Taxation platform providing user management, taxation master data, automated tax calculation logic, and an interactive RAG-based AI Assistant to help taxpayers navigate Indonesian tax regulations.',
    role: ['Backend Developer', 'AI/LLM Feature Development', 'CI/CD & Deployment'],
    problem: 'Tax calculations in Indonesia involve intricate, frequently amended regulations and extensive master reference data. Users required an accurate calculation engine as well as an intelligent assistant capable of citing specific tax laws without LLM hallucination.',
    solution: 'Designed a microservices architecture separating User, Master, Tax Calculation, and AI services using Python FastAPI. Built a Retrieval-Augmented Generation (RAG) assistant using ChromaDB for vector retrieval, Ollama with Qwen2.5, and Server-Sent Events (SSE) streaming.',
    technicalChallenges: [
      'Decoupled system into autonomous microservices for user, master, tax, and AI workloads',
      'Designed vector chunking and embeddings retrieval for complex Indonesian tax regulations',
      'Implemented Server-Sent Events (SSE) streaming for real-time interactive AI chatbot responses',
      'Orchestrated CI/CD deployment pipelines on Linux servers with Nginx reverse proxy and PM2'
    ],
    keyContributions: [
      'Architected microservices architecture separating authentication, master data, calculation, and AI',
      'Engineered Tax Calculation Service implementing accurate business logic and rules',
      'Implemented RAG-based AI chatbot using FastAPI, Chroma vector store, and Qwen2.5 LLM',
      'Built streaming response pipeline (SSE) for low-latency conversational AI experience',
      'Configured Linux production servers, PM2 process management, Nginx SSL, and CI/CD pipelines'
    ],
    metrics: [
      { label: 'Architecture', value: 'Microservices', desc: 'Independent domain services' },
      { label: 'AI Pipeline', value: 'RAG + Chroma', desc: 'Semantic document vector retrieval' },
      { label: 'AI Response', value: 'SSE Streaming', desc: 'Real-time interactive token stream' },
      { label: 'Production Ops', value: 'PM2 + Nginx', desc: 'Linux deployment with CI/CD' }
    ],
    stack: ['Python', 'FastAPI', 'REST API', 'Microservices', 'PostgreSQL', 'LLM', 'RAG', 'Vector Database', 'ChromaDB', 'Ollama', 'CI/CD', 'Linux', 'PM2', 'Nginx'],
    architecture: {
      flowDescription: 'Caltax uses a microservices architecture where user management, master data, tax processing, and AI functionality are handled by separate services communicating through APIs to deliver unified workflows.',
      steps: [
        { title: 'User Service', desc: 'Handles user registration, authentication, login, and profile management', tag: 'Auth' },
        { title: 'Master Service', desc: 'Provides master rates, reference data, and requirement matrices for taxation workflows', tag: 'Master Data' },
        { title: 'Tax Service', desc: 'Processes input data and executes primary tax computation and business logic', tag: 'Computation' },
        { title: 'AI Service', desc: 'RAG-based AI assistant retrieves relevant tax legal knowledge and generates contextual responses', tag: 'AI / RAG' },
        { title: 'AI Knowledge Layer', desc: 'Uses document embeddings with ChromaDB and LLM to ensure accurate citation', tag: 'Knowledge Base' }
      ]
    },
    applications: [
      { name: 'Caltax Master Service', url: 'https://master-caltax-dev.cetta.tech/' },
      { name: 'Caltax User Service', url: 'https://user-caltax-dev.cetta.tech/' },
      { name: 'Caltax Tax Service', url: 'https://tax-caltax-dev.cetta.tech/' },
      { name: 'Caltax AI Service', url: 'https://ai-caltax-dev.cetta.tech/' }
    ],
    imageUrl: '/assets/projects/caltax-login.png',
    screenshots: [
      {
        title: 'Caltax Login',
        url: '/assets/projects/caltax-login.png',
        caption: 'Secure user authentication for accessing the Caltax application and its tax-related features'
      },
      {
        title: 'Caltax Dashboard',
        url: '/assets/projects/caltax-dashboard.png',
        caption: 'Main dashboard providing access to tax calculation, AI assistant, and other application features'
      },
      {
        title: 'Caltax AI Chat',
        url: '/assets/projects/caltax-ai-chat.png',
        caption: 'AI-powered chat assistant for answering tax-related questions and retrieving relevant Indonesian tax regulations'
      },
      {
        title: 'AI Service — FastAPI & Swagger',
        url: '/assets/projects/caltax-ai-service.png',
        caption: 'FastAPI-based AI service with Swagger documentation for testing and managing AI-related API endpoints'
      }
    ],
    downloads: {
      primary: { label: 'Download Caltax Architecture Spec (.md)', type: 'spec' },
      secondary: { label: 'Download Microservices Topology (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'saas-pos-umkm',
    title: 'SaaS POS UMKM (Point of Sale Platform)',
    subtitle: 'Cloud-native point of sale solution empowering food stalls, angkringan, and small F&B businesses to digitize sales',
    category: 'website',
    flag: 'Website',
    badge: 'Cloud SaaS & POS',
    status: 'In Development',
    businessPurpose: 'SaaS-based Point of Sale system designed for food stalls (warung), angkringan, cafes, and small restaurants that previously relied on manual pen-and-paper transaction recording.',
    role: ['Full-Stack Developer', 'Product Development'],
    problem: 'Small food and beverage entrepreneurs often experience untracked revenue leakage, inaccurate inventory counts, and time-consuming manual bookkeeping due to reliance on physical paper logs and cash envelopes.',
    solution: 'Engineered a modern, accessible SaaS POS web application with an intuitive cashier touch-screen interface, real-time sales ledger, and menu/inventory catalog accessible on budget mobile devices and web browsers.',
    technicalChallenges: [
      'Designing an ultra-responsive, intuitive touch interface optimized for fast-paced food counter operations',
      'Structuring multi-tenant data isolation for independent store owners',
      'Implementing lightweight offline-friendly transaction caching and quick receipt generation'
    ],
    keyContributions: [
      'Developed SaaS-based POS web application targeted at small F&B business operations',
      'Created intuitive cashier transaction flows, item variant selection, and payment recording',
      'Built REST API endpoints for catalog management, daily sales reporting, and order history',
      'Deployed live web application prototype on Vercel for user feedback and iteration'
    ],
    metrics: [
      { label: 'Target Market', value: 'Small F&B', desc: 'Warung, angkringan, and cafes' },
      { label: 'Core Impact', value: 'Paperless', desc: 'Digital sales ledger & receipts' },
      { label: 'Platform Type', value: 'Cloud SaaS', desc: 'Multi-tenant web architecture' },
      { label: 'Status', value: 'Active Dev', desc: 'Live deployment on Vercel' }
    ],
    stack: ['React', 'Node.js', 'JavaScript', 'TailwindCSS', 'REST API', 'SaaS Architecture'],
    architecture: {
      flowDescription: 'The SaaS POS platform digitizes day-to-day sales operations for small F&B businesses through a centralized, responsive web application.',
      steps: [
        { title: 'POS Interface', desc: 'Cashier interface for rapid order entry, item selection, and payment calculation', tag: 'Frontend' },
        { title: 'Business Data API', desc: 'Manages items, categories, pricing, and operational transactions via REST API', tag: 'API' },
        { title: 'Cloud SaaS Platform', desc: 'Provides centralized web services accessible across any browser or smartphone', tag: 'Cloud' }
      ]
    },
    liveUrl: 'https://saas-pos-umkm.vercel.app/',
    imageUrl: '/assets/projects/pos-login.png',
    screenshots: [
      {
        'title': 'POS UMKM Login',
        'url': '/assets/projects/pos-login.png',
        'caption': 'Halaman autentikasi pengguna untuk mengakses sistem POS dan fitur manajemen bisnis UMKM'
      },
      {
        'title': 'POS UMKM Dashboard',
        'url': '/assets/projects/pos-dashboard.png',
        'caption': 'Dashboard utama setelah login untuk mengakses berbagai fitur dan memantau aktivitas bisnis dalam satu tampilan'
      }
    ],
    downloads: {
      primary: { label: 'Download POS System Specs (.md)', type: 'spec' },
      secondary: { label: 'Download Product Blueprint (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'sukavillage-platform',
    title: 'Suka Village Hospitality & Destination Platform',
    subtitle: 'Comprehensive digital hospitality platform showcasing accommodation, restaurant dining, activities, and private events',
    category: 'website',
    flag: 'Website',
    badge: 'Full-Stack Web',
    status: 'In Development',
    businessPurpose: 'Digital platform showcasing Suka Village as a premier hospitality destination providing boutique accommodations, restaurant dining, outdoor activities, and event packages (weddings, corporate retreats, gatherings).',
    role: ['Project Lead', 'Full-Stack Developer'],
    problem: 'Suka Village needed an elegant, modern digital presence to unify its accommodation villas, restaurant dining menu, curated recreational activities, and event inquiries into a cohesive, user-friendly platform.',
    solution: 'Architected and developed a full-stack web platform utilizing Vue.js for the dynamic frontend client and Express.js for the REST API backend service, featuring interactive catalogs and inquiry forms.',
    technicalChallenges: [
      'Structuring rich content hierarchies across accommodations, dining, outdoor experiences, and events',
      'Ensuring responsive media delivery and smooth component transitions on mobile devices',
      'Designing extensible backend APIs prepared for upcoming direct booking and reservation integrations'
    ],
    keyContributions: [
      'Developed the frontend application using Vue.js with component-driven architecture',
      'Engineered backend services and REST APIs with Express.js for content delivery',
      'Designed responsive catalog views for villa suites, dining menus, and event packages',
      'Deployed preview and production builds on Vercel for stakeholder reviews'
    ],
    metrics: [
      { label: 'Frontend Stack', value: 'Vue.js', desc: 'Responsive component-based client' },
      { label: 'Backend API', value: 'Express.js', desc: 'Lightweight REST services' },
      { label: 'Platform Scope', value: 'Hospitality', desc: 'Stays, dining, and retreat events' },
      { label: 'Status', value: 'Active Dev', desc: 'Live web deployment on Vercel' }
    ],
    stack: ['Vue.js', 'Express.js', 'JavaScript', 'Node.js', 'TailwindCSS', 'REST API'],
    architecture: {
      flowDescription: 'The Suka Village platform uses a full-stack architecture with a Vue.js frontend communicating with an Express.js backend through REST APIs to serve dynamic destination catalogs.',
      steps: [
        { title: 'Vue.js Frontend', desc: 'Provides the user-facing website presenting accommodation, dining, activity, and event information', tag: 'Frontend' },
        { title: 'Express.js Backend', desc: 'Provides backend services and REST APIs for destination content and inquiry workflows', tag: 'Backend' },
        { title: 'REST API Gateway', desc: 'Connects frontend components with backend services and structured data', tag: 'API' }
      ]
    },
    liveUrl: 'https://sukavillage-v7.vercel.app/',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    screenshots: [
      { title: 'Villa Lodging & Accommodation Catalog', url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80', caption: 'Visual gallery with amenity breakdowns, guest capacity limits, and pricing' },
      { title: 'Restaurant Dining & Outdoor Activities', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80', caption: 'Culinary dining selections and corporate retreat packages' },
      { title: 'Private Event Reservation Request Form', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80', caption: 'Inquiry and scheduling workflow for weddings and group gatherings' }
    ],
    downloads: {
      primary: { label: 'Download Suka Village Specs (.md)', type: 'spec' },
      secondary: { label: 'Download Platform Schema (.json)', type: 'code' }
    },
    featured: false
  }
];
