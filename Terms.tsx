import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertCircle } from "lucide-react";

export function Terms() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          These terms govern your use of SuperTuber services. Please read them carefully.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
          Last updated: December 2024
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-purple-500" />
              <span>Your Agreement</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              By using SuperTuber, you agree to these terms, our Privacy Policy, and Community Guidelines.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Scale className="w-6 h-6 text-purple-500" />
              <span>Your Rights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              You retain ownership of your content while granting us certain rights to operate the service.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="w-6 h-6 text-purple-500" />
              <span>Your Responsibilities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              You're responsible for your content, complying with laws, and respecting others' rights.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Welcome to SuperTuber! These Terms of Service ("Terms") govern your use of SuperTuber's 
              website, applications, and services (collectively, the "Service"). By accessing or using 
              our Service, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              If you don't agree to these Terms, please don't use our Service. We may update these 
              Terms from time to time, and we'll notify you of significant changes.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Using SuperTuber</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Who Can Use SuperTuber</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                <li>You must be at least 13 years old to create an account</li>
                <li>Children under 18 need parental consent</li>
                <li>You must provide accurate information when creating an account</li>
                <li>You're responsible for maintaining account security</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Permissions and Restrictions</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                <li>You may access and use the Service for personal, non-commercial use</li>
                <li>You may not download content except through designated features</li>
                <li>You may not access the Service through automated means</li>
                <li>You may not create accounts through unauthorized means</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Your Content</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Uploading Content</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                You can upload videos, comments, and other content to SuperTuber. You retain ownership 
                of your content, but you grant us certain rights to use it.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                <li>Content must comply with our Community Guidelines</li>
                <li>You must own or have permission to upload the content</li>
                <li>You're responsible for your content and its consequences</li>
                <li>We may remove content that violates our policies</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Rights You Grant</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                By uploading content, you grant SuperTuber a worldwide, non-exclusive, royalty-free 
                license to use, reproduce, distribute, display, and perform your content in connection 
                with the Service.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Account Suspension and Termination</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Termination by You</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  You may stop using our Service at any time. You can delete your account through 
                  your account settings.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Termination by SuperTuber</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  We may suspend or terminate your access if you violate these Terms or our policies. 
                  We'll provide notice when possible, unless:
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  <li>You've seriously or repeatedly violated these Terms</li>
                  <li>Doing so would cause legal liability for us or others</li>
                  <li>Doing so would compromise an investigation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Disclaimers and Limitations</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Service Availability</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We provide the Service "as is" and make no warranties about its availability, 
                reliability, or functionality. The Service may experience downtime or interruptions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Limitation of Liability</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                To the extent permitted by law, SuperTuber won't be liable for any indirect, 
                incidental, special, or consequential damages arising from your use of the Service.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. General</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Changes to Terms</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We may update these Terms to reflect changes in our services or applicable law. 
                We'll notify you of material changes.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                If you have questions about these Terms, please contact us through our 
                support channels or legal team.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 p-6 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Questions About These Terms?</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          If you have any questions about these Terms of Service, please don't hesitate to contact us. 
          We're here to help clarify any concerns you may have.
        </p>
        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <p>Email: legal@supertuber.com</p>
          <p>Phone: 1-800-SUPERTUBER</p>
          <p>Address: 901 Cherry Ave, San Bruno, CA 94066</p>
        </div>
      </div>
    </div>
  );
}
