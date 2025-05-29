import { useState, useRef } from "react";
import { X, ThumbsUp, Share, Download, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatViews, formatSubscribers, cn } from "@/lib/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { VideoWithChannel } from "@shared/schema";

interface VideoPlayerProps {
  video: VideoWithChannel;
  onClose: () => void;
}

export function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const queryClient = useQueryClient();

  // Check subscription status
  useQuery({
    queryKey: [`/api/subscriptions/check/${video.channelId}`],
    queryFn: async () => {
      const response = await fetch(`/api/subscriptions/check/${video.channelId}`);
      const data = await response.json();
      setIsSubscribed(data.isSubscribed);
      return data;
    },
  });

  // Check like status
  useQuery({
    queryKey: [`/api/liked-videos/check/${video.id}`],
    queryFn: async () => {
      const response = await fetch(`/api/liked-videos/check/${video.id}`);
      const data = await response.json();
      setIsLiked(data.isLiked);
      return data;
    },
  });

  // Subscribe mutation
  const subscribeMutation = useMutation({
    mutationFn: async () => {
      if (isSubscribed) {
        return apiRequest("DELETE", `/api/subscriptions/${video.channelId}`);
      } else {
        return apiRequest("POST", "/api/subscriptions", {
          channelId: video.channelId,
        });
      }
    },
    onSuccess: () => {
      setIsSubscribed(!isSubscribed);
      queryClient.invalidateQueries({ queryKey: [`/api/subscriptions/check/${video.channelId}`] });
    },
  });

  // Like mutation
  const likeMutation = useMutation({
    mutationFn: async () => {
      if (isLiked) {
        return apiRequest("DELETE", `/api/liked-videos/${video.id}`);
      } else {
        return apiRequest("POST", "/api/liked-videos", {
          videoId: video.id,
        });
      }
    },
    onSuccess: () => {
      setIsLiked(!isLiked);
      queryClient.invalidateQueries({ queryKey: [`/api/liked-videos/check/${video.id}`] });
    },
  });

  // Add to history when video starts playing
  const addToHistoryMutation = useMutation({
    mutationFn: () =>
      apiRequest("POST", "/api/history", {
        videoId: video.id,
        progress: 0,
      }),
  });

  const handlePlay = () => {
    addToHistoryMutation.mutate();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="bg-black rounded-lg overflow-hidden">
          <div className="aspect-video bg-gray-900 relative">
            <video
              ref={videoRef}
              className="w-full h-full"
              controls
              onPlay={handlePlay}
              style={{
                filter: "hue-rotate(280deg) saturate(1.2)", // Purple-themed video controls
              }}
            >
              <source src={video.videoUrl || "#"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-purple-300 text-2xl"
            >
              <X className="w-8 h-8" />
            </Button>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {video.title}
            </h2>
            
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600 dark:text-gray-400">
                {formatViews(video.viewCount)} views • {formatTimeAgo(new Date(video.publishedAt!))}
              </p>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={() => likeMutation.mutate()}
                  disabled={likeMutation.isPending}
                  className={cn(
                    "flex items-center space-x-2",
                    isLiked && "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 border-purple-300"
                  )}
                >
                  <ThumbsUp className={cn("w-5 h-5", isLiked && "fill-current")} />
                  <span>{formatViews(video.likeCount)}</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Share className="w-5 h-5" />
                  <span>Share</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={video.channel.avatar || "https://via.placeholder.com/48x48"}
                  alt={`${video.channel.displayName} avatar`}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white flex items-center">
                    {video.channel.displayName}
                    {video.channel.verified && (
                      <span className="ml-1 text-purple-500">✓</span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formatSubscribers(video.channel.subscriberCount || 0)}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => subscribeMutation.mutate()}
                disabled={subscribeMutation.isPending}
                className={cn(
                  "px-6 py-2 font-medium rounded-full transition-all duration-200",
                  isSubscribed
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                    : "btn-supertuber"
                )}
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </Button>
            </div>
            
            {video.description && (
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                  {video.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return "just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  if (diffInSeconds < 2629746) return `${Math.floor(diffInSeconds / 604800)}w ago`;
  if (diffInSeconds < 31556952) return `${Math.floor(diffInSeconds / 2629746)}mo ago`;
  return `${Math.floor(diffInSeconds / 31556952)}y ago`;
}
