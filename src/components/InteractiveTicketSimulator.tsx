import React, { useState } from 'react';
import { 
  Terminal, 
  Zap, 
  ShieldCheck, 
  Workflow, 
  Clock, 
  GitMerge, 
  CheckCircle2, 
  Play, 
  RotateCcw,
  Check,
  X,
  Send
} from 'lucide-react';

export const InteractiveTicketSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'onpush' | 'security' | 'approval' | 'snooze' | 'merge'>('onpush');

  // 1. OnPush Performance State
  const [useOnPush, setUseOnPush] = useState<boolean>(true);
  const [renderCount, setRenderCount] = useState<number>(0);
  const [totalDigestCycles, setTotalDigestCycles] = useState<number>(0);
  const [ticketList, setTicketList] = useState([
    { id: 'TK-1001', subject: 'Enterprise SSO OAuth2 Configuration Issue', status: 'Open', priority: 'High', agent: 'Dharmadurai D.' },
    { id: 'TK-1002', subject: 'SLA Breach Warning on Escalated Inquiry', status: 'Pending Approval', priority: 'Urgent', agent: 'Sarah M.' },
    { id: 'TK-1003', subject: 'Bulk Contacts Migration CSV Upload Failed', status: 'In Progress', priority: 'Medium', agent: 'Alex K.' },
    { id: 'TK-1004', subject: 'Request for SLA Snooze Extension', status: 'Snoozed', priority: 'Low', agent: 'Dharmadurai D.' }
  ]);

  const triggerWebSocketUpdate = () => {
    setTicketList(prev => prev.map(t => t.id === 'TK-1001' ? { ...t, priority: t.priority === 'High' ? 'Urgent' : 'High' } : t));
    if (useOnPush) {
      setRenderCount(prev => prev + 1);
      setTotalDigestCycles(prev => prev + 1);
    } else {
      setRenderCount(prev => prev + 32);
      setTotalDigestCycles(prev => prev + 32);
    }
  };

  // 2. Security XSS Sanitizer State
  const [rawHtmlInput, setRawHtmlInput] = useState<string>(
    `<div style="color: #00f">Support Ticket Content:</div>\n<p>Dear Team, please verify my account.</p>\n<script>alert("XSS Attack Triggered!")</script>\n<img src="invalid" onerror="console.log('XSS Payload Injected!')" />\n<a href="javascript:alert('Stolen Cookies')">Click for Refund</a>`
  );
  const [sanitizedResult, setSanitizedResult] = useState<string>('');
  const [xssBlockedCount, setXssBlockedCount] = useState<number>(0);

  const handleSanitize = () => {
    let clean = rawHtmlInput;
    let blocked = 0;

    if (clean.includes('<script>')) {
      clean = clean.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '<!-- [REMOVED MALICIOUS SCRIPT TAG] -->');
      blocked++;
    }
    if (clean.includes('onerror=')) {
      clean = clean.replace(/onerror="[^"]*"/gi, '/* [REMOVED MALICIOUS ONERROR EVENT] */');
      blocked++;
    }
    if (clean.includes('javascript:')) {
      clean = clean.replace(/href="javascript:[^"]*"/gi, 'href="#" target="_blank" rel="noopener noreferrer"');
      blocked++;
    }

    setSanitizedResult(clean);
    setXssBlockedCount(blocked);
  };

  // 3. Ticket Approval Engine State
  const [approvalRule, setApprovalRule] = useState<'MAJORITY' | 'EVERYONE' | 'ANYONE'>('MAJORITY');
  const [votes, setVotes] = useState<{ [key: string]: boolean | null }>({
    'Lead Engineer (Dharmadurai)': true,
    'Security Officer (Sarah)': true,
    'Product Manager (Alex)': null,
    'Finance Lead (David)': false,
    'VP Operations (Rachel)': null
  });

  const toggleVote = (approver: string, status: boolean) => {
    setVotes(prev => ({ ...prev, [approver]: status }));
  };

  const calculateApprovalState = () => {
    const totalVotes = Object.keys(votes).length;
    const approvedCount = Object.values(votes).filter(v => v === true).length;
    const rejectedCount = Object.values(votes).filter(v => v === false).length;

    if (approvalRule === 'EVERYONE') {
      if (rejectedCount > 0) return 'REJECTED';
      if (approvedCount === totalVotes) return 'APPROVED';
      return 'PENDING';
    } else if (approvalRule === 'ANYONE') {
      if (approvedCount > 0) return 'APPROVED';
      if (rejectedCount === totalVotes) return 'REJECTED';
      return 'PENDING';
    } else {
      if (approvedCount > totalVotes / 2) return 'APPROVED';
      if (rejectedCount >= totalVotes / 2) return 'REJECTED';
      return 'PENDING';
    }
  };

  // 4. Snooze Engine State
  const [snoozeStatus, setSnoozeStatus] = useState<'Active' | 'Snoozed' | 'Re-activated'>('Active');
  const [snoozeLog, setSnoozeLog] = useState<string[]>([]);

  const handleSnooze = (preset: string) => {
    setSnoozeStatus('Snoozed');
    setSnoozeLog(prev => [`[${new Date().toLocaleTimeString()}] Ticket TK-1004 snoozed until ${preset}`, ...prev]);
  };

  const handleSimulateCustomerReply = () => {
    setSnoozeStatus('Re-activated');
    setSnoozeLog(prev => [`[${new Date().toLocaleTimeString()}] Customer replied! Ticket TK-1004 automatically unsnoozed and restored to Agent Inbox.`, ...prev]);
  };

  // 5. Merge Studio State
  const [merged, setMerged] = useState<boolean>(false);

  return (
    <section id="sandbox" className="py-20 bg-[var(--bg-page)] relative border-t border-[var(--border-main)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE FEATURE SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4">
            BoldDesk Agent Tickets Module Simulator
          </h2>
          <p className="text-[var(--text-sub)] max-w-2xl text-sm sm:text-base font-normal">
            Test the real Angular business logic, security sanitization, and performance algorithms engineered by Dharmadurai.
          </p>

          {/* Interactive Mode Nav Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-main)] shadow-sm transition-colors duration-300">
            {[
              { id: 'onpush', label: 'Performance Lab', icon: Zap },
              { id: 'security', label: 'XSS & CSP Sanitizer', icon: ShieldCheck },
              { id: 'approval', label: 'Ticket Approval Workflow', icon: Workflow },
              { id: 'snooze', label: 'Ticket Snooze State Machine', icon: Clock },
              { id: 'merge', label: 'Thread Merge Studio', icon: GitMerge }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                      : 'text-[var(--text-sub)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-subcard)]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Performance Lab */}
        {activeTab === 'onpush' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                  Angular Change Detection Strategy Benchmark
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-normal">
                  Compare default change detection (triggers full component tree re-evaluation) vs Dharmadurai's targeted immutable pipeline.
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setUseOnPush(false)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    !useOnPush ? 'bg-rose-500 text-white shadow-xs' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Default Detection
                </button>
                <button
                  onClick={() => setUseOnPush(true)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    useOnPush ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Targeted Performance
                </button>
              </div>
            </div>

            {/* Benchmark Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium block mb-1">Active Strategy</span>
                <span className={`text-base font-bold font-mono ${useOnPush ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                  {useOnPush ? 'Targeted Immutable Pipeline' : 'Default Component Check'}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                  {useOnPush ? 'Isolated DOM updates' : 'Full tree dirty check'}
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium block mb-1">Last Update Render Passes</span>
                <span className="text-2xl font-bold font-mono text-cyan-600 dark:text-cyan-400">
                  {renderCount} <span className="text-xs text-slate-500">passes</span>
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                  {useOnPush ? '1 target component' : '32 nested components checked'}
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium block mb-1">Total Digest Cycle CPU Hits</span>
                <span className="text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
                  {totalDigestCycles}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">Cumulative digest iterations</span>
              </div>
            </div>

            {/* Interactive Trigger Area */}
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-700 dark:text-slate-300">
                <span className="font-semibold text-slate-900 dark:text-white block mb-0.5">Simulate Real-time WebSocket Event</span>
                Trigger a ticket priority update on <code className="text-cyan-600 dark:text-cyan-400 font-bold">TK-1001</code> to measure DOM change detection passes.
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={triggerWebSocketUpdate}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Send WS Event Update</span>
                </button>
                <button
                  onClick={() => {
                    setRenderCount(0);
                    setTotalDigestCycles(0);
                  }}
                  className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                  title="Reset Counters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Ticket List Demo Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase font-mono text-[11px] border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3">Ticket ID</th>
                    <th className="p-3">Subject</th>
                    <th className="p-3">Priority</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Assigned Agent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 font-mono text-slate-800 dark:text-slate-200">
                  {ticketList.map((ticket) => (
                    <tr key={ticket.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-semibold text-cyan-600 dark:text-cyan-400">{ticket.id}</td>
                      <td className="p-3 font-sans text-slate-900 dark:text-slate-100 font-medium">{ticket.subject}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          ticket.priority === 'Urgent' ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-300 dark:border-rose-800' :
                          ticket.priority === 'High' ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-800' :
                          'bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
                        }`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                          {ticket.status}
                        </span>
                      </td>
                      <td className="p-3 font-sans text-slate-700 dark:text-slate-300">{ticket.agent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: XSS & CSP Security Sanitizer */}
        {activeTab === 'security' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl">
            <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                DomSanitizer + DOMPurify Security Hardening Pipeline
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-normal">
                Test how untrusted customer email HTML payloads with malicious scripts or invalid inline events are sanitized safely before rendering in BoldDesk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Raw Payload Input */}
              <div className="flex flex-col">
                <label className="text-xs font-mono text-slate-800 dark:text-slate-200 font-semibold mb-2 flex items-center justify-between">
                  <span>Untrusted Raw Ticket HTML Payload</span>
                  <span className="text-[10px] text-rose-600 dark:text-rose-400 font-bold">Contains XSS Vulnerabilities</span>
                </label>
                <textarea
                  value={rawHtmlInput}
                  onChange={(e) => setRawHtmlInput(e.target.value)}
                  rows={8}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-xs font-mono text-slate-900 dark:text-slate-100 focus:border-cyan-500 focus:outline-none leading-relaxed"
                />
                <button
                  onClick={handleSanitize}
                  className="mt-3 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs shadow-md cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Run Security Sanitization Pipeline</span>
                </button>
              </div>

              {/* Sanitized Output */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1.5">
                    <span>Sanitized Safe DOM Output</span>
                  </label>
                  {xssBlockedCount > 0 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      {xssBlockedCount} Threats Neutralized
                    </span>
                  )}
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs font-mono text-emerald-300 min-h-[160px] overflow-auto leading-relaxed">
                  {sanitizedResult ? (
                    <pre className="whitespace-pre-wrap">{sanitizedResult}</pre>
                  ) : (
                    <span className="text-slate-500 italic">Click "Run Security Sanitization Pipeline" to process payload.</span>
                  )}
                </div>

                {/* Safe Preview Render Box */}
                {sanitizedResult && (
                  <div className="mt-3 p-3 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase block mb-1 font-semibold">Rendered Agent View:</span>
                    <div 
                      className="text-xs text-slate-800 dark:text-slate-200"
                      dangerouslySetInnerHTML={{ __html: sanitizedResult }} 
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Multi-Level Approval Engine */}
        {activeTab === 'approval' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl">
            <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  Enterprise Ticket Approval Rule Engine
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-normal">
                  Simulate multi-level approver votes with Everyone, Anyone, and Majority consensus calculations.
                </p>
              </div>

              {/* Rule Selector */}
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                {(['MAJORITY', 'EVERYONE', 'ANYONE'] as const).map((rule) => (
                  <button
                    key={rule}
                    onClick={() => setApprovalRule(rule)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      approvalRule === rule
                        ? 'bg-cyan-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {rule}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Consensus Result Banner */}
            {(() => {
              const state = calculateApprovalState();
              return (
                <div className={`p-4 rounded-xl border mb-6 flex items-center justify-between ${
                  state === 'APPROVED' ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300' :
                  state === 'REJECTED' ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300' :
                  'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300'
                }`}>
                  <div className="flex items-center gap-3">
                    {state === 'APPROVED' && <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
                    {state === 'REJECTED' && <X className="w-6 h-6 text-rose-600 dark:text-rose-400" />}
                    {state === 'PENDING' && <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider">
                        Approval Status: {state}
                      </h4>
                      <p className="text-xs opacity-90 mt-0.5 font-medium">
                        Rule active: <span className="font-bold">{approvalRule}</span> ({Object.values(votes).filter(v => v === true).length} Approved / {Object.values(votes).filter(v => v === false).length} Rejected out of {Object.keys(votes).length})
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Approver Roster Voting Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(votes).map(([approver, status]) => (
                <div key={approver} className="bg-slate-50 dark:bg-slate-800/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-900 dark:text-slate-100 block">{approver}</span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-medium">
                      {status === true ? 'Approved' : status === false ? 'Rejected' : 'Awaiting Vote'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleVote(approver, true)}
                      className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                        status === true
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                      }`}
                      title="Approve"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => toggleVote(approver, false)}
                      className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                        status === false
                          ? 'bg-rose-600 text-white border-rose-600'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400'
                      }`}
                      title="Reject"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Ticket Snooze State Machine */}
        {activeTab === 'snooze' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl">
            <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Ticket Snooze & Auto-Reactivation State Machine
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-normal">
                Pause active tickets to keep SLA queues clean. Tickets auto-unsnooze on schedule OR when a customer replies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Snooze Control Panel */}
              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-300 font-semibold">Target Ticket: <strong className="text-cyan-600 dark:text-cyan-400">TK-1004</strong></span>
                    <span className={`px-2.5 py-0.5 rounded text-xs font-bold font-mono ${
                      snoozeStatus === 'Snoozed' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-800' :
                      snoozeStatus === 'Re-activated' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800' :
                      'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
                    }`}>
                      State: {snoozeStatus}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2">
                    Quick Snooze Presets:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {['Tomorrow at 9:00 AM', 'Next Monday 9:00 AM', 'In 4 Hours', 'Custom SLA Date'].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => handleSnooze(preset)}
                        className="p-2.5 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs text-left font-medium transition-colors cursor-pointer"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <button
                    onClick={handleSimulateCustomerReply}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Simulate Incoming Customer Reply Event</span>
                  </button>
                </div>
              </div>

              {/* Event Log Output */}
              <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col">
                <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-bold uppercase mb-3">
                  State Machine Audit Log
                </span>
                <div className="bg-slate-900 p-3 rounded-lg font-mono text-xs text-cyan-300 flex-1 overflow-y-auto max-h-[220px] space-y-2">
                  {snoozeLog.length > 0 ? (
                    snoozeLog.map((log, idx) => (
                      <div key={idx} className="pb-1 border-b border-slate-800 leading-relaxed">
                        {log}
                      </div>
                    ))
                  ) : (
                    <span className="text-slate-500 italic">No snooze events logged yet. Select a preset on the left.</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Thread Merge Studio */}
        {activeTab === 'merge' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl">
            <div className="pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <GitMerge className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                Duplicate Ticket Thread Consolidation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-normal">
                Merge duplicate customer inquiries into a primary ticket thread while preserving conversation history and audit trails.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Primary Ticket */}
              <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-cyan-500/50">
                <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase block mb-1">PRIMARY TICKET (TARGET)</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">TK-1001: Enterprise SSO OAuth2 Configuration</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-2 font-normal">Original ticket with 6 agent replies and SLA clock active.</p>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Status: Open | Agent: Dharmadurai D.</div>
              </div>

              {/* Secondary Duplicate Ticket */}
              <div className={`p-4 rounded-xl border transition-all ${
                merged ? 'bg-slate-100 dark:bg-slate-950 border-slate-300 dark:border-slate-800 opacity-60' : 'bg-slate-50 dark:bg-slate-800/80 border-amber-500/50'
              }`}>
                <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold uppercase block mb-1">
                  {merged ? 'MERGED & CLOSED' : 'DUPLICATE TICKET (SOURCE)'}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">TK-1008: SSO Login Giving 401 Unauthorized</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-2 font-normal">Duplicate inquiry sent by same customer 15 mins later.</p>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  {merged ? 'Merged into TK-1001' : 'Status: Pending Consolidation'}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="text-xs text-slate-700 dark:text-slate-300 font-normal">
                {merged ? (
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Tickets merged successfully! Thread conversation history consolidated into TK-1001.
                  </span>
                ) : (
                  <span>Click merge to consolidate comments, attachments, and private agent notes into primary thread.</span>
                )}
              </div>
              <button
                onClick={() => setMerged(!merged)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  merged
                    ? 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600'
                    : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md'
                }`}
              >
                {merged ? 'Undo Consolidation' : 'Execute Thread Merge'}
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
