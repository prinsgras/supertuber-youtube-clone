import { Library as LibraryIcon, Clock, Video, ThumbsUp, BookOpen, Music, Play } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

const libraryItems = [
  {
    icon: Clock,
    title: "History",
    description: "Videos you've watched",
    href: "/history",
    color: "text-blue-500"
  },
  {
    icon: Video,
    title: "Watch Later",
    description: "Videos saved for later",
    href: "/watch-later",
    color: "text-green-500"
  },
  {
    icon: ThumbsUp,
    title: "Liked Videos",
    description: "Videos you've liked",
    href: "/liked-videos",
    color: "text-purple-500"
  },
  {
    icon: BookOpen,
    title: "Playlists",
    description: "Your video collections",
    href: "/playlists",
    color: "text-orange-500"
  },
  {
    icon: Music,
    title: "Your Music",
    description: "Music videos and playlists",
    href: "/music",
    color: "text-pink-500"
  },
  {
    icon: Play,
    title: "Your Videos",
    description: "Videos you've uploaded",
    href: "/your-videos",
    color: "text-red-500"
  }
];

export function Library() {
  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <LibraryIcon className="w-8 h-8 text-purple-500" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Library</h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {libraryItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-purple-100 dark:group-hover:bg-purple-900 transition-colors">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <LibraryIcon className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">
            Your recent activity will appear here
          </p>
        </div>
      </div>
    </div>
  );
}
