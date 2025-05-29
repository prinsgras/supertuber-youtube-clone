import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Users, Flag, Eye, Lock } from "lucide-react";

export function PolicySafety() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Policy & Safety</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          SuperTuber is committed to fostering a safe, diverse, and respectful community. 
          Learn about our policies and how we protect our users.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-purple-500" />
              <span>Community Guidelines</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Our standards for what content is and isn't allowed on SuperTuber.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Read Guidelines
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Flag className="w-6 h-6 text-purple-500" />
              <span>Report Content</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Help us keep SuperTuber safe by reporting policy violations.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Report Issue
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-purple-500" />
              <span>Safety Resources</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Tools and information to help you stay safe online.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Safety Center
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Policies</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Harmful or Dangerous Content</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Content that promotes harmful activities, violence, or dangerous challenges is not allowed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Eye className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Harassment & Cyberbullying</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      We don't allow content that targets individuals with harassment, threats, or cyberbullying.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Lock className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Privacy & Personal Information</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Don't share personal information of others without consent or post private information.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Safety Features</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Restricted Mode</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                An optional setting that helps filter out potentially mature content.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Comment Filtering</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Automatic filtering of potentially inappropriate comments and the ability to block users.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Privacy Controls</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Settings to control who can contact you, comment on your videos, and see your activity.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Time Management</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Tools to track and manage your time spent watching videos on SuperTuber.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white mb-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Our Enforcement Process</h2>
          <p className="text-lg mb-6">
            When content violates our policies, we take action to protect our community. 
            Here's how our enforcement process works:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
            <div>
              <div className="font-semibold mb-1">1. Detection</div>
              <div className="opacity-90">Automated systems and human reviewers identify policy violations</div>
            </div>
            <div>
              <div className="font-semibold mb-1">2. Review</div>
              <div className="opacity-90">Trained specialists review flagged content against our policies</div>
            </div>
            <div>
              <div className="font-semibold mb-1">3. Action</div>
              <div className="opacity-90">Appropriate consequences applied, from warnings to account termination</div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Policy Violations & Strikes</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">First Strike</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Warning issued, content removed, and you'll receive training about our policies.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Second Strike</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Two-week suspension from uploading videos, live streaming, or other activities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Third Strike</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Channel termination. All your videos will be removed from SuperTuber.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Appeal Process</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>If You Think We Made a Mistake</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <p>1. Submit an appeal through your Creator Studio</p>
                  <p>2. Our team will review your appeal within 48 hours</p>
                  <p>3. You'll receive an email with our decision</p>
                  <p>4. If upheld, the strike remains; if overturned, it's removed</p>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Submit Appeal
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What Happens Next</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <p>• Appeals are reviewed by different team members</p>
                  <p>• We consider context and intent in our decisions</p>
                  <p>• Successful appeals remove strikes from your account</p>
                  <p>• You can appeal each strike only once</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Building a Better Community Together</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Your actions help shape SuperTuber. By following our guidelines, reporting violations, 
          and treating others with respect, you're helping create a safe space for everyone.
        </p>
        <div className="space-x-4">
          <Button className="btn-supertuber">
            Learn More
          </Button>
          <Button variant="outline">
            Community Guidelines
          </Button>
        </div>
      </div>
    </div>
  );
}
