import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { VideoCard } from "@/components/VideoCard";
import { Search as SearchIcon } from "lucide-react";
import type { VideoWithChannel } from "@shared/schema";

export function Search() {
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.split("?")[1] || "");
    const query = params.get("q") || "";
    setSearchQuery(query);
  }, [location]);

  const { data: videos = [], isLoading } = useQuery<VideoWithChannel[]>({
    queryKey: ["/api/videos/search", { q: searchQuery }],
    queryFn: async () => {
      if (!searchQuery.trim()) return [];
      const response = await fetch(`/api/videos/search?q=${encodeURIComponent(searchQuery)}`);
      return response.json();
    },
    enabled: !!searchQuery.trim(),
  });

  if (!searchQuery.trim()) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <SearchIcon className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Enter a search term
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Use the search bar above to find videos on SuperTuber
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <SearchIcon className="w-8 h-8 text-purple-500" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Search Results for "{searchQuery}"
          </h1>
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
      <div className="flex items-center space-x-3 mb-6">
        <SearchIcon className="w-8 h-8 text-purple-500" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Search Results for "{searchQuery}"
        </h1>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {videos.length} result{videos.length !== 1 ? "s" : ""} found
      </p>
      
      {videos.length === 0 ? (
        <div className="text-center py-12">
          <SearchIcon className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            No results found
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Try different keywords or check your spelling. You can also browse our trending videos or explore different categories.
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
