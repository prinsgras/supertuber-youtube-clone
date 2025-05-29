import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Mail } from "lucide-react";

export function Press() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Press Center</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Access the latest news, press releases, and media resources from SuperTuber.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-purple-500" />
              <span>Press Releases</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Stay updated with our latest announcements, product launches, and company news.
            </p>
            <Button variant="outline" className="w-full">
              View All Releases
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="w-6 h-6 text-purple-500" />
              <span>Media Kit</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Download high-resolution logos, brand guidelines, and official assets.
            </p>
            <Button variant="outline" className="w-full">
              Download Kit
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="w-6 h-6 text-purple-500" />
              <span>Media Contact</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get in touch with our press team for interviews and media inquiries.
            </p>
            <Button variant="outline" className="w-full">
              Contact Us
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent News</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">SuperTuber Launches New Creator Fund Initiative</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">December 15, 2024</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Supporting emerging creators with resources and funding to grow their channels.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Enhanced Safety Features Roll Out Globally</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">December 10, 2024</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                New tools to help creators and viewers have safer, more positive experiences.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">SuperTuber Reaches 2 Billion Monthly Active Users</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">December 5, 2024</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Milestone reflects continued growth and global reach of the platform.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Brand Guidelines</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            When featuring SuperTuber in your content, please follow our brand guidelines:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>Use official SuperTuber logos and colors (purple/rose theme)</li>
            <li>Don't modify or alter our logo design</li>
            <li>Maintain proper spacing around our logo</li>
            <li>Use "SuperTuber" as one word with proper capitalization</li>
            <li>Contact our press team for usage questions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
