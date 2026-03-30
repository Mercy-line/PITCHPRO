import { Play } from 'lucide-react';
import { masterclasses } from '@/data/community';

export default function MasterclassesSection() {
  return (
    <section>
      <h2 className="text-xl font-medium mb-8 uppercase tracking-widest flex items-center gap-3">
        <Play className="w-5 h-5 text-lime-600 dark:text-lime-400" />
        Masterclass Examples
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {masterclasses.map(video => (
          <div key={video.id} className="glass-card overflow-hidden group">
            <div className="aspect-video w-full bg-black relative overflow-hidden">
              <iframe 
                src={video.url} 
                title={video.title}
                className="w-full h-full absolute inset-0 border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <h3 className="font-medium text-[var(--text-main)] mb-2 uppercase tracking-widest text-sm">{video.title}</h3>
              <div className="flex items-center justify-between text-[var(--text-muted)] text-xs font-medium uppercase tracking-widest">
                <span>{video.speaker}</span>
                <span>{video.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}