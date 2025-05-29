import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarProvider, useSidebar } from "@/hooks/use-sidebar";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/utils";

// Pages
import { Home } from "@/pages/Home";
import { Watch } from "@/pages/Watch";
import { Search } from "@/pages/Search";
import { Trending } from "@/pages/Trending";
import { Subscriptions } from "@/pages/Subscriptions";
import { Library } from "@/pages/Library";
import { History } from "@/pages/History";
import { WatchLater } from "@/pages/WatchLater";
import { LikedVideos } from "@/pages/LikedVideos";
import { Gaming } from "@/pages/Gaming";
import { Music } from "@/pages/Music";
import { Sports } from "@/pages/Sports";
import { News } from "@/pages/News";
import { Channel } from "@/pages/Channel";
import { About } from "@/pages/About";
import { Press } from "@/pages/Press";
import { Copyright } from "@/pages/Copyright";
import { Contact } from "@/pages/Contact";
import { Creators } from "@/pages/Creators";
import { Advertise } from "@/pages/Advertise";
import { Developers } from "@/pages/Developers";
import { Terms } from "@/pages/Terms";
import { Privacy } from "@/pages/Privacy";
import { PolicySafety } from "@/pages/PolicySafety";
import { Help } from "@/pages/Help";
import { Settings } from "@/pages/Settings";
import NotFound from "@/pages/not-found";

function AppLayout() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className={cn(
          "flex-1 transition-all duration-300 min-h-screen",
          isCollapsed ? "ml-20" : "ml-64"
        )}>
          <div className="pt-16">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/watch" component={Watch} />
              <Route path="/search" component={Search} />
              <Route path="/trending" component={Trending} />
              <Route path="/subscriptions" component={Subscriptions} />
              <Route path="/library" component={Library} />
              <Route path="/history" component={History} />
              <Route path="/watch-later" component={WatchLater} />
              <Route path="/liked-videos" component={LikedVideos} />
              <Route path="/gaming" component={Gaming} />
              <Route path="/music" component={Music} />
              <Route path="/sports" component={Sports} />
              <Route path="/news" component={News} />
              <Route path="/channel/:id" component={Channel} />
              <Route path="/about" component={About} />
              <Route path="/press" component={Press} />
              <Route path="/copyright" component={Copyright} />
              <Route path="/contact" component={Contact} />
              <Route path="/creators" component={Creators} />
              <Route path="/advertise" component={Advertise} />
              <Route path="/developers" component={Developers} />
              <Route path="/terms" component={Terms} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/policy-safety" component={PolicySafety} />
              <Route path="/help" component={Help} />
              <Route path="/settings" component={Settings} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="supertuber-ui-theme">
        <SidebarProvider>
          <TooltipProvider>
            <Toaster />
            <AppLayout />
          </TooltipProvider>
        </SidebarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
