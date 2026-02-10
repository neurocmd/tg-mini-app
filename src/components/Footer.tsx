import Link from 'next/link'

import AwardIcon from '@/icons/award.svg'
import BagIcon from '@/icons/bag.svg'
import PlayIcon from '@/icons/play.svg'

export default function Footer() {
  return (
    <footer className="absolute inset-x-0 bottom-0 isolate z-1000 p-3">
      <div className="glass flex rounded-3xl p-1.5">
        <Link
          href="/rating"
          className="relative isolate flex h-16.25 grow cursor-pointer flex-col items-center justify-center rounded-3xl px-4 py-1 font-bold text-white transition hover:text-white"
        >
          <AwardIcon className="size-6" />
          <span className="text-sm">Рейтинг</span>
          <span className="absolute inset-0 rounded-3xl border border-white/30 bg-white/5" />
        </Link>
        <Link
          href="/play"
          className="flex h-16.25 grow cursor-pointer flex-col items-center justify-center rounded-3xl px-4 py-1 font-bold text-white/50 transition hover:text-white"
        >
          <PlayIcon className="size-6" />
          <span className="text-sm">Играть</span>
        </Link>
        <Link
          href="/shop"
          className="flex h-16.25 grow cursor-pointer flex-col items-center justify-center rounded-3xl px-4 py-1 font-bold text-white/50 transition hover:text-white"
        >
          <BagIcon className="size-6" />
          <span className="text-sm">Магазин</span>
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-1 h-33 bg-linear-to-t from-black from-[14.9%] to-transparent" />
    </footer>
  )
}
