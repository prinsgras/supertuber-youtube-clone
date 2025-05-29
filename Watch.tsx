import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { VideoPlayer } from "@/components/VideoPlayer";
import { VideoCard } from "@/components/VideoCard";
import type { VideoWithChannel } from "@shared/schema";

export function Watch() {
  const [location] = useLocation();
  const [videoId, setVideoId] = useState<string | null>(null);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.split("?")[1] || "");
    const id = params.get("v");
    setVideoId(id);
    setShowPlayer(!!id);
  }, [location]);

  const { data: video, isLoading } = useQuery<VideoWithChannel>({
    queryKey: [`/api/videos/${videoId}`],
    queryFn: async () => {
      const response = await fetch(`/api/videos/${videoId}`);
      if (!response.ok) {
        throw new Error("Video not found");
      }
      return response.json();
    },
    enabled: !!videoId,
  });

  const { data: relatedVideos = [] } = useQuery<VideoWithChannel[]>({
    queryKey: ["/api/videos", { limit: 12 }],
    queryFn: async () => {
      const response = await fetch("/api/videos?limit=12");
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Video not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The video you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {showPlayer && (
        <VideoPlayer
          video={video}
          onClose={() => setShowPlayer(false)}
        />
      )}
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Video */}
          <div className="lg:col-span-2">
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
              <video
                className="w-full h-full"
                controls
                poster={video.thumbnail}
                onClick={() => setShowPlayer(true)}
              >
                <source src={video.videoUrl || "#"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {video.title}
            </h1>
            
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600 dark:text-gray-400">
                {video.viewCount.toLocaleString()} views
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={video.channel.avatar || "https://via.placeholder.com/48x48"}
                alt={`${video.channel.displayName} avatar`}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {video.channel.displayName}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {(video.channel.subscriberCount || 0).toLocaleString()} subscribers
                </p>
              </div>
              <button className="btn-supertuber">
                Subscribe
              </button>
            </div>
            
            {video.description && (
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                  {video.description}
                </p>
              </div>
            )}
          </div>
          
          {/* Related Videos */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Related Videos
            </h2>
            <div className="space-y-4">
              {relatedVideos
                .filter(v => v.id !== video.id)
                .slice(0, 10)
                .map((relatedVideo) => (
                  <VideoCard
                    key={relatedVideo.id}
                    video={relatedVideo}
                    className="flex space-x-3"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
