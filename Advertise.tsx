import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Globe, Users, BarChart3, Zap } from "lucide-react";

export function Advertise() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Advertise on SuperTuber</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Reach billions of viewers worldwide with engaging video ads. Connect with your audience 
          where they're already watching and engaging.
        </p>
        <div className="mt-8 space-x-4">
          <Button className="btn-supertuber">
            Start Advertising
          </Button>
          <Button variant="outline">
            Get a Quote
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-purple-500" />
              <span>Global Reach</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600 mb-2">2B+</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Monthly logged-in users across 100+ countries and territories
            </p>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Available in 80+ languages</li>
              <li>• Mobile-first audience</li>
              <li>• Cross-device engagement</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-6 h-6 text-purple-500" />
              <span>Precise Targeting</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600 mb-2">100+</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Targeting options to reach your ideal audience
            </p>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Demographics & interests</li>
              <li>• Custom audiences</li>
              <li>• Behavioral targeting</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-purple-500" />
              <span>Proven Results</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600 mb-2">95%</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Of advertisers see measurable business impact
            </p>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Brand awareness lift</li>
              <li>• Conversion tracking</li>
              <li>• ROI optimization</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Ad Formats That Drive Results</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>TrueView Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Skippable video ads that play before, during, or after videos. Pay only when viewers choose to watch.
              </p>
              <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                <p>✓ Cost-effective reach</p>
                <p>✓ Engaged audience</p>
                <p>✓ Flexible budgets</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bumper Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                6-second non-skippable ads perfect for building brand awareness and reaching broad audiences.
              </p>
              <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                <p>✓ Maximum reach</p>
                <p>✓ Memorable messages</p>
                <p>✓ Mobile-optimized</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Discovery Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Promote your videos in search results, suggested videos, and the homepage.
              </p>
              <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                <p>✓ Intent-based targeting</p>
                <p>✓ Native integration</p>
                <p>✓ High-quality views</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white mb-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">SuperTuber for Business</h2>
          <p className="text-lg mb-6">
            Get dedicated support, advanced measurement tools, and strategic guidance to maximize 
            your advertising investment on SuperTuber.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Dedicated Account Manager</div>
            </div>
            <div className="text-center">
              <BarChart3 className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Advanced Analytics</div>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Priority Support</div>
            </div>
          </div>
          <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            Contact Sales Team
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose SuperTuber?</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Massive Scale</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Reach billions of viewers across all demographics and interests worldwide.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Engaged Audience</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Users actively choose what to watch, creating higher engagement with your ads.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Measurable Impact</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Track every view, click, and conversion with detailed analytics and reporting.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Brand Safety</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Advanced controls and verification systems protect your brand reputation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Success Metrics</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="text-2xl font-bold text-purple-600">70%</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Brand Awareness Lift</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Average increase in brand awareness for video campaigns
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <div className="text-2xl font-bold text-purple-600">3x</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Higher Recall</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Video ads achieve 3x higher recall than other digital formats
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <div className="text-2xl font-bold text-purple-600">40%</div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Conversion Boost</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Average increase in conversions with video advertising
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Join thousands of businesses already advertising on SuperTuber. Create your first campaign 
          in minutes or speak with our team for a custom solution.
        </p>
        <div className="space-x-4">
          <Button className="btn-supertuber">
            Create Campaign
          </Button>
          <Button variant="outline">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
