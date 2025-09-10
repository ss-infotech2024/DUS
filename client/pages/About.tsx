import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award,
  Lightbulb,
  Globe,
  Code2,
  TrendingUp,
  Building,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Linkedin,
  Github,
  Mail
} from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.'
  },
  {
    icon: Heart,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code quality to client service.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and build strong partnerships with our clients.'
  },
  {
    icon: GraduationCap,
    title: 'Learning',
    description: 'Continuous learning and skill development are at the core of our culture.'
  }
];

const milestones = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'Started with a vision to bridge the gap between talent and technology.'
  },
  {
    year: '2020',
    title: 'First Major Client',
    description: 'Delivered our first enterprise-level web application successfully.'
  },
  // {
  //   year: '2021',
  //   title: 'Training Programs Launch',
  //   description: 'Launched internship and training programs for students.'
  // },
  {
    year: '2022',
    title: 'Team Expansion',
    description: 'Grew to 25+ developers and established multiple client partnerships.'
  },
  {
    year: '2023',
    title: '1000+ Students Trained',
    description: 'Reached milestone of training over 1000 students in various technologies.'
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Expanded services to include AI and machine learning solutions.'
  }
];

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO & Founder',
    image: '/placeholder.svg',
    bio: '10+ years in software development with expertise in full-stack technologies.',
    skills: ['Leadership', 'Strategy', 'Full-Stack Development'],
    social: {
      linkedin: '#',
      github: '#',
      email: 'rajesh@codeforge.com'
    }
  },
  {
    name: 'Priya Sharma',
    role: 'CTO',
    image: '/placeholder.svg',
    bio: 'Technology leader with 8+ years experience in scalable architecture design.',
    skills: ['System Architecture', 'Cloud Computing', 'DevOps'],
    social: {
      linkedin: '#',
      github: '#',
      email: 'priya@codeforge.com'
    }
  },
  {
    name: 'Amit Patel',
    role: 'Head of Training',
    image: '/placeholder.svg',
    bio: 'Passionate educator with 6+ years in mentoring and curriculum development.',
    skills: ['Education', 'Curriculum Design', 'Mentoring'],
    social: {
      linkedin: '#',
      github: '#',
      email: 'amit@codeforge.com'
    }
  },
  {
    name: 'Piyush singh',
    role: 'Lead Frontend Developer',
    image: '/placeholder.svg',
    bio: 'UI/UX expert specializing in React and modern frontend technologies.',
    skills: ['React', 'UI/UX Design', 'TypeScript'],
    social: {
      linkedin: '#',
      github: '#',
      email: 'sarah@codeforge.com'
    }
  },
  {
    name: 'David Wilson',
    role: 'Senior Backend Developer',
    image: '/placeholder.svg',
    bio: 'Backend specialist with expertise in Node.js, Python, and database design.',
    skills: ['Node.js', 'Python', 'Database Design'],
    social: {
      linkedin: '#',
      github: '#',
      email: 'david@codeforge.com'
    }
  },
  {
    name: 'Ananya Singh',
    role: 'Placement Coordinator',
    image: '/placeholder.svg',
    bio: 'Career counselor helping students transition into successful tech careers.',
    skills: ['Career Counseling', 'Industry Relations', 'HR'],
    social: {
      linkedin: '#',
      email: 'ananya@codeforge.com'
    }
  }
];

const stats = [
  { number: '50+', label: 'Projects Delivered', icon: Briefcase },
  { number: '30+', label: 'Happy Clients', icon: Users },
  { number: '2000+', label: 'Students Trained', icon: GraduationCap },
  { number: '85%', label: 'Placement Rate', icon: TrendingUp }
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About DUS
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We are a passionate team of developers, educators, and innovators dedicated to creating 
              exceptional software solutions while nurturing the next generation of tech talent.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <stat.icon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-10 w-10 text-blue-600" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To bridge the gap between innovative technology solutions and skilled talent development. 
                  We empower businesses with cutting-edge software while simultaneously nurturing students 
                  to become industry-ready developers through comprehensive training and real-world experience.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-10 w-10 text-blue-600" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the leading software development company that not only delivers exceptional 
                  digital solutions but also creates a sustainable ecosystem for continuous learning and 
                  innovation, empowering the next generation of tech leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a startup vision to an established leader in software development and education
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="text-sm font-semibold">
                            {milestone.year}
                          </Badge>
                          <CardTitle className="text-lg">{milestone.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to delivering excellence and mentoring future developers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {member.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What Makes Us Different
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're not just a software company or just a training institute - we're a unique hybrid 
                that combines both worlds to create exceptional value for our clients and students.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Code2 className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Real-World Experience</h3>
                    <p className="text-gray-600">Students work on actual client projects, gaining practical experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Modern Technology Stack</h3>
                    <p className="text-gray-600">We use cutting-edge technologies that are in high demand</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Building className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Industry Connections</h3>
                    <p className="text-gray-600">Strong network of companies for placements and partnerships</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Proven Track Record</h3>
                    <p className="text-gray-600">85% placement rate and 95% client satisfaction score</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl">
              <div className="text-center">
                <Building className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Join Our Growing Family
                </h3>
                <p className="text-gray-600 mb-6">
                  Whether you're looking for software development services or want to start your 
                  tech career, we're here to help you succeed.
                </p>
                <div className="space-y-3">
                  <Button className="w-full">
                    Work With Us
                  </Button>
                  <Button variant="outline" className="w-full">
                    Join Our Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals, whether you need software development 
            services or want to advance your career in tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-blue-600 border-white hover:bg-grey-400 hover:text-blue-600">
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
