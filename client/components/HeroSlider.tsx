import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Briefcase,
  GraduationCap,
  BookOpen,
  Code2,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Innovating Code.",
    subtitle: "Empowering Talent.",
    description: "Transform your ideas into powerful digital solutions with our expert development team and comprehensive training programs.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ctaText: "Start Your Project",
    badge: "🥇 Industry Leaders",
    stats: { label: "Projects Delivered", value: "50+" }
  },
  {
    id: 2,
    title: "Design. Develop. Deploy.",
    subtitle: "Your Digital Presence Starts Here.",
    description: "We build powerful, scalable websites and mobile applications tailored to your business needs — from idea to launch.",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ctaText: "Get Started",
    badge: "🚀 Expert Web Solutions",
    stats: { label: "Projects Delivered", value: "500+" }
  },
  {
    id: 3,
    title: "Modern Solutions.",
    subtitle: "Cutting-Edge Technology.",
    description: "From web applications to mobile apps, we deliver scalable solutions using the latest technologies and best practices.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ctaText: "Explore Services",
    badge: "⚡ Latest Tech Stack",
    stats: { label: "Technologies", value: "15+" }
  }
];

const technologies = [
  'React', 'Node.js', 'Python', 'TypeScript', 'MongoDB', 'PostgreSQL',
  'AWS', 'Docker', 'Kubernetes', 'React Native', 'Flutter', 'GraphQL'
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={currentSlideData.image}
          alt="Hero background"
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/80 to-indigo-900/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                <span className="mr-2">{currentSlideData.badge}</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-white">{currentSlideData.title}</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    {currentSlideData.subtitle}
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl leading-relaxed">
                  {currentSlideData.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 text-lg px-8 py-4 h-auto shadow-2xl shadow-blue-500/25">
                  <Play className="mr-2 h-5 w-5" />
                  {currentSlideData.ctaText}
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-gray-500 hover:bg-white backdrop-blur-sm text-lg px-8 py-4 h-auto">
                  <Users className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{currentSlideData.stats.value}</div>
                  <div className="text-blue-200 text-sm">{currentSlideData.stats.label}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-blue-200 text-sm">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">90%</div>
                  <div className="text-blue-200 text-sm">Success Rate</div>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <p className="text-blue-200 text-sm uppercase tracking-wider">Trusted Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.slice(0, 8).map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-sm px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="hidden lg:block space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <Award className="h-10 w-10 text-yellow-400 mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Industry Recognition</h3>
                  <p className="text-blue-200 text-sm">Award-winning development team</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <TrendingUp className="h-10 w-10 text-green-400 mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Growth Focused</h3>
                  <p className="text-blue-200 text-sm">Scalable solutions for your business</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 col-span-2">
                  <Code2 className="h-10 w-10 text-blue-400 mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">Modern Technology Stack</h3>
                  <p className="text-blue-200 text-sm">Latest frameworks and tools for optimal performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white/40 hover:bg-white/60'
                  }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Side Navigation */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden xl:block">
        <div className="space-y-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`block w-1 h-12 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-white'
                  : 'bg-white/30 hover:bg-white/60'
                }`}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-8 z-20 hidden lg:block">
        <div className="flex items-center space-x-2 text-white/60">
          <div className="w-px h-12 bg-white/30"></div>
          <span className="text-sm rotate-90 origin-left">Scroll</span>
        </div>
      </div>
    </section>
  );
}
