import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HeroSlider } from '@/components/HeroSlider';
import { EnhancedCard } from '@/components/EnhancedCard';
import { FloatingActions } from '@/components/FloatingActions';
import {
  ArrowRight,
  Code2,
  Smartphone,
  Database,
  Globe,
  Shield,
  Zap,
  Users,
  Award,
  Star,
  CheckCircle,
  Target,
  Rocket,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive websites built with the latest technologies',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Database,
    title: 'API Integration',
    description: 'Seamless third-party integrations and custom API development',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: '24/7 technical support and ongoing maintenance services',
    gradient: 'from-orange-500 to-red-500'
  }
];

const testimonials = [
  {
    name: 'Piyush singh',
    role: 'CTO at TechStart',
    content: 'DUS delivered an exceptional web application that exceeded our expectations. Their team is professional, skilled, and truly understands modern development.',
    rating: 5
  },
  {
    name: 'Lucky Khope',
    role: 'Founder at InnovateLab',
    content: 'Working with CodeForge was a game-changer for our startup. They built our entire platform and provided excellent ongoing support.',
    rating: 5
  },
  {
    name: 'Ayush Chawhan ',
    role: 'Product Manager at DataFlow',
    content: 'The mobile app they developed for us has been a huge success. Clean code, great performance, and delivered on time.',
    rating: 5
  }
];

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
  { number: '200+', label: 'Students Trained' },
  { number: '5', label: 'Years Experience' }
];

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Enhanced Hero Section with Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-44 h-44 sm:w-72 sm:h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-44 h-44 sm:w-72 sm:h-72 bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white">
              ⚡ Our Impact
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Numbers That Speak</h2>
            <p className="text-base sm:text-xl text-gray-600">Building success stories one project at a time</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <EnhancedCard
                key={index}
                className="text-center p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-white/50"
                hover={true}
                glow={true}
              >
                <div className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-3">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </EnhancedCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-purple-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-10 md:gap-16 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center mb-4 sm:mb-6">
                <Sparkles className="h-8 w-8 text-blue-500 mr-2 sm:mr-3" />
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white">
                  About CodeForge
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Leading Software Development
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Excellence</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-8 leading-relaxed">
                DUS is a premier software development company that bridges the gap between
                innovative technology solutions and talent development. We create robust, scalable applications
                for businesses while empowering the next generation of developers.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-8">
                <div className="flex items-center group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mr-3 sm:mr-4">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg">Client-focused development approach</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center mr-3 sm:mr-4">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg">Comprehensive training programs</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mr-3 sm:mr-4">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg">Industry-leading expertise</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center mr-3 sm:mr-4">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg">24/7 support and maintenance</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/about">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50">
                  <Target className="mr-2 h-4 w-4" />
                  Our Mission
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <EnhancedCard
                  className="p-5 md:p-8 bg-gradient-to-br from-blue-500/5 to-blue-600/10 border border-blue-200/50"
                  hover={true}
                  icon={<Users className="h-8 w-8 md:h-10 md:w-10 text-blue-600" />}
                  title="Expert Team"
                  description="Skilled developers with years of industry experience"
                />
                <EnhancedCard
                  className="p-5 md:p-8 bg-gradient-to-br from-purple-500/5 to-purple-600/10 border border-purple-200/50"
                  hover={true}
                  icon={<Zap className="h-8 w-8 md:h-10 md:w-10 text-purple-600" />}
                  title="Fast Delivery"
                  description="Agile development for rapid project completion"
                />
              </div>
              <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                <EnhancedCard
                  className="p-5 md:p-8 bg-gradient-to-br from-green-500/5 to-green-600/10 border border-green-200/50"
                  hover={true}
                  icon={<Award className="h-8 w-8 md:h-10 md:w-10 text-green-600" />}
                  title="Quality First"
                  description="Rigorous testing and quality assurance"
                />
                <EnhancedCard
                  className="p-5 md:p-8 bg-gradient-to-br from-orange-500/5 to-orange-600/10 border border-orange-200/50"
                  hover={true}
                  icon={<Code2 className="h-8 w-8 md:h-10 md:w-10 text-orange-600" />}
                  title="Modern Tech"
                  description="Latest technologies and best practices"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-56 h-56 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-56 h-56 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-300/20 to-teal-300/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Rocket className="h-8 w-8 text-blue-500 mr-2 sm:mr-3" />
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white">
                Our Services
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-6">
              Comprehensive
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we deliver exceptional software solutions
              tailored to your business needs with cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {services.map((service, index) => (
              <EnhancedCard
                key={index}
                className={`text-center p-6 md:p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group`}
                hover={false}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r ${service.gradient} p-3 md:p-4 mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 md:h-12 md:w-12 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" size="sm" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    Learn More
                  </Button>
                </div>
              </EnhancedCard>
            ))}
          </div>
          <div className="text-center mt-10 md:mt-16">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-4 sm:p-6">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="flex mb-2 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-xl text-blue-100 mb-4 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expert development team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-base sm:text-lg px-5 sm:px-8 py-3 sm:py-4">
                Get Started Today
              </Button>
            </Link>
            <Button size="lg" variant="secondary" className="text-base sm:text-lg px-5 sm:px-8 py-3 sm:py-4">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
