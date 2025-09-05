import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  CheckCircle,
  Clock,
  Award,
  DollarSign,
  Calendar,
  BookOpen,
  Code2,
  Database,
  Smartphone,
  Globe,
  Users,
  Target,
  ArrowRight,
  IndianRupee
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const internshipModules = {
  'fullstack': {
    title: 'Full Stack Development',
    icon: Globe,
    modules: [
      { id: 'html-css', name: 'HTML & CSS Fundamentals', duration: '2 weeks', required: true },
      { id: 'javascript', name: 'JavaScript ES6+', duration: '3 weeks', required: true },
      { id: 'react', name: 'React.js Development', duration: '4 weeks', required: true },
      { id: 'nodejs', name: 'Node.js & Express', duration: '3 weeks', required: true },
      { id: 'database', name: 'MongoDB & Database Design', duration: '2 weeks', required: true },
      { id: 'api', name: 'REST API Development', duration: '2 weeks', required: false },
      { id: 'deployment', name: 'Deployment & DevOps', duration: '2 weeks', required: false },
      { id: 'testing', name: 'Testing & Quality Assurance', duration: '2 weeks', required: false },
      { id: 'project', name: 'Capstone Project', duration: '4 weeks', required: true }
    ]
  },
  'mobile': {
    title: 'Mobile App Development',
    icon: Smartphone,
    modules: [
      { id: 'mobile-basics', name: 'Mobile Development Fundamentals', duration: '2 weeks', required: true },
      { id: 'react-native', name: 'React Native', duration: '4 weeks', required: true },
      { id: 'flutter', name: 'Flutter Development', duration: '3 weeks', required: false },
      { id: 'firebase', name: 'Firebase Integration', duration: '2 weeks', required: true },
      { id: 'ui-ux', name: 'Mobile UI/UX Design', duration: '2 weeks', required: false },
      { id: 'app-store', name: 'App Store Deployment', duration: '1 week', required: true },
      { id: 'mobile-project', name: 'Mobile App Project', duration: '3 weeks', required: true }
    ]
  },
  'backend': {
    title: 'Backend Development',
    icon: Database,
    modules: [
      { id: 'server-basics', name: 'Server-side Programming', duration: '2 weeks', required: true },
      { id: 'nodejs-advanced', name: 'Advanced Node.js', duration: '3 weeks', required: true },
      { id: 'python', name: 'Python & Django', duration: '3 weeks', required: false },
      { id: 'databases', name: 'SQL & NoSQL Databases', duration: '3 weeks', required: true },
      { id: 'microservices', name: 'Microservices Architecture', duration: '2 weeks', required: false },
      { id: 'docker', name: 'Docker & Containerization', duration: '2 weeks', required: false },
      { id: 'backend-project', name: 'Backend System Project', duration: '3 weeks', required: true }
    ]
  },
  'frontend': {
    title: 'Frontend Development',
    icon: Code2,
    modules: [
      { id: 'frontend-basics', name: 'HTML, CSS & JavaScript', duration: '3 weeks', required: true },
      { id: 'react-advanced', name: 'Advanced React.js', duration: '4 weeks', required: true },
      { id: 'vue', name: 'Vue.js Framework', duration: '3 weeks', required: false },
      { id: 'typescript', name: 'TypeScript', duration: '2 weeks', required: false },
      { id: 'ui-frameworks', name: 'UI Frameworks (Tailwind, Bootstrap)', duration: '2 weeks', required: true },
      { id: 'performance', name: 'Performance Optimization', duration: '1 week', required: false },
      { id: 'frontend-project', name: 'Frontend Application Project', duration: '3 weeks', required: true }
    ]
  }
};

const pricingPlans = [
  {
    id: '1month',
    duration: '1 Month',
    price: 300,
    features: [
      'Basic module access',
      'Certificate of completion',
      'Email support',
      'Basic project guidance'
    ],
    popular: false,
    description: 'Perfect for getting started with fundamentals'
  },
  {
    id: '3months',
    duration: '3 Months',
    price: 699,
    features: [
      'Full module access',
      'Industry certificate',
      'Priority support',
      'Mentorship sessions',
      'Real project work',
      'Portfolio development'
    ],
    popular: true,
    description: 'Most popular choice for comprehensive learning'
  },
  {
    id: '6months',
    duration: '6 Months',
    price: 1500,
    features: [
      'Complete program access',
      'Professional certificate',
      '24/7 support',
      'One-on-one mentoring',
      'Multiple real projects',
      'Job placement assistance',
      'Interview preparation',
      'Industry connections'
    ],
    popular: false,
    description: 'Complete career transformation program'
  }
];

export default function InternshipApplication() {
  const [searchParams] = useSearchParams();
  const programType = searchParams.get('program') || 'fullstack';
  const [selectedDuration, setSelectedDuration] = useState('3months');
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
    college: '',
    experience: '',
    motivation: '',
    availability: ''
  });

  const currentProgram = internshipModules[programType as keyof typeof internshipModules];
  const selectedPlan = pricingPlans.find(plan => plan.id === selectedDuration);

  // Initialize required modules
  useState(() => {
    if (currentProgram) {
      const requiredModules = currentProgram.modules
        .filter(module => module.required)
        .map(module => module.id);
      setSelectedModules(requiredModules);
    }
  });

  const handleModuleChange = (moduleId: string, checked: boolean) => {
    if (checked) {
      setSelectedModules([...selectedModules, moduleId]);
    } else {
      // Don't allow unchecking required modules
      const module = currentProgram.modules.find(m => m.id === moduleId);
      if (!module?.required) {
        setSelectedModules(selectedModules.filter(id => id !== moduleId));
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', {
      program: programType,
      duration: selectedDuration,
      modules: selectedModules,
      formData
    });
    alert('Application submitted successfully! We will contact you within 24 hours.');
  };

  if (!currentProgram) {
    return <div>Program not found</div>;
  }

  const ProgramIcon = currentProgram.icon;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <ProgramIcon className="h-12 w-12 text-blue-600" />
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Apply for {currentProgram.title}
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customize your learning path and choose the duration that works best for you
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Select the duration that fits your learning goals and schedule</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative p-6 cursor-pointer transition-all ${
                  selectedDuration === plan.id 
                    ? 'ring-2 ring-blue-600 shadow-lg' 
                    : 'hover:shadow-lg'
                } ${plan.popular ? 'border-blue-600' : ''}`}
                onClick={() => setSelectedDuration(plan.id)}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{plan.duration}</CardTitle>
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <IndianRupee className="h-6 w-6 text-gray-600" />
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedDuration} onValueChange={setSelectedDuration}>
                    <div className="flex items-center space-x-2 mb-4">
                      <RadioGroupItem value={plan.id} id={plan.id} />
                      <Label htmlFor={plan.id} className="font-medium">Select this plan</Label>
                    </div>
                  </RadioGroup>
                  
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Module Selection */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Your Modules</h2>
            <p className="text-xl text-gray-600">
              Customize your learning path by selecting additional modules (required modules are pre-selected)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProgram.modules.map((module) => (
              <Card 
                key={module.id} 
                className={`p-4 cursor-pointer transition-all ${
                  selectedModules.includes(module.id) 
                    ? 'ring-2 ring-blue-600 bg-blue-50' 
                    : 'hover:shadow-md'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id={module.id}
                    checked={selectedModules.includes(module.id)}
                    onCheckedChange={(checked) => handleModuleChange(module.id, checked as boolean)}
                    disabled={module.required}
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <Label htmlFor={module.id} className="font-medium text-base">
                        {module.name}
                      </Label>
                      {module.required && (
                        <Badge variant="secondary" className="text-xs">Required</Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Card className="inline-block p-4 bg-blue-50 border-blue-200">
              <div className="flex items-center space-x-2 text-blue-800">
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">
                  Selected: {selectedModules.length} modules
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Your Application</h2>
            <p className="text-xl text-gray-600">
              Fill out your details to apply for the {currentProgram.title} internship
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Enter your first name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Enter your last name" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number" 
                    />
                  </div>
                </div>
              </div>

              {/* Educational Background */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-blue-600" />
                  Educational Background
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="education">Education Level *</Label>
                    <Select value={formData.education} onValueChange={(value) => handleInputChange('education', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelor-pursuing">Bachelor's (Pursuing)</SelectItem>
                        <SelectItem value="bachelor-completed">Bachelor's (Completed)</SelectItem>
                        <SelectItem value="master-pursuing">Master's (Pursuing)</SelectItem>
                        <SelectItem value="master-completed">Master's (Completed)</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="12th">12th Grade</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="college">College/Institution *</Label>
                    <Input 
                      id="college" 
                      required
                      value={formData.college}
                      onChange={(e) => handleInputChange('college', e.target.value)}
                      placeholder="Enter your college name" 
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="experience">Programming Experience</Label>
                  <Textarea 
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    placeholder="Describe your programming background, any projects you've worked on, and technologies you're familiar with"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to join this internship? *</Label>
                  <Textarea 
                    id="motivation"
                    required
                    value={formData.motivation}
                    onChange={(e) => handleInputChange('motivation', e.target.value)}
                    placeholder="Tell us about your motivation, career goals, and how this internship aligns with your aspirations"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability *</Label>
                  <Select value={formData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time (6-8 hours/day)</SelectItem>
                      <SelectItem value="part-time">Part-time (3-4 hours/day)</SelectItem>
                      <SelectItem value="weekends">Weekends only</SelectItem>
                      <SelectItem value="flexible">Flexible schedule</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Application Summary</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Program:</strong> {currentProgram.title}</p>
                    <p><strong>Duration:</strong> {selectedPlan?.duration}</p>
                    <p><strong>Price:</strong> ₹{selectedPlan?.price}</p>
                  </div>
                  <div>
                    <p><strong>Modules Selected:</strong> {selectedModules.length}</p>
                    <p><strong>Certificate:</strong> {selectedPlan?.features.find(f => f.includes('certificate'))}</p>
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-4">
                <Target className="mr-2 h-5 w-5" />
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
