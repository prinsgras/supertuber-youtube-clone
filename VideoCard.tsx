import { Link } from "wouter";
import { formatViews, formatTimeAgo, cn } from "@/lib/utils";
import type { VideoWithChannel } from "@shared/schema";

interface VideoCardProps {
  video: VideoWithChannel;
  className?: string;
}

export function VideoCard({ video, className }: VideoCardProps) {
  return (
    <div className={cn("group cursor-pointer", className)}>
      <Link href={`/watch?v=${video.id}`}>
        <div className="video-thumbnail relative mb-3 rounded-xl overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105"
          />
          <div className="play-overlay absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-200 flex items-center justify-center opacity-0">
            <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
          {video.isLive && (
            <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              LIVE
            </div>
          )}
        </div>
      </Link>
      
      <div className="flex space-x-3">
        <Link href={`/channel/${video.channelId}`}>
          <img
            src={video.channel.avatar || "https://via.placeholder.com/40x40"}
            alt={`${video.channel.displayName} avatar`}
            className="w-10 h-10 rounded-full flex-shrink-0 hover:ring-2 hover:ring-purple-500 transition-all"
          />
        </Link>
        <div className="flex-1">
          <Link href={`/watch?v=${video.id}`}>
            <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2 mb-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              {video.title}
            </h3>
          </Link>
          <Link href={`/channel/${video.channelId}`}>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              {video.channel.displayName}
              {video.channel.verified && (
                <span className="ml-1 text-purple-500">✓</span>
              )}
            </p>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {formatViews(video.viewCount)} views • {formatTimeAgo(new Date(video.publishedAt!))}
          </p>
        </div>
      </div>
    </div>
  );
}
