'use client'

import { useRef } from 'react'

import { useScrollRestoration } from '@/hooks/useScrollRestoration'

export default function ScrollableMain({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) {
  const ref = useRef<HTMLElement>(null as unknown as HTMLElement)
  useScrollRestoration(ref)

  return (
    <main ref={ref} className={className}>
      {children}
    </main>
  )
}
