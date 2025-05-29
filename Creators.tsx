import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, DollarSign, Users, BarChart3, Lightbulb, Megaphone } from "lucide-react";

export function Creators() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">SuperTuber for Creators</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Turn your passion into a career. Join millions of creators who are building communities 
          and earning revenue on SuperTuber.
        </p>
        <div className="mt-8 space-x-4">
          <Button className="btn-supertuber">
            Start Creating
          </Button>
          <Button variant="outline">
            Learn More
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Play className="w-6 h-6 text-purple-500" />
              <span>Create</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Upload videos, go live, create Shorts, and build your unique channel with our creator tools.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• HD video uploads</li>
              <li>• Live streaming</li>
              <li>• Mobile creation tools</li>
              <li>• Custom thumbnails</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-purple-500" />
              <span>Connect</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Build a community around your content with comments, community posts, and live chat.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Community tab</li>
              <li>• Audience insights</li>
              <li>• Subscriber management</li>
              <li>• Engagement analytics</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="w-6 h-6 text-purple-500" />
              <span>Earn</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Monetize your content through multiple revenue streams and turn your hobby into income.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Ad revenue sharing</li>
              <li>• Channel memberships</li>
              <li>• Super Chat & Super Thanks</li>
              <li>• Merchandise shelf</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white mb-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Creator Fund Program</h2>
          <p className="text-lg mb-6">
            Join our $100M Creator Fund designed to help emerging creators grow their channels 
            and build sustainable businesses on SuperTuber.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">$100M</div>
              <div className="text-sm opacity-90">Total Fund Size</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm opacity-90">Creators Supported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
          </div>
          <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
            Apply for Funding
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Creator Resources</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Lightbulb className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Creator Academy</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Free courses on content creation, audience building, and channel optimization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <BarChart3 className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics Studio</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Deep insights into your audience, performance metrics, and growth opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Megaphone className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Creator Support</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Dedicated support team to help you succeed and resolve any issues quickly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Success Stories</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">From Hobby to Full-Time Career</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Tech Review Channel</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                "Started creating tech reviews in my spare time. Now I have 2M subscribers and 
                this is my full-time job. SuperTuber's monetization tools made it possible."
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Building a Community</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Cooking Channel</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                "The community features helped me connect with viewers who share my passion for cooking. 
                We've created a supportive space for food lovers worldwide."
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Educational Impact</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Science Education</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                "My science videos have reached millions of students globally. SuperTuber's reach 
                allows me to make education accessible to everyone."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start Your Journey?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Join millions of creators who are sharing their stories, building communities, and earning 
          income on SuperTuber. Your voice matters, and we're here to help you share it with the world.
        </p>
        <Button className="btn-supertuber">
          Create Your Channel
        </Button>
      </div>
    </div>
  );
}
