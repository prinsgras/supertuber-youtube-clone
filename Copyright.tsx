import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, FileText, MessageSquare } from "lucide-react";

export function Copyright() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Copyright & Legal</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Learn about copyright policies, how to protect your content, and what to do if you encounter copyright issues.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-purple-500" />
              <span>Copyright Basics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Copyright is a legal protection for original creative works. It gives creators exclusive 
              rights to use, distribute, and monetize their content. Understanding copyright helps 
              protect your work and respect others' rights.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-purple-500" />
              <span>Fair Use</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Fair use allows limited use of copyrighted material for purposes like commentary, 
              criticism, parody, or education. However, fair use is complex and depends on 
              several factors including purpose, nature, amount used, and market impact.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Copyright Protection on SuperTuber</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Content ID System</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our Content ID system automatically scans uploaded videos against a database of copyrighted content. 
              When a match is detected, the copyright owner can choose to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-6">
              <li>Block the video from being viewed</li>
              <li>Monetize the video by running ads</li>
              <li>Track the video's viewership statistics</li>
            </ul>

            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">DMCA Takedown Process</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We comply with the Digital Millennium Copyright Act (DMCA). Copyright owners can submit 
              takedown requests for infringing content, and creators can file counter-notifications 
              if they believe the claim is invalid.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">For Creators</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-purple-500" />
                  <span>Protecting Your Content</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Your original content is automatically copyrighted</li>
                  <li>Consider registering important works officially</li>
                  <li>Use Content ID to monitor your content</li>
                  <li>Include copyright notices in descriptions</li>
                  <li>Document your creative process</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-6 h-6 text-purple-500" />
                  <span>Using Others' Content</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Always get permission when possible</li>
                  <li>Use royalty-free or Creative Commons content</li>
                  <li>Create original content when in doubt</li>
                  <li>Understand fair use limitations</li>
                  <li>Give proper attribution</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Need Help?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            If you have questions about copyright or need to report infringement:
          </p>
          <div className="space-y-2 text-gray-600 dark:text-gray-400">
            <p>• Visit our Copyright Help Center for detailed guides</p>
            <p>• Submit a copyright claim through our reporting tools</p>
            <p>• Contact our legal team for complex issues</p>
            <p>• Join our Creator Academy for copyright education</p>
          </div>
        </div>
      </div>
    </div>
  );
}
