import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  GraduationCap, 
  Clock, 
  Award, 
  Users, 
  Briefcase,
  CheckCircle,
  TrendingUp,
  Building,
  DollarSign,
  Calendar,
  Code2,
  Database,
  Smartphone,
  Globe,
  Target,
  BookOpen,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const internshipPrograms = [
  {
    title: 'Full Stack Development',
    duration: '6 months',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Git', 'AWS'],
    description: 'Complete web development training from frontend to backend',
    projects: 3,
    stipend: '$500/month',
    icon: Globe
  },
  {
    title: 'Mobile App Development',
    duration: '4 months',
    technologies: ['React Native', 'Flutter', 'Firebase', 'Redux', 'API Integration'],
    description: 'Build cross-platform mobile applications',
    projects: 2,
    stipend: '$450/month',
    icon: Smartphone
  },
  {
    title: 'Backend Development',
    duration: '5 months',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'Microservices'],
    description: 'Master server-side development and APIs',
    projects: 3,
    stipend: '$550/month',
    icon: Database
  },
  {
    title: 'Frontend Development',
    duration: '4 months',
    technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Testing'],
    description: 'Create beautiful and responsive user interfaces',
    projects: 4,
    stipend: '$400/month',
    icon: Code2
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Paid Internship',
    description: 'Earn while you learn with competitive stipends'
  },
  {
    icon: Award,
    title: 'Industry Certificate',
    description: 'Receive recognized certification upon completion'
  },
  {
    icon: Briefcase,
    title: 'Job Placement',
    description: '90% placement rate with our partner companies'
  },
  {
    icon: Users,
    title: 'Mentorship',
    description: 'One-on-one guidance from industry experts'
  },
  {
    icon: BookOpen,
    title: 'Real Projects',
    description: 'Work on actual client projects and build portfolio'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Structured learning path for professional development'
  }
];

const placementPartners = [
  'TechCorp Solutions', 'InnovateIT', 'DataStream Inc', 'CloudFirst Technologies',
  'NextGen Software', 'DigitalCraft', 'CodeMasters', 'FutureTech Labs',
  'SmartSolutions', 'TechPioneer', 'DevCentric', 'CloudScale'
];

const requirements = [
  'Currently pursuing or completed degree in Computer Science/IT or related field',
  'Basic understanding of programming concepts',
  'Passion for learning new technologies',
  'Good communication skills',
  'Commitment to complete the full program duration',
  'Laptop/computer with stable internet connection'
];

const applicationProcess = [
  {
    step: '01',
    title: 'Apply Online',
    description: 'Fill out the application form with your details and preferences'
  },
  {
    step: '02',
    title: 'Technical Assessment',
    description: 'Complete a basic coding assessment to evaluate your skills'
  },
  {
    step: '03',
    title: 'Interview',
    description: 'Personal interview to discuss your goals and motivation'
  },
  {
    step: '04',
    title: 'Program Start',
    description: 'Begin your internship journey with orientation and setup'
  }
];

export default function Internship() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Launch Your Tech Career with Our 
                <span className="text-blue-600"> Internship Programs</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Gain hands-on experience, work on real projects, and get placed in top tech companies. 
                Our comprehensive internship programs are designed to transform students into industry-ready developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/internship/apply?program=fullstack">
                  <Button size="lg" className="text-lg px-8 py-4">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Apply Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">200+</div>
                <div className="text-gray-600">Students Trained</div>
              </Card>
              <Card className="p-4 text-center">
                <Briefcase className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">90%</div>
                <div className="text-gray-600">Placement Rate</div>
              </Card>
              <Card className="p-4 text-center">
                <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Partner Companies</div>
              </Card>
              <Card className="p-4 text-center">
                <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">$500</div>
                <div className="text-gray-600">Max Stipend</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Internship Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our specialized internship tracks designed to match your interests and career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {internshipPrograms.map((program, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <program.icon className="h-10 w-10 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {program.duration}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {program.stipend}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Technologies Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-600">
                      <Target className="h-4 w-4 mr-1" />
                      {program.projects} Real Projects
                    </span>
                    <span className="flex items-center text-green-600 font-semibold">
                      <UserCheck className="h-4 w-4 mr-1" />
                      Job Placement Assistance
                    </span>
                  </div>

                  <Link to={`/internship/apply?program=${
                    program.title === 'Full Stack Development' ? 'fullstack' :
                    program.title === 'Mobile App Development' ? 'mobile' :
                    program.title === 'Backend Development' ? 'backend' :
                    'frontend'
                  }`}>
                    <Button className="w-full mt-4">
                      Apply for This Program
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Internship?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support to ensure your success in the tech industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Placement Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our strong industry connections ensure excellent job placement opportunities for our interns
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    90%
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">High Placement Rate</h3>
                    <p className="text-gray-600">9 out of 10 interns get placed within 3 months of completion</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    50+
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Partner Companies</h3>
                    <p className="text-gray-600">Exclusive hiring partnerships with leading tech companies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    $45K
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Average Starting Salary</h3>
                    <p className="text-gray-600">Competitive packages offered by our placement partners</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Our Placement Partners</h3>
              <div className="grid grid-cols-2 gap-4">
                {placementPartners.map((company, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg text-center">
                    <Building className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">{company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Eligibility Requirements
              </h2>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Process */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Application Process
              </h2>
              <div className="space-y-6">
                {applicationProcess.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Apply for Internship
            </h2>
            <p className="text-xl text-gray-600">
              Take the first step towards your tech career. Fill out the form below to apply.
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="education">Education Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor">Bachelor's (Pursuing/Completed)</SelectItem>
                      <SelectItem value="master">Master's (Pursuing/Completed)</SelectItem>
                      <SelectItem value="diploma">Diploma</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="program">Preferred Program</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fullstack">Full Stack Development</SelectItem>
                      <SelectItem value="mobile">Mobile App Development</SelectItem>
                      <SelectItem value="backend">Backend Development</SelectItem>
                      <SelectItem value="frontend">Frontend Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Programming Experience</Label>
                <Textarea id="experience" placeholder="Briefly describe your programming background and any projects you've worked on" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Why do you want to join this internship?</Label>
                <Textarea id="motivation" placeholder="Tell us about your motivation and career goals" />
              </div>

              <Button size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
