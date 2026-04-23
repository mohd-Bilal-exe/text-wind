import { type ReactNode } from 'react';
import { useMediaQuery } from '../hooks/use-media-query';

interface StackSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function StackSection({ id, className, children }: StackSectionProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return (
      <section id={id} className={`w-full h-auto min-h-[50svh] ${className || ''}`}>
        {children}
      </section>
    );
  }

  return (
    <section id={id} className={`stack-section ${className || ''}`}>
      {children}
    </section>
  );
}
