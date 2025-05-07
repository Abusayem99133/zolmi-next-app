import React, { forwardRef } from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', containerClassName = '', id }, ref) => {
    return (
      <section 
        ref={ref}
        id={id}
        className={`py-6 sm:py-8 md:py-12 ${className}`}
      >
        <Container className={containerClassName}>
          {children}
        </Container>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;