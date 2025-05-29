import { useQuery } from "@tanstack/react-query";
import { VideoCard } from "@/components/VideoCard";
import { Clock, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { VideoWithChannel } from "@shared/schema";

export function History() {
  const { data: videos = [], isLoading } = useQuery<VideoWithChannel[]>({
    queryKey: ["/api/history"],
    queryFn: async () => {
      const response = await fetch("/api/history");
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Clock className="w-8 h-8 text-purple-500" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">History</h1>
          </div>
          <Button variant="outline" className="flex items-center space-x-2">
            <Trash2 className="w-4 h-4" />
            <span>Clear All</span>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
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
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Clock className="w-8 h-8 text-purple-500" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">History</h1>
        </div>
        {videos.length > 0 && (
          <Button variant="outline" className="flex items-center space-x-2">
            <Trash2 className="w-4 h-4" />
            <span>Clear All</span>
          </Button>
        )}
      </div>
      
      {videos.length === 0 ? (
        <div className="text-center py-12">
          <div className="mb-4">
            <Clock className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            No watch history
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Videos you watch will appear here. Start watching to build your history!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}
