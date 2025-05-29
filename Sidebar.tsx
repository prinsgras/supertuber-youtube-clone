import { Link, useLocation } from "wouter";
import { 
  Home, TrendingUp, Heart, Library, Clock, ThumbsUp, 
  Gamepad2, Music, Trophy, Newspaper, Video, Settings,
  HelpCircle, FileText, Shield, Phone, Users, Megaphone,
  Code, Gavel, Lock, AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/use-sidebar";

const mainNavItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: TrendingUp, label: "Trending", href: "/trending" },
  { icon: Heart, label: "Subscriptions", href: "/subscriptions" },
];

const libraryItems = [
  { icon: Library, label: "Library", href: "/library" },
  { icon: Clock, label: "History", href: "/history" },
  { icon: Video, label: "Watch Later", href: "/watch-later" },
  { icon: ThumbsUp, label: "Liked Videos", href: "/liked-videos" },
];

const exploreItems = [
  { icon: Gamepad2, label: "Gaming", href: "/gaming" },
  { icon: Music, label: "Music", href: "/music" },
  { icon: Trophy, label: "Sports", href: "/sports" },
  { icon: Newspaper, label: "News", href: "/news" },
];

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Press", href: "/press" },
  { label: "Copyright", href: "/copyright" },
  { label: "Contact", href: "/contact" },
  { label: "Creators", href: "/creators" },
  { label: "Advertise", href: "/advertise" },
  { label: "Developers", href: "/developers" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Policy & Safety", href: "/policy-safety" },
  { label: "Help", href: "/help" },
  { label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const [location] = useLocation();
  const { isCollapsed } = useSidebar();

  const NavItem = ({ icon: Icon, label, href }: { icon: any; label: string; href: string }) => {
    const isActive = location === href;
    
    return (
      <Link href={href}>
        <div className={cn(
          "sidebar-item",
          isActive && "active bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
        )}>
          <Icon className="w-6 h-6 flex-shrink-0" />
          {!isCollapsed && <span className="font-medium">{label}</span>}
        </div>
      </Link>
    );
  };

  const FooterLink = ({ label, href }: { label: string; href: string }) => (
    <Link href={href}>
      <span className="hover:text-purple-600 transition-colors">
        {label}
      </span>
    </Link>
  );

  return (
    <aside className={cn(
      "bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed h-full overflow-y-auto pt-4 z-40 transition-all duration-300",
      isCollapsed ? "w-20" : "w-64"
    )}>
      <nav className="px-3">
        {/* Main Navigation */}
        <div className="space-y-1 mb-6">
          {mainNavItems.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </div>

        {!isCollapsed && <hr className="border-gray-200 dark:border-gray-700 mb-4" />}

        {/* Library */}
        <div className="space-y-1 mb-6">
          {libraryItems.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </div>

        {!isCollapsed && <hr className="border-gray-200 dark:border-gray-700 mb-4" />}

        {/* Explore */}
        <div className="space-y-1 mb-6">
          {!isCollapsed && (
            <h3 className="px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Explore
            </h3>
          )}
          {exploreItems.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </div>

        {!isCollapsed && (
          <>
            <hr className="border-gray-200 dark:border-gray-700 mb-4" />
            
            {/* Footer Links */}
            <div className="px-3 py-2 text-xs text-gray-500 dark:text-gray-400 space-y-2">
              <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                {footerLinks.slice(0, 6).map((link) => (
                  <FooterLink key={link.href} {...link} />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                {footerLinks.slice(6).map((link) => (
                  <FooterLink key={link.href} {...link} />
                ))}
              </div>
              <p className="pt-2">© 2024 SuperTuber</p>
            </div>
          </>
        )}
      </nav>
    </aside>
  );
}
