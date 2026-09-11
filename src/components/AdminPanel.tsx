import React, { useState, useEffect } from 'react';
import { 
  Lock, Unlock, LogOut, Save, Download, Upload, RotateCcw, 
  Plus, Trash2, Edit3, Check, AlertCircle, ArrowLeft, ExternalLink,
  Layers, Database, FileText, User, Briefcase, BookOpen, Code, Eye
} from 'lucide-react';
import { PortfolioData, Project, Experience, EngineeringNote, ServiceCard } from '../types';
import { 
  isAdminLoggedIn, loginAdmin, logoutAdmin, 
  savePortfolioData, exportPortfolioJSON, 
  validateAndImportPortfolioJSON, resetPortfolioData 
} from '../utils/storage';

interface AdminPanelProps {
  data: PortfolioData;
  onUpdateData: (updated: PortfolioData) => void;
  onExitAdmin: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ data, onUpdateData, onExitAdmin }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(isAdminLoggedIn());
  const [loginUser, setLoginUser] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [loginError, setLoginError] = useState('');
  
  // Active CMS tab
  const [activeTab, setActiveTab] = useState<'personal' | 'projects' | 'services' | 'experience' | 'notes' | 'json'>('personal');
  
  // Local form state
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Selected project for editing
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingNewProject, setIsAddingNewProject] = useState(false);

  // Raw JSON state
  const [rawJsonText, setRawJsonText] = useState(JSON.stringify(data, null, 2));
  const [rawJsonError, setRawJsonError] = useState<string | null>(null);

  // Keep form data in sync if props change
  useEffect(() => {
    setFormData(data);
    setRawJsonText(JSON.stringify(data, null, 2));
  }, [data]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(loginUser, loginPass)) {
      setIsAuthenticated(true);
      setLoginError('');
      showToast('Authenticated successfully!');
    } else {
      setLoginError('Invalid credentials. (Hint: username admin, password 123456)');
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setIsAuthenticated(false);
  };

  const handleSaveCurrentData = (newData: PortfolioData) => {
    setFormData(newData);
    setRawJsonText(JSON.stringify(newData, null, 2));
    savePortfolioData(newData);
    onUpdateData(newData);
    showToast('Changes saved to localStorage & synchronized!');
  };

  const handleResetToDefault = () => {
    if (window.confirm('Are you sure you want to reset all data back to the default portfolio? Any unsaved manual edits will be overwritten.')) {
      const reset = resetPortfolioData();
      setFormData(reset);
      setRawJsonText(JSON.stringify(reset, null, 2));
      onUpdateData(reset);
      showToast('Reset to default dataset complete.');
    }
  };

  const handleImportJsonFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const imported = validateAndImportPortfolioJSON(text);
        setFormData(imported);
        setRawJsonText(JSON.stringify(imported, null, 2));
        onUpdateData(imported);
        showToast('JSON dataset imported successfully!');
      } catch (err: any) {
        alert('Failed to parse JSON file: ' + err.message);
      }
    };
    reader.readAsText(file);
  };

  const handleSaveRawJson = () => {
    try {
      const parsed = validateAndImportPortfolioJSON(rawJsonText);
      setFormData(parsed);
      onUpdateData(parsed);
      setRawJsonError(null);
      showToast('Raw JSON applied and saved successfully!');
    } catch (err: any) {
      setRawJsonError(err.message);
    }
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col items-center justify-center p-4 selection:bg-emerald-500/20 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-xl dark:shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Admin Authentication
            </h1>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
              Authorized personnel only · Portfolio Management
            </p>
          </div>

          {loginError && (
            <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                Username
              </label>
              <input
                type="text"
                required
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
                placeholder="admin"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-mono focus:outline-none focus:border-emerald-500"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                placeholder="••••••"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-mono focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/10"
            >
              <Unlock className="w-3.5 h-3.5" />
              <span>Log In to Dashboard</span>
            </button>
          </form>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-center">
            <button
              onClick={onExitAdmin}
              className="text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Portfolio</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- AUTHENTICATED ADMIN DASHBOARD ---
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4 transition-colors duration-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-sm">
            ADM
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Portfolio Content Manager
              <span className="text-[10px] font-mono bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-400 px-1.5 py-0.2 rounded">
                session_live
              </span>
            </h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              Direct JSON & LocalStorage engine · Zero-DB deployment ready
            </p>
          </div>
        </div>

        {/* Global Toolbar Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onExitAdmin}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-700 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>View Live Site</span>
          </button>

          <button
            onClick={() => exportPortfolioJSON(formData)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-700 transition-colors"
            title="Download JSON file to save to repository"
          >
            <Download className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Export JSON</span>
          </button>

          <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-medium border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer">
            <Upload className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Import JSON</span>
            <input
              type="file"
              accept=".json"
              onChange={handleImportJsonFile}
              className="hidden"
            />
          </label>

          <button
            onClick={handleResetToDefault}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 dark:bg-slate-800 dark:hover:bg-rose-950 dark:text-slate-400 dark:hover:text-rose-400 border border-slate-200 dark:border-slate-700 transition-colors"
            title="Reset to default CV content"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <button
            onClick={handleLogout}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-colors ml-2"
            title="Log Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Admin Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
          {[
            { id: 'personal', label: 'Personal & Hero', icon: <User className="w-3.5 h-3.5" /> },
            { id: 'projects', label: 'Projects Manager', icon: <Layers className="w-3.5 h-3.5" /> },
            { id: 'services', label: 'What I Do Cards', icon: <Database className="w-3.5 h-3.5" /> },
            { id: 'experience', label: 'Work Experience', icon: <Briefcase className="w-3.5 h-3.5" /> },
            { id: 'notes', label: 'Engineering Notes', icon: <BookOpen className="w-3.5 h-3.5" /> },
            { id: 'json', label: 'Raw JSON Editor', icon: <Code className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-slate-950 font-bold shadow-md shadow-emerald-600/10'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: PERSONAL & HERO */}
        {activeTab === 'personal' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 max-w-4xl">
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-400" />
              <span>Personal Details, Hero, & Positioning</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  value={formData.personal.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personal: { ...formData.personal, name: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Role Title / Positioning</label>
                <input
                  type="text"
                  value={formData.personal.roleTitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personal: { ...formData.personal, roleTitle: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Hero Heading</label>
                <input
                  type="text"
                  value={formData.personal.heroHeading}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personal: { ...formData.personal, heroHeading: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.personal.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personal: { ...formData.personal, email: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Phone</label>
                <input
                  type="text"
                  value={formData.personal.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personal: { ...formData.personal, phone: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Location / Domicile</label>
                <input
                  type="text"
                  value={formData.personal.domicile}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      personal: { ...formData.personal, domicile: e.target.value }
                    })
                  }
                  className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Hero Subtitle</label>
              <textarea
                rows={2}
                value={formData.personal.heroSubtitle}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personal: { ...formData.personal, heroSubtitle: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-xs text-slate-100 resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Specialization Pills (comma separated)
              </label>
              <input
                type="text"
                value={formData.personal.specializationPills.join(', ')}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personal: {
                      ...formData.personal,
                      specializationPills: e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                    }
                  })
                }
                className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Relocation Preference Note
              </label>
              <input
                type="text"
                value={formData.personal.openToRelocation}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    personal: { ...formData.personal, openToRelocation: e.target.value }
                  })
                }
                className="w-full px-3 py-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono text-slate-100"
              />
            </div>

            {/* Save Button */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => handleSaveCurrentData(formData)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20"
              >
                <Save className="w-4 h-4" />
                <span>Save Personal Details</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: PROJECTS MANAGER */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Manage Production Projects</h2>
                <p className="text-xs text-slate-400 font-mono">
                  {formData.projects.length} projects published in portfolio
                </p>
              </div>

              <button
                onClick={() => {
                  const newProj: Project = {
                    id: `project-${Date.now()}`,
                    title: 'New Production Project',
                    subtitle: 'Brief architectural scope',
                    category: 'backend',
                    badge: 'REST API',
                    problem: 'Describe problem statement...',
                    solution: 'Describe what you built...',
                    technicalChallenges: ['High load', 'Distributed lock'],
                    keyContributions: ['Designed PostgreSQL schema'],
                    metrics: [{ label: 'Performance', value: '10x Faster' }],
                    stack: ['Python', 'PostgreSQL'],
                  };
                  setEditingProject(newProj);
                  setIsAddingNewProject(true);
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project</span>
              </button>
            </div>

            {/* Projects List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {formData.projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded">
                        {proj.badge || proj.category}
                      </span>
                      <span className="text-xs font-mono text-slate-500">#{idx + 1}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">{proj.title}</h3>
                    <p className="text-xs text-slate-400 mb-3 line-clamp-2">{proj.subtitle}</p>
                    <div className="flex flex-wrap gap-1 text-[11px] font-mono text-slate-300">
                      {proj.stack.slice(0, 4).map((s, i) => (
                        <span key={i} className="bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setEditingProject({ ...proj });
                        setIsAddingNewProject(false);
                      }}
                      className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit Details</span>
                    </button>

                    <button
                      onClick={() => {
                        if (window.confirm(`Delete project "${proj.title}"?`)) {
                          const updated = {
                            ...formData,
                            projects: formData.projects.filter((p) => p.id !== proj.id),
                          };
                          handleSaveCurrentData(updated);
                        }
                      }}
                      className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                      title="Delete project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Edit / Add Modal Form */}
            {editingProject && (
              <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <h3 className="text-lg font-bold text-white">
                      {isAddingNewProject ? 'Create New Project' : `Edit: ${editingProject.title}`}
                    </h3>
                    <button
                      onClick={() => setEditingProject(null)}
                      className="text-slate-400 hover:text-white"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-300 font-mono mb-1">Title</label>
                      <input
                        type="text"
                        value={editingProject.title}
                        onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                        className="w-full p-2 rounded bg-slate-950 border border-slate-800 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-mono mb-1">Category</label>
                      <select
                        value={editingProject.category}
                        onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value as any })}
                        className="w-full p-2 rounded bg-slate-950 border border-slate-800 text-white"
                      >
                        <option value="flagship">Flagship</option>
                        <option value="backend">Backend & IoT</option>
                        <option value="ai">AI & RAG</option>
                        <option value="fullstack">Full-Stack</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-mono mb-1">Subtitle / Scope</label>
                    <input
                      type="text"
                      value={editingProject.subtitle}
                      onChange={(e) => setEditingProject({ ...editingProject, subtitle: e.target.value })}
                      className="w-full p-2 rounded bg-slate-950 border border-slate-800 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-mono mb-1">Problem Statement</label>
                    <textarea
                      rows={3}
                      value={editingProject.problem}
                      onChange={(e) => setEditingProject({ ...editingProject, problem: e.target.value })}
                      className="w-full p-2 rounded bg-slate-950 border border-slate-800 text-white text-xs resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-mono mb-1">Solution / What I Built</label>
                    <textarea
                      rows={3}
                      value={editingProject.solution}
                      onChange={(e) => setEditingProject({ ...editingProject, solution: e.target.value })}
                      className="w-full p-2 rounded bg-slate-950 border border-slate-800 text-white text-xs resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-mono mb-1">
                      Tech Stack (comma separated)
                    </label>
                    <input
                      type="text"
                      value={editingProject.stack.join(', ')}
                      onChange={(e) =>
                        setEditingProject({
                          ...editingProject,
                          stack: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                        })
                      }
                      className="w-full p-2 rounded bg-slate-950 border border-slate-800 text-white text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 text-xs font-mono mb-1">
                      Live URL (optional)
                    </label>
                    <input
                      type="text"
                      value={editingProject.liveUrl || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, liveUrl: e.target.value })}
                      placeholder="https://..."
                      className="w-full p-2 rounded bg-slate-950 border border-slate-800 text-white text-xs font-mono"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-slate-300 text-xs font-mono">
                        Image URL / Local Asset Path
                      </label>
                      <span className="text-[10px] text-emerald-400 font-mono">
                        contoh: /assets/projects/nama-file.png
                      </span>
                    </div>
                    <input
                      type="text"
                      value={editingProject.imageUrl || ''}
                      onChange={(e) => setEditingProject({ ...editingProject, imageUrl: e.target.value })}
                      placeholder="/assets/projects/my-project.png atau https://..."
                      className="w-full p-2 rounded bg-slate-950 border border-slate-800 text-white text-xs font-mono"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      Simpan file gambar di folder <code className="text-emerald-300">public/assets/projects/</code> lalu masukkan path <code className="text-emerald-300">/assets/projects/nama-file.png</code>.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                    <button
                      onClick={() => setEditingProject(null)}
                      className="px-4 py-2 rounded bg-slate-800 text-xs text-slate-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        let newProjectsList: Project[];
                        if (isAddingNewProject) {
                          newProjectsList = [editingProject, ...formData.projects];
                        } else {
                          newProjectsList = formData.projects.map((p) =>
                            p.id === editingProject.id ? editingProject : p
                          );
                        }
                        handleSaveCurrentData({ ...formData, projects: newProjectsList });
                        setEditingProject(null);
                      }}
                      className="px-4 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
                    >
                      Save Project
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: SERVICES */}
        {activeTab === 'services' && (
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-lg font-bold text-white">What I Do (Core Capability Cards)</h2>
            <div className="space-y-4">
              {formData.whatIDo.map((card, idx) => (
                <div key={card.id} className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold text-white">{card.title}</h3>
                    <span className="text-xs font-mono text-slate-500">Card #{idx + 1}</span>
                  </div>
                  <input
                    type="text"
                    value={card.description}
                    onChange={(e) => {
                      const updated = [...formData.whatIDo];
                      updated[idx].description = e.target.value;
                      setFormData({ ...formData, whatIDo: updated });
                    }}
                    className="w-full p-2 text-xs rounded bg-slate-950 border border-slate-800 text-slate-200"
                  />
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 mb-1 block">
                      Deliverables Checklist (one per line):
                    </label>
                    <textarea
                      rows={4}
                      value={card.items.join('\n')}
                      onChange={(e) => {
                        const updated = [...formData.whatIDo];
                        updated[idx].items = e.target.value.split('\n').filter(Boolean);
                        setFormData({ ...formData, whatIDo: updated });
                      }}
                      className="w-full p-2 text-xs font-mono rounded bg-slate-950 border border-slate-800 text-slate-200 resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => handleSaveCurrentData(formData)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
              >
                <Save className="w-4 h-4" />
                <span>Save Capabilities</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: EXPERIENCE */}
        {activeTab === 'experience' && (
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-lg font-bold text-white">Experience Timeline</h2>
            <div className="space-y-4">
              {formData.experiences.map((exp, idx) => (
                <div key={exp.id} className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-mono text-slate-400">Role</label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => {
                          const updated = [...formData.experiences];
                          updated[idx].role = e.target.value;
                          setFormData({ ...formData, experiences: updated });
                        }}
                        className="w-full p-2 text-xs rounded bg-slate-950 border border-slate-800 text-white font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => {
                          const updated = [...formData.experiences];
                          updated[idx].company = e.target.value;
                          setFormData({ ...formData, experiences: updated });
                        }}
                        className="w-full p-2 text-xs rounded bg-slate-950 border border-slate-800 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400">Period</label>
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => {
                          const updated = [...formData.experiences];
                          updated[idx].period = e.target.value;
                          setFormData({ ...formData, experiences: updated });
                        }}
                        className="w-full p-2 text-xs rounded bg-slate-950 border border-slate-800 text-white font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">
                      Impact Bullets (one per line):
                    </label>
                    <textarea
                      rows={5}
                      value={exp.impactBullets.join('\n')}
                      onChange={(e) => {
                        const updated = [...formData.experiences];
                        updated[idx].impactBullets = e.target.value.split('\n').filter(Boolean);
                        setFormData({ ...formData, experiences: updated });
                      }}
                      className="w-full p-2 text-xs rounded bg-slate-950 border border-slate-800 text-slate-200 resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => handleSaveCurrentData(formData)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
              >
                <Save className="w-4 h-4" />
                <span>Save Experience Timeline</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 5: NOTES */}
        {activeTab === 'notes' && (
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-lg font-bold text-white">Engineering Notes & Articles</h2>
            <div className="space-y-4">
              {formData.notes.map((note, idx) => (
                <div key={note.id} className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex justify-between">
                    <input
                      type="text"
                      value={note.title}
                      onChange={(e) => {
                        const updated = [...formData.notes];
                        updated[idx].title = e.target.value;
                        setFormData({ ...formData, notes: updated });
                      }}
                      className="w-3/4 p-2 text-sm font-bold rounded bg-slate-950 border border-slate-800 text-white"
                    />
                    <input
                      type="text"
                      value={note.date}
                      onChange={(e) => {
                        const updated = [...formData.notes];
                        updated[idx].date = e.target.value;
                        setFormData({ ...formData, notes: updated });
                      }}
                      className="w-1/5 p-2 text-xs font-mono rounded bg-slate-950 border border-slate-800 text-slate-300"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Summary</label>
                    <textarea
                      rows={2}
                      value={note.summary}
                      onChange={(e) => {
                        const updated = [...formData.notes];
                        updated[idx].summary = e.target.value;
                        setFormData({ ...formData, notes: updated });
                      }}
                      className="w-full p-2 text-xs rounded bg-slate-950 border border-slate-800 text-slate-300 resize-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-400 block mb-1">Content (Markdown)</label>
                    <textarea
                      rows={8}
                      value={note.content}
                      onChange={(e) => {
                        const updated = [...formData.notes];
                        updated[idx].content = e.target.value;
                        setFormData({ ...formData, notes: updated });
                      }}
                      className="w-full p-2.5 text-xs font-mono rounded bg-slate-950 border border-slate-800 text-slate-200 resize-none leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => handleSaveCurrentData(formData)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
              >
                <Save className="w-4 h-4" />
                <span>Save Notes</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 6: RAW JSON */}
        {activeTab === 'json' && (
          <div className="space-y-4 max-w-5xl">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Raw Portfolio JSON Editor</h2>
                <p className="text-xs font-mono text-slate-400">
                  Full control of dataset. Direct export or copy-paste for GitHub Pages deployment.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    try {
                      const formatted = JSON.stringify(JSON.parse(rawJsonText), null, 2);
                      setRawJsonText(formatted);
                      setRawJsonError(null);
                    } catch (e: any) {
                      setRawJsonError('JSON syntax error: ' + e.message);
                    }
                  }}
                  className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300"
                >
                  Format JSON
                </button>
                <button
                  onClick={handleSaveRawJson}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Apply & Save JSON</span>
                </button>
              </div>
            </div>

            {rawJsonError && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                Error: {rawJsonError}
              </div>
            )}

            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <textarea
                value={rawJsonText}
                onChange={(e) => setRawJsonText(e.target.value)}
                rows={25}
                className="w-full p-4 font-mono text-xs bg-slate-950 text-emerald-300 focus:outline-none resize-none leading-relaxed"
                spellCheck={false}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
