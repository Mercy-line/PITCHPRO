import { Play, Heart, MessageSquare, Share2, Users } from 'lucide-react';
import { communityVideos } from '@/data/community';
import { CommunityVideo } from '@/types/community';

interface Props {
  uploadedVideos: CommunityVideo[];
  likedVideos: Set<number>;
  toggleLike: (e: React.MouseEvent, id: number) => void;
}

export default function CommunityVideosSection({ uploadedVideos, likedVideos, toggleLike }: Props) {
  const allVideos = [...uploadedVideos, ...communityVideos];

  return (
    <section>
      <h2 className="text-xl font-medium mb-8 uppercase tracking-widest flex items-center gap-3">
        <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />
        Community Practice
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {allVideos.map(video => (
          <div key={video.id} className="glass-card overflow-hidden group cursor-pointer">
            <div className="aspect-video w-full bg-[var(--bg-base)] relative overflow-hidden border-b border-[var(--border-subtle)]">
              {video.videoUrl ? (
                video.videoUrl.includes('youtube.com') ? (
                  <iframe 
                    src={video.videoUrl} 
                    title={video.title}
                    className="w-full h-full absolute inset-0 border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                ) : (
                  <video src={video.videoUrl} poster={video.thumbnail} className="w-full h-full object-cover" controls />
                )
              ) : (
                <>
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-lime-500/80 transition-colors">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-medium text-[var(--text-main)] mb-2 line-clamp-1">{video.title}</h3>
              <p className="text-[var(--text-muted)] text-xs font-medium uppercase tracking-widest mb-4">{video.user}</p>
              <div className="flex items-center gap-6 text-[var(--text-muted)]">
                <button 
                  onClick={(e) => toggleLike(e, video.id)}
                  className={`flex items-center gap-2 transition-colors text-xs font-medium ${likedVideos.has(video.id) ? 'text-rose-500' : 'hover:text-rose-500'}`}
                >
                  <Heart className="w-4 h-4" fill={likedVideos.has(video.id) ? "currentColor" : "none"} /> 
                  {video.likes + (likedVideos.has(video.id) ? 1 : 0)}
                </button>
                <button className="flex items-center gap-2 hover:text-lime-600 dark:hover:text-lime-400 transition-colors text-xs font-medium">
                  <MessageSquare className="w-4 h-4" /> {video.comments}
                </button>
                <button className="flex items-center gap-2 hover:text-[var(--text-main)] transition-colors ml-auto text-xs font-medium">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}