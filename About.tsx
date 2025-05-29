import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Globe, Award, Heart } from "lucide-react";

export function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-16 h-16 supertuber-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-xl">ST</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About SuperTuber</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          SuperTuber is a video sharing platform that empowers creators and connects communities 
          through the power of visual storytelling.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-purple-500" />
              <span>Our Mission</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              To give everyone a voice and show them the world. We believe that everyone deserves 
              to have a voice, and that the world becomes a better place when we listen, share, 
              and build community through our stories.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-purple-500" />
              <span>Global Reach</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              SuperTuber operates globally, with localized versions in over 100 countries and 
              territories, allowing creators to reach audiences worldwide while maintaining 
              cultural relevance and accessibility.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-purple-500" />
              <span>Creator Support</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              We provide creators with the tools, resources, and revenue opportunities they need 
              to turn their passion into a sustainable business, fostering innovation and 
              creativity across all content categories.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-purple-500" />
              <span>Community First</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              At the heart of SuperTuber is our commitment to building safe, inclusive communities 
              where people can connect, learn, and grow together through shared experiences and 
              diverse perspectives.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Freedom of Expression</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We believe people should be able to speak freely, share opinions, foster open dialogue, 
              and that creative freedom leads to new voices, formats, and possibilities.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Information</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We believe people should have easy, open access to information and that video is a 
              powerful force for education, building understanding, and documenting world events.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Opportunity</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We believe everyone should have the opportunity to find, grow, and build a community, 
              and that access to information and opportunity should be available to all.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Responsibility</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We believe in acting responsibly towards our creators, viewers, partners, and employees, 
              upholding a duty of care and working to get the details right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
