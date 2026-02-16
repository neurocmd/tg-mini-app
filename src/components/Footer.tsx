'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

import AwardIcon from '@/icons/award.svg'
import BagIcon from '@/icons/bag.svg'
import PlayIcon from '@/icons/play.svg'

const navItems = [
  { href: '/rating', label: 'Рейтинг', Icon: AwardIcon },
  { href: '/play', label: 'Играть', Icon: PlayIcon },
  { href: '/shop', label: 'Магазин', Icon: BagIcon },
] as const

const NAV_PADDING_PX = 6

function getTabIndexFromPathname(pathname: string): number {
  return navItems.findIndex(
    (item) => pathname === item.href || pathname.startsWith(item.href + '/'),
  )
}

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()
  const navRef = useRef<HTMLElement>(null)

  // Активная вкладка: обновляется сразу при клике и при сбросе индикатора (без ожидания pathname).
  const [activeTabIndex, setActiveTabIndex] = useState(() =>
    getTabIndexFromPathname(pathname),
  )

  // синхронизует activeTabIndex с pathname
  useEffect(() => {
    setActiveTabIndex(getTabIndexFromPathname(pathname))
  }, [pathname])

  // Позиция индикатора: координата центра по горизонтали (px от левого края nav). Ограничена пределами nav.
  const [indicatorCenterX, setIndicatorCenterX] = useState(80)

  const dragStartX = useRef(0)
  const dragStartCenterX = useRef(0)
  const isDraggingRef = useRef(false)
  const [isDragging, setIsDragging] = useState(false)

  const getNavBounds = useCallback(() => {
    const nav = navRef.current
    if (!nav) return null
    const rect = nav.getBoundingClientRect()
    const width = rect.width
    const indicatorWidth = (width - NAV_PADDING_PX * 2) / navItems.length
    const half = indicatorWidth / 2
    const minCenterX = NAV_PADDING_PX + half
    const maxCenterX = width - NAV_PADDING_PX - half
    return { left: rect.left, width, indicatorWidth, minCenterX, maxCenterX }
  }, [])

  const clampToNav = useCallback(
    (centerX: number) => {
      const bounds = getNavBounds()
      if (!bounds) return centerX
      return Math.max(bounds.minCenterX, Math.min(bounds.maxCenterX, centerX))
    },
    [getNavBounds],
  )

  // Центр и индекс ближайшей вкладки к данной координате (для прилипания при отпускании)
  const getNearestTab = useCallback(
    (centerX: number): { centerX: number; index: number } => {
      const bounds = getNavBounds()
      if (!bounds) return { centerX, index: 0 }
      const { minCenterX, indicatorWidth } = bounds
      let nearestCenter = minCenterX
      let nearestIndex = 0
      let minDist = Math.abs(centerX - minCenterX)
      for (let i = 1; i < navItems.length; i++) {
        const tabCenter = minCenterX + i * indicatorWidth
        const dist = Math.abs(centerX - tabCenter)
        if (dist < minDist) {
          minDist = dist
          nearestCenter = tabCenter
          nearestIndex = i
        }
      }
      return { centerX: nearestCenter, index: nearestIndex }
    },
    [getNavBounds],
  )

  // После отпускания перетаскивания один «клик» не должен вести по ссылке
  const justFinishedDraggingRef = useRef(false)

  const onActiveTabPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.button !== 0) return
      e.preventDefault()
      ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
      dragStartX.current = e.clientX
      dragStartCenterX.current = indicatorCenterX
      isDraggingRef.current = true
      setIsDragging(true)
    },
    [indicatorCenterX],
  )

  const onActiveTabPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return
      const bounds = getNavBounds()
      if (!bounds) return
      const cursorCenterX = e.clientX - bounds.left
      setIndicatorCenterX(clampToNav(cursorCenterX))
    },
    [clampToNav, getNavBounds],
  )

  const onActiveTabPointerUp = useCallback(
    (e: React.PointerEvent) => {
      const el = e.currentTarget as HTMLElement
      if (el.hasPointerCapture(e.pointerId))
        el.releasePointerCapture(e.pointerId)
      if (isDraggingRef.current) {
        justFinishedDraggingRef.current = true
        const bounds = getNavBounds()
        const currentCenterX = bounds
          ? clampToNav(e.clientX - bounds.left)
          : indicatorCenterX
        const { centerX, index } = getNearestTab(currentCenterX)
        setIndicatorCenterX(centerX)
        setActiveTabIndex(index)
        router.push(navItems[index].href)
      }
      isDraggingRef.current = false
      setIsDragging(false)
    },
    [clampToNav, getNavBounds, getNearestTab, indicatorCenterX, router],
  )

  const onLinkClick = useCallback((e: React.MouseEvent, index: number) => {
    if (justFinishedDraggingRef.current) {
      e.preventDefault()
      e.stopPropagation()
      justFinishedDraggingRef.current = false
      return
    }
    setActiveTabIndex(index)
  }, [])

  return (
    <footer
      className="pointer-events-none absolute inset-x-0 bottom-0 isolate z-1000 p-3 pb-[calc(theme(spacing.3)+var(--safe-area-inset-bottom))]"
      style={
        isDragging
          ? ({
              '--indicator-x': `${indicatorCenterX}px`,
            } as React.CSSProperties)
          : undefined
      }
    >
      <div className="glass pointer-events-auto rounded-3xl">
        <nav ref={navRef} className="relative grid grid-cols-3 p-1.5">
          <span
            className="pointer-events-none absolute top-1/2 left-(--indicator-x,calc(anchor(left)+anchor-size(width)/2)) hidden h-[calc(100%-12px)] w-[calc((100%-12px)/3)] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/30 bg-white/5 [position-anchor:--active-tab] [&:has(~[aria-current=page])]:block"
            role="presentation"
            aria-hidden
          />
          {navItems.map(({ href, label, Icon }, index) => {
            const isActive = activeTabIndex === index
            return (
              <Link
                key={href}
                href={href}
                className={`relative isolate flex h-16.25 cursor-pointer flex-col items-center justify-center rounded-3xl px-4 py-1 font-bold transition hover:text-white ${
                  isActive
                    ? 'touch-none text-white select-none [anchor-name:--active-tab]'
                    : 'text-white/50'
                }`}
                aria-current={isActive ? 'page' : undefined}
                draggable={false}
                onClick={(e) => onLinkClick(e, index)}
                {...(isActive && {
                  onPointerDown: onActiveTabPointerDown,
                  onPointerMove: onActiveTabPointerMove,
                  onPointerUp: onActiveTabPointerUp,
                  onPointerLeave: onActiveTabPointerUp,
                  onPointerCancel: onActiveTabPointerUp,
                })}
              >
                <Icon className="relative size-6" />
                <span className="relative text-sm">{label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-1 h-33 bg-linear-to-t from-black from-[14.9%] to-transparent" />
    </footer>
  )
}
