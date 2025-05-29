import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  HelpCircle, Search, MessageCircle, Book, Video, 
  Shield, Settings, DollarSign, Users, FileText,
  ChevronRight, Phone, Mail, Clock
} from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    icon: Video,
    title: "Uploading & Managing Videos",
    color: "text-purple-500",
    questions: [
      {
        question: "How do I upload a video to SuperTuber?",
        answer: "Click the '+' button in the top right corner and select 'Upload video'. Choose your file, add title and description, select privacy settings, and click 'Publish'."
      },
      {
        question: "What video formats are supported?",
        answer: "SuperTuber supports MP4, MOV, AVI, WMV, FLV, and WebM formats. For best quality, we recommend MP4 with H.264 codec."
      },
      {
        question: "How long can my videos be?",
        answer: "Videos can be up to 12 hours long. For new accounts, there's a 15-minute limit until you verify your phone number."
      },
      {
        question: "Can I edit my video after uploading?",
        answer: "You can edit the title, description, thumbnail, and privacy settings after upload. To edit the video content itself, you'll need to re-upload."
      }
    ]
  },
  {
    icon: DollarSign,
    title: "Monetization & Revenue",
    color: "text-green-500",
    questions: [
      {
        question: "How do I start earning money on SuperTuber?",
        answer: "Join the SuperTuber Partner Program by meeting eligibility requirements: 1,000 subscribers, 4,000 watch hours in the past year, and adherence to our policies."
      },
      {
        question: "When do I get paid?",
        answer: "Payments are made monthly between the 10th-14th of each month for the previous month's earnings, provided you meet the minimum threshold of $100."
      },
      {
        question: "What are the different ways to earn money?",
        answer: "You can earn through ad revenue, channel memberships, Super Chat & Super Thanks, merchandise shelf, and brand partnerships."
      }
    ]
  },
  {
    icon: Shield,
    title: "Safety & Privacy",
    color: "text-blue-500",
    questions: [
      {
        question: "How do I report inappropriate content?",
        answer: "Click the three dots menu on any video and select 'Report'. Choose the appropriate reason and provide additional details if needed."
      },
      {
        question: "How can I control who sees my content?",
        answer: "Use privacy settings when uploading: Public (anyone can see), Unlisted (only people with the link), or Private (only you can see)."
      },
      {
        question: "What should I do if someone is harassing me?",
        answer: "Block the user, report their content, and consider restricting comments. For serious threats, contact law enforcement and our support team."
      }
    ]
  },
  {
    icon: Settings,
    title: "Account & Settings",
    color: "text-orange-500",
    questions: [
      {
        question: "How do I change my channel name?",
        answer: "Go to your channel settings, click 'Branding', and edit your channel name. Note that frequent changes may affect discoverability."
      },
      {
        question: "Can I delete my SuperTuber account?",
        answer: "Yes, go to Settings > Advanced settings > Delete channel. This action is permanent and cannot be undone."
      },
      {
        question: "How do I enable two-factor authentication?",
        answer: "Go to your Google Account settings, select Security, and enable 2-Step Verification for enhanced account protection."
      }
    ]
  }
];

const helpTopics = [
  {
    icon: Video,
    title: "Getting Started",
    description: "Learn the basics of creating and managing your SuperTuber channel",
    articles: 12
  },
  {
    icon: Users,
    title: "Building Your Audience",
    description: "Tips and strategies for growing your subscriber base",
    articles: 8
  },
  {
    icon: DollarSign,
    title: "Monetization",
    description: "Everything about earning money from your content",
    articles: 15
  },
  {
    icon: Shield,
    title: "Policies & Guidelines",
    description: "Understanding SuperTuber's rules and best practices",
    articles: 10
  },
  {
    icon: Settings,
    title: "Account Management",
    description: "Managing your account settings and preferences",
    articles: 6
  },
  {
    icon: FileText,
    title: "Copyright & Legal",
    description: "Copyright basics, fair use, and legal considerations",
    articles: 9
  }
];

export function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const filteredCategories = faqCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.questions.some(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="w-8 h-8 text-purple-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Help Center</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Find answers to your questions, learn how to use SuperTuber features, and get support when you need it.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search for help topics, features, or questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 dark:border-gray-700 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
              <MessageCircle className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Contact Support</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Get personalized help from our support team
            </p>
            <Button variant="outline" size="sm">
              Contact Us
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
              <Book className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Creator Academy</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Free courses to grow your channel
            </p>
            <Button variant="outline" size="sm">
              Start Learning
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Community Forum</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Connect with other creators
            </p>
            <Button variant="outline" size="sm">
              Join Discussion
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Help Topics */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Browse Help Topics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpTopics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-purple-100 dark:group-hover:bg-purple-900 transition-colors">
                    <topic.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-500 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {topic.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {topic.articles} articles
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {filteredCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader 
                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex)}
              >
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    <span>{category.title}</span>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedCategory === categoryIndex ? 'rotate-90' : ''
                  }`} />
                </CardTitle>
              </CardHeader>
              {expandedCategory === categoryIndex && (
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {category.questions.map((qa, questionIndex) => (
                      <div key={questionIndex} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                        <button
                          className="text-left w-full p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                          onClick={() => {
                            const globalIndex = categoryIndex * 1000 + questionIndex;
                            setExpandedQuestion(expandedQuestion === globalIndex ? null : globalIndex);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-gray-900 dark:text-white">{qa.question}</h4>
                            <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${
                              expandedQuestion === categoryIndex * 1000 + questionIndex ? 'rotate-90' : ''
                            }`} />
                          </div>
                        </button>
                        {expandedQuestion === categoryIndex * 1000 + questionIndex && (
                          <div className="pl-3 pb-3">
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              {qa.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg mb-6">
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Phone Support</div>
              <div className="text-xs opacity-90">Mon-Fri 9AM-6PM PST</div>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Email Support</div>
              <div className="text-xs opacity-90">24-48 hour response</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Live Chat</div>
              <div className="text-xs opacity-90">Available 24/7</div>
            </div>
          </div>
          <div className="space-x-4">
            <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Contact Support
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Report a Bug
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
