import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  ChevronLeft,
  ChevronRight,
  Play,
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
    description:
      "Transform your ideas into powerful digital solutions with our expert development team and comprehensive training programs.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ctaText: "Start Your Project",
    badge: "🥇 Industry Leaders",
    stats: { label: "Projects Delivered", value: "50+" }
  },
  {
    id: 2,
    title: "Design. Develop. Deploy.",
    subtitle: "Your Digital Presence Starts Here.",
    description:
      "We build powerful, scalable websites and mobile applications tailored to your business needs — from idea to launch.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29ycG9yYXRlfGVufDB8fDB8fHww",
    ctaText: "Get Started",
    badge: "🚀 Expert Web Solutions",
    stats: { label: "Projects Delivered", value: "500+" }
  },
  {
    id: 3,
    title: "Modern Solutions.",
    subtitle: "Cutting-Edge Technology.",
    description:
      "From web applications to mobile apps, we deliver scalable solutions using the latest technologies and best practices.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="sm:min-h-[90vh] min-h-[80vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-4 pb-6 lg:pb-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentSlideData.image}
          alt="Hero background"
          className="w-full h-full object-cover object-center transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/80 to-indigo-900/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                <span>{currentSlideData.badge}</span>
              </div>

              {/* Heading */}
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="block text-white">{currentSlideData.title}</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    {currentSlideData.subtitle}
                  </span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-100 leading-relaxed">
                  {currentSlideData.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 text-sm sm:text-base md:text-lg px-3 sm:px-6 py-2 sm:py-3 shadow-2xl shadow-blue-500/25"
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {currentSlideData.ctaText}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/30 text-gray-200 hover:bg-white text-cyan-700 hover:text-black backdrop-blur-sm text-sm sm:text-base md:text-lg px-3 sm:px-6 py-2 sm:py-3"
                >
                  <Users className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-between sm:justify-start items-center sm:space-x-6 pt-3">
                <div className="text-center w-1/3 sm:w-auto">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{currentSlideData.stats.value}</div>
                  <div className="text-blue-200 text-xs sm:text-sm md:text-base">{currentSlideData.stats.label}</div>
                </div>
                <div className="text-center w-1/3 sm:w-auto">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">24/7</div>
                  <div className="text-blue-200 text-xs sm:text-sm md:text-base">Support</div>
                </div>
                <div className="text-center w-1/3 sm:w-auto">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">90%</div>
                  <div className="text-blue-200 text-xs sm:text-sm md:text-base">Success Rate</div>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-1">
                <p className="text-blue-200 text-xs sm:text-sm uppercase tracking-wider">Trusted Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.slice(0, 8).map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-xs sm:text-sm px-2 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Feature Cards */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4 space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 text-yellow-400 mb-2 sm:mb-3" />
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Industry Recognition</h3>
                <p className="text-blue-200 text-xs sm:text-sm">Award-winning development team</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-green-400 mb-2 sm:mb-3" />
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Growth Focused</h3>
                <p className="text-blue-200 text-xs sm:text-sm">Scalable solutions for your business</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 sm:col-span-2">
                <Code2 className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400 mb-2 sm:mb-3" />
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Modern Tech Stack</h3>
                <p className="text-blue-200 text-xs sm:text-sm">Latest frameworks and tools for performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-2 sm:space-x-3">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <div className="flex space-x-1 sm:space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-5 sm:w-6' : 'bg-white/40 hover:bg-white/60 w-2 sm:w-3'
              }`}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </section>
  );
}
