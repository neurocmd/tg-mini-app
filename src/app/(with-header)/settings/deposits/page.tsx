'use client'

import { Tabs } from '@base-ui/react'

import StarIcon from '@/icons/star.svg'
import TonIcon from '@/icons/ton.svg'

export default function SettingsDeposits() {
  return (
    <>
      <Tabs.Root className="contents" defaultValue="ton">
        <Tabs.List className="glass mx-5 mt-7 flex shrink-0 rounded-3xl p-1">
          <Tabs.Tab
            value="ton"
            className="relative grow basis-0 cursor-pointer rounded-3xl px-6 py-1.25 text-xl font-medium text-white/70"
          >
            TON
          </Tabs.Tab>
          <Tabs.Tab
            value="stars"
            className="relative grow basis-0 cursor-pointer rounded-3xl px-6 py-1.25 text-xl font-medium text-white/70"
          >
            Stars
          </Tabs.Tab>
          <Tabs.Indicator
            hidden={false}
            className="absolute inset-y-1 left-(--active-tab-left,theme(spacing.1)) -z-1 w-[calc(50%-theme(spacing.1))] rounded-3xl border border-white/30 bg-white/5 transition-all ease-out"
          />
        </Tabs.List>
        <Tabs.Panel
          className="mx-5 mt-7 grid grow grid-cols-1 content-start gap-5.5"
          tabIndex={-1}
          value="ton"
        >
          <section>
            <h2 className="d mb-2.25 text-center text-xl font-medium text-white/50">
              Сегодня
            </h2>
            <ul className="grid grid-cols-1 gap-2.25">
              <li className="glass flex min-h-17 items-center gap-4 rounded-xl px-5 py-2 text-xl">
                <p className="flex shrink-0 items-center gap-1 font-medium">
                  +10
                  <TonIcon className="text-blue-sky w-3.5 shrink-0" />
                </p>
                <p className="line-clamp-3 min-w-0 grow text-center text-white/50">
                  UQAN...K2TK
                </p>
                <p className="shrink-0">17:01</p>
              </li>
              <li className="glass flex min-h-17 items-center gap-4 rounded-xl px-5 py-2 text-xl">
                <p className="flex shrink-0 items-center gap-1 font-medium">
                  +10
                  <TonIcon className="text-blue-sky w-3.5 shrink-0" />
                </p>
                <p className="line-clamp-3 min-w-0 grow text-center text-white/50">
                  UQAN...K2TK
                </p>
                <p className="shrink-0">17:01</p>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="d mb-2.25 text-center text-xl font-medium text-white/50">
              Вчера
            </h2>
            <ul className="grid grid-cols-1 gap-2.25">
              <li className="glass flex min-h-17 items-center gap-4 rounded-xl px-5 py-2 text-xl">
                <p className="flex shrink-0 items-center gap-1 font-medium">
                  +10
                  <TonIcon className="text-blue-sky w-3.5 shrink-0" />
                </p>
                <p className="line-clamp-3 min-w-0 grow text-center text-white/50">
                  UQAN...K2TK
                </p>
                <p className="shrink-0">17:01</p>
              </li>
            </ul>
          </section>
        </Tabs.Panel>
        <Tabs.Panel
          className="mx-5 mt-7 grid grow grid-cols-1 content-start gap-5.5"
          value="stars"
          tabIndex={-1}
        >
          <section>
            <h2 className="d mb-2.25 text-center text-xl font-medium text-white/50">
              Сегодня
            </h2>
            <ul className="grid grid-cols-1 gap-2.25">
              <li className="glass flex min-h-17 items-center gap-4 rounded-xl px-5 py-2 text-xl">
                <p className="flex shrink-0 items-center gap-1 font-medium">
                  +151
                  <StarIcon className="text-yellow-bright w-4 shrink-0" />
                </p>
                <p className="line-clamp-3 min-w-0 grow text-center text-white/50">
                  UQAN...K2TK
                </p>
                <p className="shrink-0">17:01</p>
              </li>
            </ul>
          </section>
        </Tabs.Panel>
      </Tabs.Root>
    </>
  )
}
