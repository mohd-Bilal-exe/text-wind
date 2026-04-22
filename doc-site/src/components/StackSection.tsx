import {type ReactNode } from 'react'

interface StackSectionProps {
  id: string
  className?: string
  children: ReactNode
}

export default function StackSection({ id, className, children }: StackSectionProps) {
  return (
    <section 
      id={id} 
      className={`stack-section ${className || ""}`}
    >
      {children}
    </section>
  )
}
