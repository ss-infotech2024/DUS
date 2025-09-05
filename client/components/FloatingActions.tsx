import { useState } from 'react';
import { Button } from './ui/button';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Calendar,
  ChevronUp,
  ArrowUp
} from 'lucide-react';

export function FloatingActions() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  useState(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/15551234567', '_blank');
  };

  const openCall = () => {
    window.open('tel:+15551234567', '_blank');
  };

  const openEmail = () => {
    window.open('mailto:info@codeforgesolutions.com', '_blank');
  };

  const scheduleCall = () => {
    // In a real app, this would open a calendar booking system
    alert('Calendar booking system would open here');
  };

  return (
    <>
      {/* Floating Action Menu */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {/* Expanded Actions */}
        <div className={`flex flex-col space-y-3 transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          <Button
            size="sm"
            onClick={scheduleCall}
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Calendar className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
            Schedule Call
          </Button>
          
          <Button
            size="sm"
            onClick={openEmail}
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
            Email Us
          </Button>
          
          <Button
            size="sm"
            onClick={openCall}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Phone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
            Call Now
          </Button>
        </div>

        {/* Main FAB */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 p-0 ${
            isExpanded ? 'rotate-45' : 'hover:scale-110'
          }`}
        >
          {isExpanded ? (
            <ChevronUp className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>

        {/* WhatsApp FAB */}
        <Button
          onClick={openWhatsApp}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-0"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 left-6 z-50">
          <Button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-0"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      )}
    </>
  );
}
