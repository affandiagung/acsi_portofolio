import React from 'react';
import { Project } from '../types';
import { ShoppingCart, Store, FileText, CheckCircle2, Server, ShieldCheck, Terminal, Cpu, Database, Cloud, Activity, Sparkles, ExternalLink } from 'lucide-react';

interface ProjectVisualProps {
  project: Project;
  mode?: 'thumbnail' | 'showcase';
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project, mode = 'thumbnail' }) => {
  const isShowcase = mode === 'showcase';
  const [imageError, setImageError] = React.useState(false);

  React.useEffect(() => {
    setImageError(false);
  }, [project.imageUrl, project.screenshots]);

  const displayImage = !imageError ? (project.imageUrl || project.screenshots?.[0]?.url) : null;

  // If a real image URL is provided (img) and not errored, render it cleanly
  if (displayImage && !displayImage.startsWith('mock:')) {
    return (
      <div className={`relative overflow-hidden w-full ${isShowcase ? 'h-64 sm:h-80' : 'h-48'} rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center group shadow-2xs`}>
        <img
          src={displayImage}
          alt={project.title}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 z-10 px-2.5 py-1 text-[11px] font-mono font-semibold bg-white/95 dark:bg-slate-900/90 hover:bg-white text-slate-900 dark:text-white rounded-md border border-slate-200 dark:border-slate-700 shadow-sm backdrop-blur-xs flex items-center gap-1.5 transition-colors"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    );
  }

  // Render rich domain-specific mockups with clean, realistic UI previews
  switch (project.id) {
    case 'saas-pos-umkm':
      return (
        <div className={`relative overflow-hidden w-full ${isShowcase ? 'h-64 sm:h-84 p-4' : 'h-44 p-3'} rounded-xl bg-gradient-to-br from-blue-950/90 via-slate-900 to-slate-950 border border-blue-500/30 text-white font-sans flex flex-col justify-between shadow-inner select-none`}>
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-blue-800/40">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-blue-500/20 text-blue-400">
                <Store className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold font-mono tracking-tight text-blue-200">
                POS Kasir UMKM
              </span>
              <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                Live Store
              </span>
            </div>
            {project.liveUrl && (
              <span className="text-[10px] font-mono text-blue-300 underline underline-offset-2">
                saas-pos-umkm.vercel.app
              </span>
            )}
          </div>

          {/* POS Interface Mockup Grid */}
          <div className="grid grid-cols-3 gap-2 my-auto py-1">
            <div className="col-span-2 grid grid-cols-2 gap-1.5">
              {[
                { name: 'Kopi Susu Aren', price: 'Rp 18.000', tag: 'Beverage' },
                { name: 'Roti Bakar Keju', price: 'Rp 15.000', tag: 'Snack' },
                { name: 'Beras Premium 5kg', price: 'Rp 72.000', tag: 'Sembako' },
                { name: 'Minyak Goreng 2L', price: 'Rp 34.000', tag: 'Sembako' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-blue-900/50 rounded-lg p-2 flex flex-col justify-between">
                  <div className="text-[10px] font-semibold text-slate-200 truncate">{item.name}</div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">{item.price}</span>
                    <span className="text-[8px] font-mono text-slate-500">+{idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Cashier Cart Drawer */}
            <div className="bg-blue-950/60 border border-blue-800/40 rounded-lg p-2 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[9px] font-mono text-blue-300">
                  <ShoppingCart className="w-3 h-3" />
                  <span>Cart (3 items)</span>
                </div>
                <div className="text-[10px] text-slate-300 flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono font-bold text-white">Rp 105.000</span>
                </div>
              </div>

              <div className="mt-1 pt-1 border-t border-blue-800/40">
                <div className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[10px] text-center py-1 rounded shadow-sm">
                  Bayar / Checkout ➜
                </div>
              </div>
            </div>
          </div>

          {/* Footer Metrics */}
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-blue-900/40">
            <span>Inventory Tracking: Instant</span>
            <span className="text-emerald-400 font-semibold">100% Mobile Ready</span>
          </div>
        </div>
      );

    case 'sukavillage-portal':
      return (
        <div className={`relative overflow-hidden w-full ${isShowcase ? 'h-64 sm:h-84 p-4' : 'h-44 p-3'} rounded-xl bg-gradient-to-br from-emerald-950/90 via-slate-900 to-teal-950 border border-emerald-500/30 text-white font-sans flex flex-col justify-between shadow-inner select-none`}>
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-emerald-800/40">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-emerald-500/20 text-emerald-400">
                <Store className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold font-mono tracking-tight text-emerald-200">
                SukaVillage Portal
              </span>
              <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                Desa Digital
              </span>
            </div>
            {project.liveUrl && (
              <span className="text-[10px] font-mono text-emerald-300 underline underline-offset-2">
                sukavillage-v1.vercel.app
              </span>
            )}
          </div>

          {/* Village Sections Preview */}
          <div className="my-auto space-y-2 py-1">
            <div className="bg-emerald-900/30 border border-emerald-800/40 rounded-lg p-2.5 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-white">Selamat Datang di Desa SukaVillage</div>
                <div className="text-[9px] text-emerald-300/80">Transparansi Dana, Layanan Kependudukan, & Potensi UMKM Lokal</div>
              </div>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                Online
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-slate-900/80 border border-emerald-900/40 text-center">
                <div className="text-[11px] font-bold text-white">1.840+</div>
                <div className="text-[8px] font-mono text-slate-400">Populasi Warga</div>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-emerald-900/40 text-center">
                <div className="text-[11px] font-bold text-emerald-400">24 Jam</div>
                <div className="text-[8px] font-mono text-slate-400">Surat Online</div>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-emerald-900/40 text-center">
                <div className="text-[11px] font-bold text-teal-400">12 UMKM</div>
                <div className="text-[8px] font-mono text-slate-400">Katalog Produk</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-emerald-900/40">
            <span>Template Responsive</span>
            <span className="text-emerald-400 font-semibold">Tailwind & Vercel</span>
          </div>
        </div>
      );

    case 'ai-tax-assistant':
      return (
        <div className={`relative overflow-hidden w-full ${isShowcase ? 'h-64 sm:h-84 p-4' : 'h-44 p-3'} rounded-xl bg-gradient-to-br from-purple-950/90 via-slate-900 to-slate-950 border border-purple-500/30 text-white font-sans flex flex-col justify-between shadow-inner select-none`}>
          <div className="flex items-center justify-between pb-2 border-b border-purple-800/40">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-purple-500/20 text-purple-400">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold font-mono tracking-tight text-purple-200">
                FastAPI Tax RAG Engine
              </span>
              <span className="text-[9px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30 px-1.5 py-0.2 rounded">
                ChromaDB + Ollama
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">SSE Stream: &lt;350ms</span>
          </div>

          <div className="my-auto space-y-2 py-1">
            <div className="bg-slate-900/80 border border-purple-900/40 rounded-lg p-2 space-y-1">
              <div className="text-[9px] font-mono text-purple-300">USER QUERY:</div>
              <div className="text-[11px] text-slate-200 leading-snug">
                "Berapa tarif PPh 21 TER Kategori A untuk penghasilan bruto Rp 7.500.000?"
              </div>
            </div>

            <div className="bg-purple-950/50 border border-purple-800/40 rounded-lg p-2 space-y-1">
              <div className="flex items-center justify-between text-[9px] font-mono text-emerald-400">
                <span>RAG CITATION: PMK No. 168 / 2023 Pasal 5</span>
                <span className="text-purple-300">Cosine Sim: 0.94</span>
              </div>
              <div className="text-[10px] text-slate-300">
                Tarif TER A: 1.25%. Pajak terutang = Rp 7.500.000 × 1.25% = <strong>Rp 93.750</strong>.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-purple-900/40">
            <span>FastAPI + Vector Embeddings</span>
            <span className="text-emerald-400 font-semibold">Zero Hallucination</span>
          </div>
        </div>
      );

    case 'trusur-erp':
      return (
        <div className={`relative overflow-hidden w-full ${isShowcase ? 'h-64 sm:h-84 p-4' : 'h-44 p-3'} rounded-xl bg-gradient-to-br from-indigo-950/90 via-slate-900 to-slate-950 border border-indigo-500/30 text-white font-sans flex flex-col justify-between shadow-inner select-none`}>
          <div className="flex items-center justify-between pb-2 border-b border-indigo-800/40">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-indigo-500/20 text-indigo-400">
                <Database className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold font-mono tracking-tight text-indigo-200">
                Trusur Enterprise ERP
              </span>
              <span className="text-[9px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1.5 py-0.2 rounded">
                Inventory & Procurement
              </span>
            </div>
            {project.liveUrl && (
              <span className="text-[10px] font-mono text-indigo-300 underline underline-offset-2">
                dashboards.trusur.tech
              </span>
            )}
          </div>

          <div className="my-auto space-y-1.5 py-1">
            <div className="grid grid-cols-3 gap-1.5 text-[9px] font-mono text-slate-300">
              <div className="p-1.5 rounded bg-slate-900/80 border border-indigo-900/40">
                <div className="text-slate-400">Inventory Items</div>
                <div className="text-[11px] font-bold text-white">1,420 SKU</div>
              </div>
              <div className="p-1.5 rounded bg-slate-900/80 border border-indigo-900/40">
                <div className="text-slate-400">Purchase Orders</div>
                <div className="text-[11px] font-bold text-emerald-400">98% Approved</div>
              </div>
              <div className="p-1.5 rounded bg-slate-900/80 border border-indigo-900/40">
                <div className="text-slate-400">Approval Speed</div>
                <div className="text-[11px] font-bold text-indigo-300">3x Faster</div>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-indigo-800/40 rounded p-1.5 text-[9px] font-mono space-y-1">
              <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-0.5">
                <span>PO Number</span>
                <span>Workflow Stage</span>
                <span>Status</span>
              </div>
              <div className="flex items-center justify-between text-slate-200">
                <span>PO-2024-089</span>
                <span>Director Approval</span>
                <span className="text-emerald-400 font-bold">✓ Approved</span>
              </div>
              <div className="flex items-center justify-between text-slate-200">
                <span>PO-2024-092</span>
                <span>Finance Verification</span>
                <span className="text-amber-400">● In Review</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-indigo-900/40">
            <span>Role-Based Permissions (RBAC)</span>
            <span className="text-emerald-400 font-semibold">100% Audit Trail</span>
          </div>
        </div>
      );

    case 'cloud-vps-deploy':
      return (
        <div className={`relative overflow-hidden w-full ${isShowcase ? 'h-64 sm:h-84 p-4' : 'h-44 p-3'} rounded-xl bg-gradient-to-br from-cyan-950/90 via-slate-900 to-slate-950 border border-cyan-500/30 text-white font-mono flex flex-col justify-between shadow-inner select-none`}>
          <div className="flex items-center justify-between pb-2 border-b border-cyan-800/40">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-cyan-500/20 text-cyan-400">
                <Cloud className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold tracking-tight text-cyan-200">
                Cloud VPS & Server Ops
              </span>
              <span className="text-[9px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-1.5 py-0.2 rounded">
                AWS + IDCloudHost
              </span>
            </div>
            <span className="text-[10px] text-emerald-400">Nginx + SSL: OK</span>
          </div>

          <div className="my-auto bg-slate-950/90 border border-cyan-900/50 rounded-lg p-2 space-y-1 text-[10px]">
            <div className="text-slate-400 flex items-center gap-1">
              <span className="text-cyan-400">root@vps-idcloudhost:~#</span>
              <span className="text-white">nginx -t && certbot --nginx -d app.com</span>
            </div>
            <div className="text-emerald-400 text-[9px]">
              [OK] syntax is ok & test is successful · SSL Certificate installed (A+ rating)
            </div>
            <div className="text-slate-400 flex items-center gap-1 pt-1">
              <span className="text-cyan-400">root@vps-idcloudhost:~#</span>
              <span className="text-white">docker compose ps</span>
            </div>
            <div className="text-slate-300 text-[9px] flex justify-between">
              <span>api-backend (FastAPI/Laravel)</span>
              <span className="text-emerald-400">Up (healthy)</span>
            </div>
            <div className="text-slate-300 text-[9px] flex justify-between">
              <span>db-postgres (Port 5432)</span>
              <span className="text-emerald-400">Up 45 days</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-cyan-900/40">
            <span>Reverse Proxy & SSL Automation</span>
            <span className="text-emerald-400 font-semibold">99.9% Production SLA</span>
          </div>
        </div>
      );

    case 'software-maintenance-ops':
      return (
        <div className={`relative overflow-hidden w-full ${isShowcase ? 'h-64 sm:h-84 p-4' : 'h-44 p-3'} rounded-xl bg-gradient-to-br from-amber-950/90 via-slate-900 to-slate-950 border border-amber-500/30 text-white font-sans flex flex-col justify-between shadow-inner select-none`}>
          <div className="flex items-center justify-between pb-2 border-b border-amber-800/40">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-amber-500/20 text-amber-400">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold font-mono tracking-tight text-amber-200">
                Maintenance & Troubleshooting
              </span>
              <span className="text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded">
                Bug Fix & CR Engine
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">Zero Downtime</span>
          </div>

          <div className="my-auto space-y-1.5 py-1">
            <div className="bg-slate-900/90 border border-amber-900/40 rounded-lg p-2 space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-amber-400">
                <span>Latency Optimization Benchmark</span>
                <span className="text-emerald-400 font-bold">92% Drop</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono">
                <span className="text-rose-400 line-through">4 min 12 sec</span>
                <span className="text-slate-400">➜</span>
                <span className="text-emerald-400 font-bold text-xs">18.4 sec</span>
                <span className="text-[9px] text-slate-400">(Indexed Materialized Views)</span>
              </div>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 rounded p-1.5 text-[9px] font-mono space-y-0.5">
              <div className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>RESOLVED: Handled client change request on tax rounding rules</span>
              </div>
              <div className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>PATCHED: Nginx memory leak & Redis connection pooling</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-amber-900/40">
            <span>Root-Cause Diagnostic & Patching</span>
            <span className="text-emerald-400 font-semibold">Continuous Uptime</span>
          </div>
        </div>
      );

    case 'bts-monitoring':
      return (
        <div className={`relative overflow-hidden w-full ${isShowcase ? 'h-64 sm:h-84 p-4' : 'h-44 p-3'} rounded-xl bg-gradient-to-br from-slate-950 via-emerald-950/60 to-slate-900 border border-emerald-500/30 text-white font-mono flex flex-col justify-between shadow-inner select-none`}>
          <div className="flex items-center justify-between pb-2 border-b border-emerald-800/40">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-emerald-500/20 text-emerald-400">
                <Activity className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold tracking-tight text-emerald-200">
                BTS Telemetry Platform
              </span>
              <span className="text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.2 rounded">
                10,000+ Nodes
              </span>
            </div>
            <span className="text-[10px] text-emerald-400">3.5 TB / year</span>
          </div>

          <div className="my-auto grid grid-cols-3 gap-2 py-1">
            <div className="p-2 rounded bg-slate-900/80 border border-emerald-900/40 text-center">
              <div className="text-sm font-bold text-white">10K+</div>
              <div className="text-[8px] text-slate-400">Live BTS Sites</div>
            </div>
            <div className="p-2 rounded bg-slate-900/80 border border-emerald-900/40 text-center">
              <div className="text-sm font-bold text-emerald-400">15 min</div>
              <div className="text-[8px] text-slate-400">Sync Cadence</div>
            </div>
            <div className="p-2 rounded bg-slate-900/80 border border-emerald-900/40 text-center">
              <div className="text-sm font-bold text-teal-300">92%</div>
              <div className="text-[8px] text-slate-400">Query Speedup</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-emerald-900/40">
            <span>PostgreSQL Partitioning & Redis</span>
            <span className="text-emerald-400 font-semibold">99.9% SLA</span>
          </div>
        </div>
      );

    default:
      return (
        <div className={`relative overflow-hidden w-full ${isShowcase ? 'h-64 sm:h-84 p-4' : 'h-44 p-3'} rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white font-sans flex flex-col justify-between shadow-inner select-none`}>
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold font-mono text-emerald-400">{project.title}</span>
            <span className="text-[10px] font-mono text-slate-400">{project.badge || project.category}</span>
          </div>
          <div className="my-auto p-3 rounded bg-slate-950/60 border border-slate-800">
            <p className="text-xs text-slate-300 line-clamp-2">{project.subtitle}</p>
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-800">
            <span>{project.stack.slice(0, 3).join(' · ')}</span>
            <span className="text-emerald-400">Active</span>
          </div>
        </div>
      );
  }
};
