import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, Zap, Shield, Book, Github } from "lucide-react";

export function Developers() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">SuperTuber for Developers</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Build amazing applications with SuperTuber's APIs and developer tools. 
          Access video data, upload content, and create innovative experiences.
        </p>
        <div className="mt-8 space-x-4">
          <Button className="btn-supertuber">
            Get Started
          </Button>
          <Button variant="outline">
            View Documentation
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="w-6 h-6 text-purple-500" />
              <span>Data API</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Access video metadata, channel information, comments, and analytics data.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• RESTful API design</li>
              <li>• JSON responses</li>
              <li>• Rate limiting</li>
              <li>• OAuth 2.0 authentication</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-purple-500" />
              <span>Player API</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Embed videos with custom controls and handle player events programmatically.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• JavaScript API</li>
              <li>• Event handling</li>
              <li>• Custom styling</li>
              <li>• Mobile responsive</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-purple-500" />
              <span>Live Streaming</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Stream live video content directly to SuperTuber using RTMP protocol.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• RTMP ingestion</li>
              <li>• Real-time chat</li>
              <li>• Stream management</li>
              <li>• DVR functionality</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Popular APIs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Search API</h3>
            <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4 text-green-400 font-mono text-sm mb-4">
              <div>GET /api/v3/search</div>
              <div className="text-gray-400">?part=snippet&q=programming</div>
              <div className="text-gray-400">&maxResults=25&key=API_KEY</div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Search for videos, channels, and playlists with advanced filtering options.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Videos API</h3>
            <div className="bg-gray-900 dark:bg-gray-700 rounded-lg p-4 text-green-400 font-mono text-sm mb-4">
              <div>GET /api/v3/videos</div>
              <div className="text-gray-400">?part=snippet,statistics</div>
              <div className="text-gray-400">&id=VIDEO_ID&key=API_KEY</div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Retrieve detailed information about specific videos including view counts and metadata.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Developer Resources</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Book className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Documentation</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      Comprehensive guides, API references, and tutorials to get you started.
                    </p>
                    <Button variant="outline" size="sm">View Docs</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Github className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Code Samples</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      Open-source examples in multiple programming languages.
                    </p>
                    <Button variant="outline" size="sm">Browse GitHub</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Code className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">SDKs & Libraries</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      Official client libraries for popular programming languages.
                    </p>
                    <Button variant="outline" size="sm">Download SDKs</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Use Cases</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Content Management</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Build applications to upload, organize, and manage video content at scale.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Analytics Dashboards</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Create custom analytics and reporting tools using our comprehensive data APIs.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Social Integration</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Integrate SuperTuber content into social media platforms and community sites.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Educational Platforms</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Build learning management systems with embedded video content and progress tracking.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white mb-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Developer Program</h2>
          <p className="text-lg mb-6">
            Join our developer program for early access to new APIs, dedicated support, 
            and opportunities to showcase your applications.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
            <div>✓ Priority API access</div>
            <div>✓ Developer community</div>
            <div>✓ Technical workshops</div>
          </div>
          <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            Join Program
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>API Quotas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Free tier:</span>
                <span className="font-semibold">10,000 requests/day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Developer:</span>
                <span className="font-semibold">100,000 requests/day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Enterprise:</span>
                <span className="font-semibold">Custom limits</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Supported Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div>• JavaScript / Node.js</div>
              <div>• Python</div>
              <div>• Java</div>
              <div>• PHP</div>
              <div>• Ruby</div>
              <div>• Go</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Support Channels</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div>• Stack Overflow</div>
              <div>• Developer Forums</div>
              <div>• GitHub Issues</div>
              <div>• Email Support</div>
              <div>• Live Chat</div>
              <div>• Office Hours</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
