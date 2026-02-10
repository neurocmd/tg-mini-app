'use client'

import Image from 'next/image'

import Button from '@/components/Button'
import PointIcon from '@/icons/point.svg'
import StarIcon from '@/icons/star.svg'
import TonIcon from '@/icons/ton.svg'
import ava2Img from '@/images/ava-2.jpg'
import ava3Img from '@/images/ava-3.jpg'
import ava4Img from '@/images/ava-4.jpg'

export default function Play() {
  return (
    <>
      <ul className="mt-10.5 grid grid-cols-3 justify-items-center">
        <li className="relative mt-11.5 size-19.25">
          <div className="empty:bg-gray absolute size-full rounded-full">
            <Image
              src={ava3Img}
              width={300}
              height={300}
              alt="Ava"
              priority
              className="size-full rounded-full object-cover"
            />
          </div>
          <div className="absolute bottom-full left-1/2 mb-1 flex -translate-x-1/2 gap-1.25">
            <StarIcon className="text-yellow-neon relative top-1.5 w-5.5" />
            <StarIcon className="text-yellow-neon w-5.5" />
            <StarIcon className="text-gray-dark relative top-1.5 w-5.5" />
          </div>
          <div className="absolute top-16.25 left-1/2 flex -translate-x-1/2 flex-col items-center text-center">
            <p className="glass text-md line-clamp-2 min-h-7 max-w-[12ch] min-w-26 rounded-xl px-2.5 py-1 font-semibold text-white/50">
              Nick
            </p>
            <div className="s mt-0.75 flex items-center gap-1.25">
              <div className="text-md flex items-center gap-0.75 font-semibold text-white/70">
                +25 <PointIcon className="text-yellow-neon w-3.5" />
              </div>
              <div className="text-md flex items-center gap-0.75 font-semibold text-white/70">
                +5 <TonIcon className="text-blue-sky w-3" />
              </div>
            </div>
          </div>
        </li>

        <li className="relative z-1 size-19.25">
          <div className="empty:bg-gray absolute size-full rounded-full">
            <Image
              src={ava2Img}
              width={300}
              height={300}
              alt="Ava"
              priority
              className="size-full rounded-full object-cover"
            />
          </div>
          <div className="absolute bottom-full left-1/2 mb-1 flex -translate-x-1/2 gap-1.25">
            <StarIcon className="text-yellow-neon relative top-1.5 w-5.5" />
            <StarIcon className="text-gray-dark w-5.5" />
            <StarIcon className="text-gray-dark relative top-1.5 w-5.5" />
          </div>
          <div className="absolute top-16.25 left-1/2 flex -translate-x-1/2 flex-col items-center text-center">
            <p className="glass text-md line-clamp-2 min-h-7 max-w-[12ch] min-w-26 rounded-xl px-2.5 py-1 font-semibold text-white/50">
              Nickname
            </p>
            <div className="mt-0.75 flex items-center gap-1.25">
              <div className="text-md flex items-center gap-0.75 font-semibold text-white/70">
                -5 <PointIcon className="text-yellow-neon w-3.5" />
              </div>
              <div className="text-md flex items-center gap-0.75 font-semibold text-white/70">
                -5 <TonIcon className="text-blue-sky w-3" />
              </div>
            </div>
          </div>
        </li>

        <li className="relative mt-11.5 size-19.25">
          <div className="empty:bg-gray absolute size-full rounded-full">
            <Image
              src={ava4Img}
              width={300}
              height={300}
              alt="Ava"
              priority
              className="size-full rounded-full object-cover"
            />
          </div>
          <div className="absolute bottom-full left-1/2 mb-1 flex -translate-x-1/2 gap-1.25">
            <StarIcon className="text-gray-dark relative top-1.5 w-5.5" />
            <StarIcon className="text-gray-dark w-5.5" />
            <StarIcon className="text-gray-dark relative top-1.5 w-5.5" />
          </div>
          <div className="absolute top-16.25 left-1/2 flex -translate-x-1/2 flex-col items-center text-center">
            <p className="glass text-md line-clamp-2 min-h-7 max-w-[12ch] min-w-26 rounded-xl px-2.5 py-1 font-semibold text-white/50">
              Name
            </p>
            <div className="mt-0.75 flex items-center gap-1.25">
              <div className="text-md flex items-center gap-0.75 font-semibold text-white/70">
                -5 <PointIcon className="text-yellow-neon w-3.5" />
              </div>
              <div className="text-md flex items-center gap-0.75 font-semibold text-white/70">
                -5 <TonIcon className="text-blue-sky w-3" />
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className="grow" />

      <div className="mt-18 mb-9 text-center">
        <p className="text-xl font-semibold text-white/50">
          Игрок Name победил!
        </p>
        <p className="text-md mt-1 font-medium text-white/30">
          Игра #003 • Раунд #1 • Ставка 5 TON
        </p>
      </div>

      <div className="grow-[1.3]" />

      <div className="flex flex-col text-center">
        <div className="s mt-0.75 mb-2.5 flex items-center gap-2.5 self-center">
          <div className="flex items-center gap-1 text-3xl font-semibold text-white/70">
            -5 <PointIcon className="text-yellow-neon w-5.25" />
          </div>
          <div className="flex items-center gap-1 text-3xl font-semibold text-white/70">
            -5 <TonIcon className="text-blue-sky relative top-px w-5" />
          </div>
        </div>
        <p className="mb-2.75 text-xl font-medium text-white/50">
          Вы проиграли
        </p>
        <Button className="min-h-13 w-full max-w-58 self-center text-3xl font-medium text-white/50">
          Бросить кубики
        </Button>
      </div>
    </>
  )
}
