import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Clock, 
  Award, 
  Users, 
  Briefcase,
  CheckCircle,
  DollarSign,
  Calendar,
  Code2,
  Database,
  Smartphone,
  Globe,
  Shield,
  Cloud,
  GitBranch,
  Zap,
  Monitor,
  Server,
  TestTube,
  Building,
  GraduationCap,
  Star,
  Play
} from 'lucide-react';

const courseCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Monitor,
    description: 'Master modern frontend technologies and create stunning user interfaces',
    courses: 4,
    color: 'text-blue-600'
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    description: 'Build robust server-side applications and APIs',
    courses: 3,
    color: 'text-green-600'
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: Smartphone,
    description: 'Create native and cross-platform mobile applications',
    courses: 2,
    color: 'text-purple-600'
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: Cloud,
    description: 'Learn deployment, scaling, and cloud infrastructure',
    courses: 3,
    color: 'text-orange-600'
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    icon: TestTube,
    description: 'Master testing frameworks and automation',
    courses: 2,
    color: 'text-red-600'
  }
];

const courses = [
  // Frontend Courses
  {
    category: 'frontend',
    title: 'React.js Complete Masterclass',
    duration: '8 weeks',
    level: 'Beginner to Advanced',
    price: '$299',
    originalPrice: '$399',
    rating: 4.8,
    students: 1250,
    modules: 12,
    projects: 4,
    technologies: ['React', 'Redux', 'TypeScript', 'Tailwind CSS', 'Testing'],
    description: 'Comprehensive React.js course covering hooks, state management, and modern development practices',
    features: ['Live projects', 'Code reviews', 'Interview prep', '1-on-1 mentoring']
  },
  {
    category: 'frontend',
    title: 'Vue.js Professional Development',
    duration: '6 weeks',
    level: 'Intermediate',
    price: '$249',
    originalPrice: '$349',
    rating: 4.7,
    students: 850,
    modules: 10,
    projects: 3,
    technologies: ['Vue.js', 'Vuex', 'Nuxt.js', 'Vue Router'],
    description: 'Master Vue.js ecosystem and build scalable single-page applications',
    features: ['Real-world projects', 'Best practices', 'Performance optimization']
  },
  
  // Backend Courses
  {
    category: 'backend',
    title: 'Node.js & Express Bootcamp',
    duration: '10 weeks',
    level: 'Beginner to Advanced',
    price: '$349',
    originalPrice: '$449',
    rating: 4.9,
    students: 1100,
    modules: 14,
    projects: 5,
    technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JWT'],
    description: 'Complete backend development with Node.js, databases, and API design',
    features: ['RESTful APIs', 'Database design', 'Authentication', 'Deployment']
  },
  {
    category: 'backend',
    title: 'Python Django Framework',
    duration: '8 weeks',
    level: 'Intermediate',
    price: '$299',
    originalPrice: '$399',
    rating: 4.6,
    students: 720,
    modules: 11,
    projects: 3,
    technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Celery'],
    description: 'Build powerful web applications with Django framework',
    features: ['Django REST API', 'Admin panel', 'Task queues', 'Testing']
  },

  // Mobile Courses
  {
    category: 'mobile',
    title: 'React Native Complete Course',
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    price: '$399',
    originalPrice: '$499',
    rating: 4.8,
    students: 950,
    modules: 16,
    projects: 4,
    technologies: ['React Native', 'Expo', 'Redux', 'Firebase', 'Native Modules'],
    description: 'Build cross-platform mobile apps for iOS and Android',
    features: ['App Store deployment', 'Push notifications', 'Offline storage', 'Native integration']
  },

  // DevOps Courses
  {
    category: 'devops',
    title: 'Docker & Kubernetes Mastery',
    duration: '6 weeks',
    level: 'Intermediate',
    price: '$279',
    originalPrice: '$379',
    rating: 4.7,
    students: 630,
    modules: 9,
    projects: 2,
    technologies: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Helm'],
    description: 'Master containerization and orchestration for modern applications',
    features: ['Container deployment', 'Scaling strategies', 'Monitoring', 'Security']
  },

  // QA Courses
  {
    category: 'qa',
    title: 'Automated Testing with Cypress',
    duration: '4 weeks',
    level: 'Beginner',
    price: '$199',
    originalPrice: '$279',
    rating: 4.6,
    students: 420,
    modules: 6,
    projects: 2,
    technologies: ['Cypress', 'Jest', 'Testing Library', 'Selenium'],
    description: 'Learn modern testing practices and automation frameworks',
    features: ['E2E testing', 'Unit testing', 'Integration tests', 'CI integration']
  }
];

const benefits = [
  {
    icon: BookOpen,
    title: 'Industry-Relevant Curriculum',
    description: 'Updated course content aligned with current industry demands'
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience'
  },
  {
    icon: Briefcase,
    title: 'Live Projects',
    description: 'Work on real-world projects to build your portfolio'
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'Receive industry-recognized certificates upon completion'
  },
  {
    icon: Building,
    title: 'Placement Assistance',
    description: '85% placement rate with our partner companies'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Weekend and evening batches available'
  }
];

const stats = [
  { number: '15+', label: 'Course Categories' },
  { number: '2000+', label: 'Students Trained' },
  { number: '85%', label: 'Placement Rate' },
  { number: '4.8/5', label: 'Average Rating' }
];

export default function Courses() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Industrial Training Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive training programs designed for college students to master in-demand technologies. 
            Get hands-on experience, work on live projects, and receive industry certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Explore Courses
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Download Catalog
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Course Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your specialization and start your journey in the tech industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {courseCategories.map((category) => (
              <Card key={category.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center space-x-3 mb-4">
                  <category.icon className={`h-10 w-10 ${category.color}`} />
                  <div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.courses} courses</p>
                  </div>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </Card>
            ))}
          </div>

          {/* Course Catalog */}
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              {courseCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs sm:text-sm">
                  {category.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {courseCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {courses
                    .filter(course => course.category === category.id)
                    .map((course, index) => (
                      <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-4">
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline">{course.level}</Badge>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium">{course.rating}</span>
                              <span className="text-sm text-gray-500">({course.students})</span>
                            </div>
                          </div>
                          <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                          <CardDescription className="text-base">
                            {course.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {course.duration}
                            </span>
                            <span className="flex items-center text-gray-500">
                              <BookOpen className="h-4 w-4 mr-1" />
                              {course.modules} modules
                            </span>
                            <span className="flex items-center text-gray-500">
                              <Code2 className="h-4 w-4 mr-1" />
                              {course.projects} projects
                            </span>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-1">
                              {course.technologies.map((tech, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-sm mb-2">Course Features:</h4>
                            <ul className="space-y-1">
                              {course.features.slice(0, 3).map((feature, i) => (
                                <li key={i} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                              <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                            </div>
                            <Button>Enroll Now</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Training Programs?
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

      {/* Placement Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Placement Support & Career Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our dedicated placement team works tirelessly to connect our graduates with leading companies. 
                We provide comprehensive career support to ensure your success.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    85%
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Placement Rate</h3>
                    <p className="text-gray-600">85% of our students get placed within 6 months</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    50+
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Hiring Partners</h3>
                    <p className="text-gray-600">Strong network of companies actively hiring our graduates</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    $42K
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Average Package</h3>
                    <p className="text-gray-600">Competitive starting salaries for our graduates</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="mt-8">
                Learn More About Placements
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900">Resume Building</div>
                <div className="text-gray-600 text-sm">Professional resume creation</div>
              </Card>
              <Card className="p-4 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900">Interview Prep</div>
                <div className="text-gray-600 text-sm">Mock interviews & guidance</div>
              </Card>
              <Card className="p-4 text-center">
                <Briefcase className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900">Job Matching</div>
                <div className="text-gray-600 text-sm">Personalized job recommendations</div>
              </Card>
              <Card className="p-4 text-center">
                <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-xl font-bold text-gray-900">Company Connects</div>
                <div className="text-gray-600 text-sm">Direct company introductions</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully launched their careers with our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Enroll Today
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-blue-600">
              Schedule Counseling
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
