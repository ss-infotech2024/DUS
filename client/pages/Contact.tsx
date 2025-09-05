import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Building,
  Globe,
  Linkedin,
  Github,
  Twitter,
  Calendar,
  HeadphonesIcon,
  Users
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Address',
    details: ['info@codeforgesolutions.com', 'support@codeforgesolutions.com'],
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
    description: 'Call us during business hours'
  },
  {
    icon: MapPin,
    title: 'Office Address',
    details: ['123 Tech Street, Suite 400', 'San Francisco, CA 94105'],
    description: 'Visit our office'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
    description: 'We are available'
  }
];

const socialLinks = [
  { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'text-blue-600' },
  { icon: Github, name: 'GitHub', url: '#', color: 'text-gray-800' },
  { icon: Twitter, name: 'Twitter', url: '#', color: 'text-blue-400' },
  { icon: Globe, name: 'Website', url: '#', color: 'text-green-600' }
];

const departments = [
  {
    title: 'Sales & Business',
    email: 'sales@codeforgesolutions.com',
    phone: '+1 (555) 123-4567',
    description: 'For project inquiries and business partnerships'
  },
  {
    title: 'Technical Support',
    email: 'support@codeforgesolutions.com',
    phone: '+1 (555) 765-4321',
    description: 'For technical assistance and maintenance'
  },
  {
    title: 'Training & Admissions',
    email: 'admissions@codeforgesolutions.com',
    phone: '+1 (555) 987-6543',
    description: 'For course inquiries and admissions'
  },
  {
    title: 'HR & Careers',
    email: 'careers@codeforgesolutions.com',
    phone: '+1 (555) 456-7890',
    description: 'For job opportunities and recruitment'
  }
];

const faqs = [
  {
    question: 'How do I get started with a project?',
    answer: 'Simply fill out our contact form or give us a call. We\'ll schedule a consultation to discuss your requirements and provide a detailed proposal.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity. Simple websites take 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during consultation.'
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Yes, we provide ongoing maintenance and support packages. Our team is available 24/7 for critical issues and regular updates.'
  },
  {
    question: 'How can I apply for internship programs?',
    answer: 'Visit our Internship page and fill out the application form. You can also contact our admissions team directly for guidance.'
  }
];

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to start your project or have questions about our services? We'd love to hear from you. 
            Reach out to us and let's discuss how we can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              <MessageSquare className="mr-2 h-5 w-5" />
              Live Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <info.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <div className="space-y-1 mb-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-700 font-medium">{detail}</p>
                  ))}
                </div>
                <p className="text-gray-500 text-sm">{info.description}</p>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`${social.color} hover:opacity-75 transition-opacity`}
                  aria-label={social.name}
                >
                  <social.icon className="h-8 w-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <Card className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" placeholder="Enter company name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Type of Inquiry</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="project">Project Development</SelectItem>
                          <SelectItem value="training">Training Programs</SelectItem>
                          <SelectItem value="internship">Internship Application</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Project Budget (Optional)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                        <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                        <SelectItem value="over-50k">Over $50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your project requirements, questions, or how we can help you..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Map & Location */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Office
              </h2>
              <p className="text-gray-600 mb-8">
                Located in the heart of San Francisco's tech district, our office is easily accessible 
                by public transport and offers visitor parking.
              </p>

              {/* Embedded Map Placeholder */}
              <Card className="mb-8 overflow-hidden">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Interactive Google Map</p>
                    <p className="text-sm text-gray-400">123 Tech Street, San Francisco, CA 94105</p>
                  </div>
                </div>
              </Card>

              {/* Office Details */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Office Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Building className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">123 Tech Street, Suite 400<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Visitor Information</p>
                      <p className="text-gray-600">Please call ahead to schedule a visit. Visitor parking available on-site.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect directly with the right team for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{dept.title}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <a href={`mailto:${dept.email}`} className="text-blue-600 hover:underline">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <a href={`tel:${dept.phone}`} className="text-blue-600 hover:underline">
                      {dept.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait! Let's discuss your project today and see how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
             <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <HeadphonesIcon className="mr-2 h-5 w-5" />
              Request Callback
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
