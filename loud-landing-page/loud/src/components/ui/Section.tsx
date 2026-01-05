import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id = "" }: SectionProps) => (
  <section id={id} className={`py-16 md:py-32 relative overflow-hidden px-4 sm:px-6 ${className}`}>
    {children}
  </section>
);
