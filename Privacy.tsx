import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Settings, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Privacy() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
          Last updated: December 2024
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-purple-500" />
              <span>Data Protection</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We use industry-standard security measures to protect your personal information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="w-6 h-6 text-purple-500" />
              <span>Transparency</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We're clear about what data we collect and how we use it to improve your experience.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-6 h-6 text-purple-500" />
              <span>Your Control</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              You have control over your data with tools to view, download, and delete your information.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  <li>Name and email address</li>
                  <li>Profile picture and channel art</li>
                  <li>Account preferences and settings</li>
                  <li>Subscription and purchase history</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  <li>Videos you watch and search queries</li>
                  <li>Comments and community interactions</li>
                  <li>Device information and IP address</li>
                  <li>Location data (with permission)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Provide and Improve Services</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  <li>Deliver personalized content recommendations</li>
                  <li>Process uploads and maintain your channel</li>
                  <li>Analyze usage patterns to improve our platform</li>
                  <li>Provide customer support and respond to inquiries</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Safety and Security</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  <li>Detect and prevent spam, fraud, and abuse</li>
                  <li>Enforce our Community Guidelines and Terms</li>
                  <li>Protect the rights and safety of our users</li>
                  <li>Comply with legal obligations and requests</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information Sharing</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">We Don't Sell Your Personal Information</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                SuperTuber does not sell your personal information to third parties. We may share 
                information in limited circumstances:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">With Your Consent</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  When you explicitly agree to share information with third-party services or applications.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Legal Requirements</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  When required by law, court order, or to protect rights and safety.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Service Providers</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  With trusted partners who help us operate and improve our services.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Public Information</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Content you choose to make public, like videos and comments, may be visible to others.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Privacy Controls</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-6 h-6 text-purple-500" />
                  <span>View Your Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Access and review the information associated with your account.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View Data
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="w-6 h-6 text-purple-500" />
                  <span>Download Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Export your content and account information in a portable format.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trash2 className="w-6 h-6 text-purple-500" />
                  <span>Delete Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Remove specific content or delete your entire account permanently.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Delete Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookies and Tracking</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We use cookies and similar technologies to provide and improve our services. These help us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Essential Functions</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  <li>Keep you logged in to your account</li>
                  <li>Remember your preferences and settings</li>
                  <li>Provide security and prevent fraud</li>
                  <li>Deliver core platform functionality</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Personalization</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  <li>Recommend relevant content</li>
                  <li>Customize your viewing experience</li>
                  <li>Show targeted advertisements</li>
                  <li>Analyze usage patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              SuperTuber is committed to protecting children's privacy. Our services are not directed 
              to children under 13, and we don't knowingly collect personal information from children under 13.
            </p>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• Users must be at least 13 years old to create an account</p>
              <p>• Children under 18 should have parental consent</p>
              <p>• We provide additional protections for younger users</p>
              <p>• Parents can report concerns about their child's account</p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Questions About Privacy?</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          If you have questions about this Privacy Policy or how we handle your information, 
          please contact our Privacy Team.
        </p>
        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <p>Email: privacy@supertuber.com</p>
          <p>Privacy Officer: 901 Cherry Ave, San Bruno, CA 94066</p>
          <p>Online: Visit our Privacy Help Center</p>
        </div>
      </div>
    </div>
  );
}
