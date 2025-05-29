import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  User, Shield, Bell, Monitor, Globe, Eye, 
  Lock, Download, Trash2, Palette, Volume2,
  Clock, FileText, HelpCircle
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function Settings() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("general");

  const settingSections = [
    { id: "general", label: "General", icon: User },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "playback", label: "Playback & Performance", icon: Monitor },
    { id: "language", label: "Language & Location", icon: Globe },
    { id: "connected", label: "Connected Apps", icon: Link },
    { id: "billing", label: "Billing & Payments", icon: FileText },
    { id: "advanced", label: "Advanced", icon: Settings },
  ];

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Information</h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="Enter your first name" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Enter your last name" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="your.email@example.com" />
          </div>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="@yourusername" />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Channel Settings</h3>
        <div className="space-y-4">
          <div>
            <Label htmlFor="channelName">Channel Name</Label>
            <Input id="channelName" placeholder="Your channel name" />
          </div>
          <div>
            <Label htmlFor="channelDescription">Channel Description</Label>
            <Textarea 
              id="channelDescription" 
              placeholder="Tell viewers about your channel..."
              rows={4}
            />
          </div>
          <div>
            <Label htmlFor="channelKeywords">Channel Keywords</Label>
            <Input id="channelKeywords" placeholder="gaming, tutorials, reviews" />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Appearance</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Theme</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Choose your preferred theme</p>
            </div>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Restricted Mode</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Filter out potentially mature content</p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Visibility</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Keep all my subscriptions private</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hide your subscriptions from others</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Keep all my saved playlists private</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hide your saved playlists from others</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Keep my channel visible on search results</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Allow others to find your channel</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Comments & Interactions</h3>
        <div className="space-y-4">
          <div>
            <Label>Who can comment on your channel</Label>
            <Select defaultValue="all">
              <SelectTrigger className="w-full mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Everyone</SelectItem>
                <SelectItem value="subscribers">Subscribers only</SelectItem>
                <SelectItem value="none">No one</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Review comments before they appear</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hold comments for review</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Filter potentially inappropriate comments</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Automatically filter spam and inappropriate comments</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data & Personalization</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Pause watch history</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Stop saving the videos you watch</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Pause search history</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Stop saving your searches</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Use your activity to improve recommendations</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Help us suggest better content</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Subscriptions</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Notify about uploads from subscribed channels</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Recommended videos</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Notify about videos we think you'll like</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Activity on your channel</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Comments, likes, and new subscribers</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Activity on your comments</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Replies to your comments</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Email Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Send me emails about my SuperTuber activity</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Updates on comments, subscriptions, etc.</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Send me promotional emails from SuperTuber</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">News, features, and tips</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Send me creator updates and tips</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Help grow your channel</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mobile Push Notifications</h3>
        <div className="space-y-4">
          <div>
            <Label>Notification frequency</Label>
            <Select defaultValue="occasionally">
              <SelectTrigger className="w-full mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="occasionally">Occasionally</SelectItem>
                <SelectItem value="none">None</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Sounds</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Play notification sounds</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlaybackSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Video Quality</h3>
        <div className="space-y-4">
          <div>
            <Label>Choose your video quality</Label>
            <Select defaultValue="auto">
              <SelectTrigger className="w-full mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto (recommended)</SelectItem>
                <SelectItem value="2160p">2160p 4K</SelectItem>
                <SelectItem value="1440p">1440p HD</SelectItem>
                <SelectItem value="1080p">1080p HD</SelectItem>
                <SelectItem value="720p">720p</SelectItem>
                <SelectItem value="480p">480p</SelectItem>
                <SelectItem value="360p">360p</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Always play HD on fullscreen</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">When available and connection permits</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Autoplay</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Autoplay next video</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Automatically play suggested videos</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Autoplay on homepage</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Play video previews on homepage</p>
            </div>
            <Switch />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Subtitles and Closed Captions</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Always show captions</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Display captions when available</p>
            </div>
            <Switch />
          </div>
          <div>
            <Label>Caption language</Label>
            <Select defaultValue="auto">
              <SelectTrigger className="w-full mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto-generated</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="it">Italian</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Caption size</Label>
            <Select defaultValue="medium">
              <SelectTrigger className="w-full mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAdvancedSettings = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Data Management</h3>
        <div className="space-y-4">
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Download className="w-5 h-5 text-blue-500 mt-1" />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">Download your data</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Export your SuperTuber data including videos, comments, and watch history
                  </p>
                  <Button variant="outline" size="sm">
                    Download Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 dark:border-yellow-800">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-500 mt-1" />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">Clear watch history</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Remove all videos from your watch history
                  </p>
                  <Button variant="outline" size="sm">
                    Clear History
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <Trash2 className="w-5 h-5 text-red-500 mt-1" />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">Delete your SuperTuber channel</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Permanently delete your channel and all associated content
                  </p>
                  <Button variant="destructive" size="sm">
                    Delete Channel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Developer Options</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Enable debug mode</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Show additional debugging information</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label>Beta features</Label>
              <p className="text-sm text-gray-600 dark:text-gray-400">Try new experimental features</p>
            </div>
            <Switch />
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Security</h3>
        <div className="space-y-4">
          <div>
            <Label>Two-factor authentication</Label>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Add an extra layer of security to your account
            </p>
            <Button variant="outline" size="sm">
              Enable 2FA
            </Button>
          </div>
          <div>
            <Label>Active sessions</Label>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Manage devices where you're signed in
            </p>
            <Button variant="outline" size="sm">
              Manage Sessions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettingContent = () => {
    switch (activeSection) {
      case "general": return renderGeneralSettings();
      case "privacy": return renderPrivacySettings();
      case "notifications": return renderNotificationSettings();
      case "playback": return renderPlaybackSettings();
      case "advanced": return renderAdvancedSettings();
      default:
        return (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Settings section under development
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              This settings section is coming soon.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Settings Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {settingSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                        activeSection === section.id
                          ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-r-2 border-purple-500'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <section.icon className="w-5 h-5" />
                      <span className="font-medium">{section.label}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-8">
                {renderSettingContent()}
                
                <Separator className="my-8" />
                
                <div className="flex justify-end space-x-3">
                  <Button variant="outline">
                    Cancel
                  </Button>
                  <Button className="btn-supertuber">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
