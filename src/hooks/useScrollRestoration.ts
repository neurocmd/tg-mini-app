'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

const positions = new Map<string, number>()

export function useScrollRestoration(ref: React.RefObject<HTMLElement>) {
  const pathname = usePathname()
  const prevPath = useRef(pathname)

  // restore
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const saved = positions.get(pathname)
    if (saved !== undefined) el.scrollTop = saved
    else el.scrollTop = 0
  }, [pathname, ref])

  // save
  useEffect(() => {
    const el = ref.current
    if (!el) return

    return () => {
      positions.set(prevPath.current, el.scrollTop)
      prevPath.current = pathname
    }
  }, [pathname, ref])
}
