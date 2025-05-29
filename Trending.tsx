import { useQuery } from "@tanstack/react-query";
import { VideoCard } from "@/components/VideoCard";
import { TrendingUp } from "lucide-react";
import type { VideoWithChannel } from "@shared/schema";

export function Trending() {
  const { data: videos = [], isLoading } = useQuery<VideoWithChannel[]>({
    queryKey: ["/api/videos/trending"],
    queryFn: async () => {
      const response = await fetch("/api/videos/trending");
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="w-8 h-8 text-purple-500" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Trending</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded-xl mb-3"></div>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mb-1"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <TrendingUp className="w-8 h-8 text-purple-500" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Trending</h1>
      </div>
      
      {videos.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No trending videos found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div key={video.id} className="relative">
              <div className="absolute -top-2 -left-2 bg-purple-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center z-10">
                {index + 1}
              </div>
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
