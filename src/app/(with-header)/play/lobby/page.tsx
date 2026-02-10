'use client'

import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import { Dialog, DialogClose, DialogContent } from '@/components/Dialog'
import LinkIcon from '@/icons/link.svg'
import ava2Img from '@/images/ava-2.jpg'
import ava3Img from '@/images/ava-3.jpg'

export default function Play() {
  return (
    <>
      <ul className="mt-10.5 grid grid-cols-3 justify-items-center">
        <li className="relative order-first mt-11.5 size-19.25">
          <div className="empty:bg-gray absolute size-full rounded-full">
            <Image
              src={ava3Img}
              alt="Ava"
              priority
              className="size-full rounded-full object-cover"
            />
          </div>
          <div className="absolute top-16.25 left-1/2 flex -translate-x-1/2 flex-col items-center text-center">
            <p className="glass text-md line-clamp-2 min-h-7 max-w-[12ch] min-w-26 rounded-xl px-2.5 py-1 font-semibold text-white/50">
              Nick
            </p>
            <p className="text-md mt-0.5 font-semibold text-white/70">Готов</p>
          </div>
        </li>

        <li className="relative z-1 size-19.25">
          <div className="empty:bg-gray absolute size-full rounded-full">
            <Image
              src={ava2Img}
              alt="Ava"
              priority
              className="size-full rounded-full object-cover"
            />
          </div>
          <div className="absolute top-16.25 left-1/2 flex -translate-x-1/2 flex-col items-center text-center">
            <p className="glass text-md line-clamp-2 min-h-7 max-w-[12ch] min-w-26 rounded-xl px-2.5 py-1 font-semibold text-white/50">
              Nickname
            </p>
            <p className="text-md mt-0.5 font-semibold text-white/70">
              Не готов
            </p>
          </div>
        </li>

        <li className="relative mt-11.5 size-19.25">
          <div className="empty:bg-gray absolute size-full rounded-full">
            <div className="bg-gray-darker flex size-full items-center justify-center rounded-full">
              <LinkIcon className="size-6 opacity-50" />
            </div>
          </div>
          <div className="absolute top-16.25 left-1/2 flex -translate-x-1/2 flex-col items-center text-center">
            <p className="glass text-md line-clamp-2 min-h-7 max-w-[12ch] min-w-26 rounded-xl px-2.5 py-1 font-semibold text-white/50">
              Пусто
            </p>
          </div>
        </li>
      </ul>

      <div className="grow" />

      <div className="mt-18 mb-9 text-center">
        <p className="text-xl font-semibold text-white/50">Ожидание игры...</p>
        <p className="text-md mt-1 font-medium text-white/30">
          Игра #003 • Ставка 5 TON
        </p>
      </div>

      <div className="grow-[1.9]" />

      <div className="text-center">
        <p className="mb-2.75 text-xl font-medium text-white/50">
          Подтвердите готовность
        </p>
        <Button
          nativeButton={false}
          render={<Link href="/play/game" />}
          className="min-h-13 w-full max-w-57 text-3xl font-medium"
        >
          Готов
        </Button>
      </div>

      <Dialog defaultOpen>
        <DialogContent>
          <h3 className="mb-4.75 text-center text-3xl font-bold">
            Подтведите действие
          </h3>
          <div className="grid gap-2.25">
            <Button
              render={<DialogClose />}
              className="min-h-10 text-xl font-medium"
            >
              Выйти
            </Button>
            <Button
              render={<DialogClose />}
              className="min-h-10 text-xl font-medium"
            >
              Удалить комнату
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
