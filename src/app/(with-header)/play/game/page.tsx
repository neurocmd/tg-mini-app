'use client'

import Image from 'next/image'

import Button from '@/components/Button'
import { Dialog, DialogClose, DialogContent } from '@/components/Dialog'
import StarIcon from '@/icons/star.svg'
import ava2Img from '@/images/ava-2.jpg'
import ava3Img from '@/images/ava-3.jpg'
import ava4Img from '@/images/ava-4.jpg'

export default function Play() {
  return (
    <>
      <ul className="mt-10.5 grid grid-cols-3 justify-items-center">
        <li className="relative order-first mt-11.5 size-19.25">
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
            <p className="text-md font-semibold text-white/15">6 очков</p>
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
            <p className="text-md font-semibold text-white/15">5 очков</p>
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
            <p className="text-md font-semibold text-white/15">4 очка</p>
          </div>
        </li>
      </ul>

      <div className="mt-18 mb-9 text-center">
        <p className="text-xl font-semibold text-white/50">
          Очередь игрока Name
        </p>
        <p className="text-md mt-1 font-medium text-white/30">
          Игра #003 • Раунд #1 • Ставка 5 TON
        </p>
      </div>

      <div className="mb-9 flex flex-wrap justify-center gap-7">
        <div className="size-26 rounded-lg"></div>
        <div className="size-26 rounded-lg"></div>
      </div>

      <div className="grow" />

      <div className="text-center">
        <p className="mb-2.75 text-xl font-medium text-white/50">
          У вас 7 очков • 1 победа
        </p>
        <Button className="min-h-13 w-full max-w-58 text-3xl font-medium text-white/50">
          Бросить кубики
        </Button>
      </div>

      <Dialog defaultOpen>
        <DialogContent>
          <h3 className="mb-1.5 text-center text-3xl font-bold">
            Выйти из комнаты?
          </h3>
          <p className="text-md mb-5 text-center font-medium text-white/50">
            При выходе поставленные средства будут утеряны
          </p>
          <Button
            render={<DialogClose />}
            className="min-h-10 w-full text-xl font-medium"
          >
            Выйти
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
