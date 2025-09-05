import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  Code2,
  Cloud,
  Palette,
  Search,
  ShoppingCart,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks',
    features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Development'],
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'PHP'],
    startingPrice: '$2,999',
    timeline: '4-12 weeks'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    features: ['iOS & Android', 'Cross-platform', 'App Store Optimization', 'Push Notifications'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
    startingPrice: '$4,999',
    timeline: '6-16 weeks'
  },
  {
    icon: Database,
    title: 'API Development & Integration',
    description: 'Robust APIs and seamless third-party integrations',
    features: ['REST API', 'GraphQL', 'Microservices', 'Payment Gateways'],
    technologies: ['Node.js', 'Python', 'Java', 'MongoDB', 'PostgreSQL'],
    startingPrice: '$1,999',
    timeline: '2-8 weeks'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment',
    features: ['AWS/Azure Setup', 'DevOps', 'Auto-scaling', 'Monitoring'],
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
    startingPrice: '$3,499',
    timeline: '3-10 weeks'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, user-centric design solutions',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
    startingPrice: '$1,499',
    timeline: '2-6 weeks'
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: '24/7 technical support and ongoing maintenance',
    features: ['Bug Fixes', 'Security Updates', 'Performance Optimization', 'Feature Updates'],
    technologies: ['Monitoring Tools', 'Analytics', 'Testing Frameworks'],
    startingPrice: '$499/month',
    timeline: 'Ongoing'
  }
];

const portfolioItems = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Complete online shopping platform with payment integration',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description: 'Patient management system with appointment booking',
    image: '/placeholder.svg',
    technologies: ['React Native', 'Firebase', 'Redux']
  },
  {
    title: 'Analytics Dashboard',
    category: 'Web Development',
    description: 'Real-time data visualization and reporting tool',
    image: '/placeholder.svg',
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL']
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements and create a detailed project roadmap.'
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Our designers create wireframes and interactive prototypes for approval.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our developers build your solution using modern technologies and best practices.'
  },
  {
    step: '04',
    title: 'Testing & QA',
    description: 'Rigorous testing ensures your application is bug-free and performs optimally.'
  },
  {
    step: '05',
    title: 'Deployment & Launch',
    description: 'We deploy your application and provide ongoing support for a smooth launch.'
  }
];

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive software development services to transform your ideas into powerful digital solutions. 
            From web applications to mobile apps, we've got you covered.
          </p>
          <Button size="lg">
            Get Free Consultation
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.timeline}
                    </span>
                    <span className="flex items-center text-green-600 font-semibold">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {service.startingPrice}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full mt-4">
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our successful projects and see what we can create for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <Code2 className="h-12 w-12 text-gray-400" />
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-2">{item.category}</Badge>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CodeForge Solutions?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled developers with 5+ years experience</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-gray-600">95% projects delivered on or before deadline</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing and code review process</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Ongoing maintenance and technical support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Get Free Quote
              </Button>
            </Link>
           <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
               Schedule Consultation
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
