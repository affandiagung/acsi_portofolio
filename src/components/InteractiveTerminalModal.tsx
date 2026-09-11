import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Terminal, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';
import { PortfolioData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminalModal: React.FC<InteractiveTerminalModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const { t, language } = useLanguage();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHistory([
      {
        command: 'init',
        output: (
          <div className="space-y-1">
            <p className="text-emerald-400 font-bold">
              Affandi Agung Laksono — Backend Shell v2.4 (x86_64-pc-linux-gnu)
            </p>
            <p className="text-slate-400">
              {language === 'id' ? (
                <>Ketik <span className="text-emerald-300 font-semibold">'help'</span> untuk melihat daftar perintah sistem.</>
              ) : (
                <>Type <span className="text-emerald-300 font-semibold">'help'</span> to view available system commands.</>
              )}
            </p>
          </div>
        ),
      },
    ]);
  }, [language, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    setCommandHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    const parts = raw.split(' ');
    const cmd = parts[0].toLowerCase();

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <p className="text-emerald-400 font-semibold">
              {language === 'id' ? 'Daftar Perintah Tersedia:' : 'Available Commands:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div><span className="text-emerald-300 font-mono">about</span> - {language === 'id' ? 'Latar belakang & profil' : 'Background & story'}</div>
              <div><span className="text-emerald-300 font-mono">projects</span> - {language === 'id' ? 'Sistem produksi ERP, POS UMKM & AI' : 'Production systems & metrics'}</div>
              <div><span className="text-emerald-300 font-mono">skills</span> - {language === 'id' ? 'Stack teknologi & keahlian' : 'Stack & backend technologies'}</div>
              <div><span className="text-emerald-300 font-mono">curl [endpoint]</span> - {language === 'id' ? 'Uji endpoint REST API' : 'Test mock REST API endpoints'}</div>
              <div><span className="text-emerald-300 font-mono">explain analyze</span> - {language === 'id' ? 'Ringkasan optimasi query 4m ke 17s' : 'Database optimization summary'}</div>
              <div><span className="text-emerald-300 font-mono">contact</span> - {language === 'id' ? 'Email, telepon & domisili' : 'Email, phone, and relocation info'}</div>
              <div><span className="text-emerald-300 font-mono">clear</span> - {language === 'id' ? 'Bersihkan terminal' : 'Clear terminal buffer'}</div>
              <div><span className="text-emerald-300 font-mono">exit</span> - {language === 'id' ? 'Tutup terminal' : 'Close terminal console'}</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-1.5 text-slate-300">
            <p><span className="text-emerald-400 font-semibold">{data.personal.name}</span> — {data.personal.roleTitle}</p>
            <p className="text-xs text-slate-400">{data.personal.aboutStory[0]}</p>
            <p className="text-xs text-slate-400">{data.personal.aboutStory[1]}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-slate-300">
            <p className="text-emerald-400 font-semibold">Featured Production Systems:</p>
            {data.projects.map((p) => (
              <div key={p.id} className="border-l-2 border-emerald-500/60 pl-2 text-xs">
                <div className="font-bold text-white">{p.title}</div>
                <div className="text-slate-400">{p.subtitle}</div>
                <div className="text-[11px] text-emerald-400 font-mono">
                  Stack: {p.stack.join(', ')}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            <p className="text-emerald-400 font-semibold">Core Technical Stack:</p>
            <div><span className="text-slate-400">Backend:</span> Python (FastAPI), PHP (Laravel, CodeIgniter), Node.js (NestJS), Bun (Elysia)</div>
            <div><span className="text-slate-400">Databases:</span> PostgreSQL (Partitioning, MatViews), Redis (Caching), MySQL</div>
            <div><span className="text-slate-400">AI & RAG:</span> OpenAI API, LLM Model, Prompt Engineering, Semantic Chunking</div>
            <div><span className="text-slate-400">Infra & DevOps:</span> Docker, Linux (Ubuntu/CentOS), Nginx, GitLab CI/CD</div>
          </div>
        );
        break;

      case 'explain':
        output = (
          <div className="bg-slate-900/90 p-2.5 rounded border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
            <p className="text-rose-400">QUERY BOTTLENECK (Unpartitioned Monolithic Scan):</p>
            <p className="text-slate-500">Seq Scan on raw_telemetry ... Execution Time: 242,180 ms (~4 min)</p>
            <p className="text-emerald-400 pt-1">OPTIMIZED (Monthly Range Partition + MatView):</p>
            <p className="text-slate-300">Index Scan using idx_station_hour on mv_hourly_kpis ... Execution Time: 17,820 ms (17.8s)</p>
            <p className="text-emerald-300 font-bold">Reduction: 92.6% faster with 70% lower database CPU usage.</p>
          </div>
        );
        break;

      case 'curl':
        const endpoint = parts[1] || '/api/v1/health';
        if (endpoint.includes('metrics')) {
          output = (
            <pre className="text-emerald-300 text-[11px] bg-slate-900 p-2 rounded">
{`HTTP/1.1 200 OK
Content-Type: application/json

{
  "telemetry_data_annual": "3.5 TB+",
  "monitored_nodes": "10,000+ base stations",
  "query_speedup": "4m -> 18s (92% reduction)",
  "uptime_sla": "99.9% verified"
}`}
            </pre>
          );
        } else if (endpoint.includes('contact')) {
          output = (
            <pre className="text-emerald-300 text-[11px] bg-slate-900 p-2 rounded">
{`HTTP/1.1 200 OK
Content-Type: application/json

{
  "email": "${data.personal.email}",
  "phone": "${data.personal.phone}",
  "domicile": "${data.personal.domicile}",
  "relocation": "${data.personal.openToRelocation}"
}`}
            </pre>
          );
        } else {
          output = (
            <pre className="text-emerald-300 text-[11px] bg-slate-900 p-2 rounded">
{`HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "healthy",
  "engineer": "${data.personal.name}",
  "uptime": "99.9%",
  "subsystems": {
    "db_postgres": "primary_online",
    "redis": "cache_hit_ratio_98.4%",
    "cems_ingestion": "50_sensors_active"
  }
}`}
            </pre>
          );
        }
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p><span className="text-slate-400">Email:</span> <a href={`mailto:${data.personal.email}`} className="text-emerald-400 underline">{data.personal.email}</a></p>
            <p><span className="text-slate-400">Phone:</span> {data.personal.phone}</p>
            <p><span className="text-slate-400">Location:</span> {data.personal.domicile}</p>
            <p><span className="text-slate-400">Relocation:</span> {data.personal.openToRelocation}</p>
          </div>
        );
        break;

      case 'admin':
        output = (
          <div className="text-amber-300 text-xs space-y-1">
            <p>Admin route available at: <span className="font-mono text-white bg-slate-800 px-1 py-0.5 rounded">/adminpath</span> or <span className="font-mono text-white bg-slate-800 px-1 py-0.5 rounded">#/adminpath</span></p>
            <p className="text-slate-400 text-[11px]">Secret credentials provided by operator.</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInputVal('');
        return;

      default:
        output = (
          <p className="text-rose-400 text-xs">
            zsh: command not found: {raw}. Type <span className="text-emerald-300">'help'</span> for valid commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: raw, output }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative bg-slate-950 border border-slate-700/90 rounded-xl w-full max-w-3xl h-[520px] shadow-2xl z-10 flex flex-col font-mono text-xs overflow-hidden"
        >
          {/* Title bar */}
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                  aria-label="Close terminal"
                />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-slate-400 text-xs ml-2 font-medium flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                affandi@backend-srv: ~/portfolio
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500 hidden sm:inline">
                {language === 'id' ? 'ESC untuk keluar' : 'ESC to exit'}
              </span>
              <button
                onClick={onClose}
                className="p-1 text-slate-400 hover:text-white rounded transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-3 font-mono">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                {item.command !== 'init' && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400 font-bold">➜</span>
                    <span className="text-blue-400 font-semibold">~/portfolio</span>
                    <span className="text-slate-100">{item.command}</span>
                  </div>
                )}
                <div className="pl-4 text-slate-300">{item.output}</div>
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-blue-400 font-semibold">~/portfolio</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={language === 'id' ? "ketik 'help' atau perintah..." : "type 'help' or command..."}
                className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs focus:ring-0 placeholder-slate-600"
                autoFocus
              />
            </div>
          </div>

          {/* Quick Command Suggestion Bar */}
          <div className="bg-slate-900/90 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-slate-500">{language === 'id' ? 'Coba:' : 'Try:'}</span>
              {['help', 'projects', 'curl /api/v1/metrics', 'explain', 'contact'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-[10px] cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleCommand('clear')}
              className="text-slate-500 hover:text-slate-300 text-[10px] cursor-pointer"
            >
              clear
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
