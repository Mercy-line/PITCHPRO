import { Users, ChevronDown, FileText, Loader2, Sparkles } from 'lucide-react';

interface PitchFormProps {
  audience: string;
  setAudience: (audience: string) => void;
  docs: string;
  setDocs: (docs: string) => void;
  loading: boolean;
  handleGenerate: () => void;
}

export default function PitchForm({
  audience,
  setAudience,
  docs,
  setDocs,
  loading,
  handleGenerate
}: PitchFormProps) {
  return (
    <div className="glass-panel p-8 md:p-10 space-y-8">
      {/* Audience Selection Section */}
      <div className="glass-card p-6 space-y-4 border-lime-500/20">
        <label className="flex items-center gap-3 text-sm font-bold text-[var(--text-main)] uppercase tracking-widest">
          <Users className="w-5 h-5 text-lime-600 dark:text-lime-400" />
          Who is your audience?
        </label>
        <div className="relative">
          <select 
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="glass-input cursor-pointer appearance-none w-full pr-10 bg-[var(--bg-base)]/50"
          >
            <option value="Investors (VCs, Angel Investors)">Investors (VCs, Angel Investors)</option>
            <option value="Non-Technical Executives">Non-Technical Executives</option>
            <option value="Technical Visitors / Engineers">Technical Visitors / Engineers</option>
            <option value="General Public / Customers">General Public / Customers</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-[var(--text-muted)]">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Documentation Section */}
      <div className="glass-card p-6 space-y-4 border-green-500/20">
        <label className="flex items-center gap-3 text-sm font-bold text-[var(--text-main)] uppercase tracking-widest">
          <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
          Project Representation
        </label>
        <textarea 
          value={docs}
          onChange={(e) => setDocs(e.target.value)}
          placeholder="Paste the technical documentation, architecture overview, or project summary here..."
          className="glass-input h-80 resize-y font-light leading-relaxed bg-[var(--bg-base)]/50"
        />
      </div>

      {/* Generate Button */}
      <button 
        onClick={handleGenerate}
        disabled={loading || !docs.trim()}
        className="glass-button-primary w-full justify-center py-5 disabled:opacity-50 disabled:cursor-not-allowed group transition-all duration-500"
      >
        {loading ? (
          <div className="flex items-center gap-3">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="tracking-[0.2em]">ANALYZING & CRAFTING PITCH...</span>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <span className="tracking-[0.2em]">GENERATE PITCH STRATEGY</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </div>
        )}
      </button>
    </div>
  );
}
