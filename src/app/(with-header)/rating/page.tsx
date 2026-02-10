'use client'

import { Tabs } from '@base-ui/react/tabs'
import clsx from 'clsx'
import Image from 'next/image'

import PointIcon from '@/icons/point.svg'
import TonIcon from '@/icons/ton.svg'
import ava2Img from '@/images/ava-2.jpg'
import ava3Img from '@/images/ava-3.jpg'
import ava4Img from '@/images/ava-4.jpg'

export default function Rating() {
  return (
    <>
      <span className="[html:has(&)]:[--bg-color-1:theme(colors.yellow)] [html:has(&)]:[--bg-color-2:theme(colors.yellow)]" />

      <ul className="mx-1 mt-5.5 grid grid-cols-3 justify-items-center">
        <li className="relative mt-11.5 size-22.5">
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
          <p className="glass absolute top-19 left-1/2 flex min-h-8 max-w-[12ch] min-w-30 -translate-x-1/2 items-center rounded-xl px-2.5 py-1 text-xl font-semibold text-white/50">
            <span className="mr-2.5">#2</span>
            <span className="line-clamp-2 min-w-0">Nick</span>
          </p>
        </li>

        <li className="relative z-1 size-22.5">
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
          <p className="glass absolute top-19 left-1/2 flex min-h-8 max-w-[12ch] min-w-30 -translate-x-1/2 items-center rounded-xl px-2.5 py-1 text-xl font-semibold text-white/50">
            <span className="mr-2.5">#1</span>
            <span className="line-clamp-2 min-w-0">Nickname</span>
          </p>
        </li>

        <li className="relative mt-11.5 size-22.5">
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
          <p className="glass absolute top-19 left-1/2 flex min-h-8 max-w-[12ch] min-w-30 -translate-x-1/2 items-center rounded-xl px-2.5 py-1 text-xl font-semibold text-white/50">
            <span className="mr-2.5">#3</span>
            <span className="line-clamp-2 min-w-0">Nicknamenickname</span>
          </p>
        </li>
      </ul>

      <h1 className="mt-8 mb-5.5 text-center text-5xl font-semibold">
        Рейтинг
      </h1>

      <Tabs.Root className="contents" defaultValue="scores">
        <Tabs.List className="glass mx-5 flex shrink-0 rounded-3xl p-1">
          <Tabs.Tab
            value="scores"
            className="relative grow basis-0 cursor-pointer rounded-3xl px-6 py-1.25 text-xl font-medium text-white/70"
          >
            По очкам
          </Tabs.Tab>
          <Tabs.Tab
            value="ton"
            className="relative grow basis-0 cursor-pointer rounded-3xl px-6 py-1.25 text-xl font-medium text-white/70"
          >
            По TON
          </Tabs.Tab>
          <Tabs.Indicator
            hidden={false}
            className="absolute inset-y-1 left-(--active-tab-left,theme(spacing.1)) -z-1 w-[calc(50%-theme(spacing.1))] rounded-3xl border border-white/30 bg-white/5 transition-all ease-out"
          />
        </Tabs.List>
        <Tabs.Panel className="mx-5 mt-4" value="scores" tabIndex={-1}>
          <ul className="grid grid-cols-1 gap-1.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <li
                className={clsx(
                  'glass flex min-h-9.5 items-center gap-2 rounded-3xl py-1.5 pr-3 pl-4 text-xl',
                  i === 0 && 'outline-yellow-gold outline-1 outline-offset-3',
                )}
                key={i}
              >
                <span className="shrink-0 font-bold text-white/50">
                  #{i + 1}
                </span>
                <span className="line-clamp-2 min-w-0 grow text-center font-bold">
                  {i === 0 ? 'Вы' : 'Nick'}
                </span>
                <span className="flex shrink-0 items-center gap-1.25 text-white/50">
                  <PointIcon className="text-yellow-bright size-3.5 shrink-0" />
                  100
                </span>
              </li>
            ))}
          </ul>
        </Tabs.Panel>
        <Tabs.Panel className="mx-5 mt-4" value="ton" tabIndex={-1}>
          <ul className="grid grid-cols-1 gap-1.5">
            {Array.from({ length: 10 }).map((_, i) => (
              <li
                className={clsx(
                  'glass flex min-h-9.5 items-center gap-2 rounded-3xl py-1.5 pr-3 pl-4 text-xl',
                  i === 0 && 'outline-yellow-gold outline-1 outline-offset-3',
                )}
                key={i}
              >
                <span className="shrink-0 font-bold text-white/50">
                  #{i + 1}
                </span>
                <span className="line-clamp-2 min-w-0 grow text-center font-bold">
                  {i === 0 ? 'Вы' : 'Nickname'}
                </span>
                <span className="flex shrink-0 items-center gap-1.25 text-white/50">
                  <TonIcon className="text-blue-sky size-3.25 shrink-0" />
                  55
                </span>
              </li>
            ))}
          </ul>
        </Tabs.Panel>
      </Tabs.Root>
    </>
  )
}
