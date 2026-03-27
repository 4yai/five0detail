import React, { useState, useEffect, useCallback } from 'react';
import { Calendar } from 'lucide-react';

const BOOKING_LINK =
  'https://book.squareup.com/appointments/r9fqa859ot208j/location/LVJNFC13SX6J0/services';

const FloatingBookButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => window.removeEventListener('scroll', toggleVisibility as EventListener);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.open(BOOKING_LINK, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 md:hidden transition-transform ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isVisible}
    >
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 font-medium transition-colors duration-200 active:scale-95"
        aria-label="Book an appointment"
      >
        <Calendar className="h-5 w-5" />
        <span>Book</span>
      </button>
    </div>
  );
};

export default FloatingBookButton;