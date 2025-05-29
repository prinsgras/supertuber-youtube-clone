import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { VideoCard } from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { formatSubscribers } from "@/lib/utils";
import type { User, VideoWithChannel } from "@shared/schema";

export function Channel() {
  const params = new URLSearchParams(window.location.search);
  const channelId = window.location.pathname.split("/").pop();

  const { data: channel, isLoading: channelLoading } = useQuery<User>({
    queryKey: [`/api/users/${channelId}`],
    queryFn: async () => {
      const response = await fetch(`/api/users/${channelId}`);
      if (!response.ok) {
        throw new Error("Channel not found");
      }
      return response.json();
    },
    enabled: !!channelId,
  });

  const { data: videos = [], isLoading: videosLoading } = useQuery<VideoWithChannel[]>({
    queryKey: [`/api/channels/${channelId}/videos`],
    queryFn: async () => {
      const response = await fetch(`/api/channels/${channelId}/videos`);
      return response.json();
    },
    enabled: !!channelId,
  });

  if (channelLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!channel) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Channel not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The channel you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Channel Header */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 h-48 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        <div className="flex items-end space-x-6 mb-6">
          <img
            src={channel.avatar || "https://via.placeholder.com/120x120"}
            alt={`${channel.displayName} avatar`}
            className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
          />
          <div className="flex-1 pb-4">
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
              {channel.displayName}
              {channel.verified && (
                <span className="ml-2 text-purple-300">✓</span>
              )}
            </h1>
            <p className="text-white opacity-90 mb-4">
              {formatSubscribers(channel.subscriberCount || 0)}
            </p>
            <Button className="btn-supertuber">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      
      {/* Channel Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
          <nav className="flex space-x-8">
            <button className="py-2 px-1 border-b-2 border-purple-500 text-purple-600 font-medium">
              Videos
            </button>
            <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              Playlists
            </button>
            <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              About
            </button>
          </nav>
        </div>
        
        {/* Videos Grid */}
        {videosLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded-xl mb-3"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : videos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              This channel hasn't uploaded any videos yet.
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
    </div>
  );
}
