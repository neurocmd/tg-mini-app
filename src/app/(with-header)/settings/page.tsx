'use client'

import Link from 'next/link'

import { useTheme } from '@/contexts/ThemeContext'
import CompassIcon from '@/icons/compass.svg'
import GlobeIcon from '@/icons/globe.svg'
import HeartIcon from '@/icons/heart.svg'
import MonitorIcon from '@/icons/monitor.svg'
import SendIcon from '@/icons/send.svg'

export default function Settings() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'glass' ? 'default' : 'glass')
  }

  return (
    <>
      <div className="mx-3.5">
        <a
          href="https://t.me/admin"
          className="glass mt-5 flex items-center gap-4 rounded-3xl px-7 py-4 transition hover:bg-white/5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SendIcon className="size-10 shrink-0 text-white/50" />
          <div>
            <h2 className="text-lg font-semibold">Вступайте в наш канал</h2>
            <p className="max-w-[25ch] text-sm text-white/50">
              Будьте в курсе всех нововведений
            </p>
          </div>
        </a>

        <ul className="mt-5 grid grid-cols-1 gap-3">
          <li>
            <Link
              href="/settings/deposits"
              className="glass flex min-h-14.5 w-full cursor-pointer items-center gap-2.5 rounded-2xl px-4 py-3 transition ease-out hover:-translate-y-0.5 hover:bg-white/5"
            >
              <CompassIcon className="w-5.75 shrink-0 opacity-50" />
              <p className="text-3xl font-medium">История пополнений</p>
            </Link>
          </li>
          <li>
            <Link
              href="/settings/withdrawals"
              className="glass flex min-h-14.5 w-full cursor-pointer items-center gap-2.5 rounded-2xl px-4 py-3 transition ease-out hover:-translate-y-0.5 hover:bg-white/5"
            >
              <CompassIcon className="w-5.75 shrink-0 opacity-50" />
              <p className="text-3xl font-medium">История выводов</p>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="glass flex min-h-14.5 w-full cursor-pointer items-center gap-2.5 rounded-2xl px-4 py-3 transition ease-out hover:-translate-y-0.5 hover:bg-white/5"
            >
              <GlobeIcon className="w-5.5 shrink-0 opacity-50" />
              <p className="text-3xl font-medium">Язык</p>
              <span className="ml-auto text-3xl opacity-50">Русский</span>
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="glass flex min-h-14.5 w-full cursor-pointer items-center gap-2.5 rounded-2xl px-4 py-3 transition ease-out hover:-translate-y-0.5 hover:bg-white/5"
              onClick={toggleTheme}
            >
              <MonitorIcon className="w-6.25 shrink-0 opacity-50" />
              <p className="text-3xl font-medium">Тема</p>
              <span className="ml-auto text-3xl opacity-50">
                {theme === 'glass' ? 'Стекло' : 'Обычная'}
              </span>
            </button>
          </li>
          <li>
            <Link
              href="/"
              className="glass flex min-h-14.5 w-full cursor-pointer items-center gap-2.5 rounded-2xl px-4 py-3 transition ease-out hover:-translate-y-0.5 hover:bg-white/5"
            >
              <HeartIcon className="w-5.25 shrink-0 opacity-50" />
              <p className="text-3xl font-medium">Поддержка</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
