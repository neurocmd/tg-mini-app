'use client'
import { Radio, RadioGroup } from '@base-ui/react'
import { Collapsible } from '@base-ui/react/collapsible'
import { NumberField } from '@base-ui/react/number-field'
import { Tabs } from '@base-ui/react/tabs'
import Link from 'next/link'

import Button from '@/components/Button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/Dialog'
import ArrowIcon from '@/icons/arrow-right.svg'
import FilterIcon from '@/icons/filter.svg'
import MinusIcon from '@/icons/minus.svg'
import PlusIcon from '@/icons/plus.svg'
import PointIcon from '@/icons/point.svg'
import TonIcon from '@/icons/ton.svg'

export default function Play() {
  return (
    <>
      <Tabs.Root className="mt-7" defaultValue="games">
        <div className="flex gap-1.5">
          <Tabs.List className="glass flex grow rounded-3xl p-1">
            <Tabs.Tab
              value="games"
              className="relative grow basis-0 cursor-pointer rounded-3xl px-6 py-1.25 text-xl font-medium text-white/70"
            >
              Игры
            </Tabs.Tab>
            <Tabs.Tab
              value="history"
              className="relative grow basis-0 cursor-pointer rounded-3xl px-6 py-1.25 text-xl font-medium text-white/70"
            >
              История
            </Tabs.Tab>
            <Tabs.Indicator
              hidden={false}
              className="absolute inset-y-1 left-(--active-tab-left,theme(spacing.1)) -z-1 w-[calc(50%-theme(spacing.1))] rounded-3xl border border-white/30 bg-white/5 transition-all ease-out"
            />
          </Tabs.List>

          <Dialog>
            <DialogTrigger
              type="button"
              className="glass grid w-10.5 cursor-pointer place-content-center rounded-full text-white/50 transition hover:text-white focus-visible:text-white"
              aria-label="Фильтры"
            >
              <FilterIcon className="mt-0.5 size-5" />
            </DialogTrigger>
            <DialogContent>
              <Filters />
            </DialogContent>
          </Dialog>
        </div>
        <Tabs.Panel className="mt-3" value="games" tabIndex={-1}>
          <Collapsible.Root className="glass rounded-xl">
            <Collapsible.Trigger
              type="button"
              className="flex h-13 w-full cursor-pointer items-center justify-center rounded-t-xl p-5 text-xl font-medium text-white/70"
            >
              Создать игру
            </Collapsible.Trigger>
            <Collapsible.Panel className="h-(--collapsible-panel-height) overflow-hidden transition-all ease-out data-ending-style:h-0 data-starting-style:h-0">
              <form action="" className="grid gap-3.25 px-5 pb-5">
                <div className="glass flex min-h-11.5 items-center justify-between gap-1.5 rounded-lg py-1.5 pr-2.5 pl-4.5">
                  <label className="text-lg font-medium" htmlFor="game-players">
                    Количество игроков
                  </label>
                  <NumberField.Root
                    defaultValue={10}
                    min={0}
                    max={50}
                    id="game-players"
                    name="game-players"
                  >
                    <NumberField.Group className="flex items-center">
                      <NumberField.Decrement className="cursor-pointer rounded-full p-1.5 disabled:text-white/50">
                        <MinusIcon className="size-3.5" />
                      </NumberField.Decrement>
                      <NumberField.Input className="h-7.5 w-11 rounded-2xl border border-white/5 text-center -outline-offset-1" />
                      <NumberField.Increment className="cursor-pointer rounded-full p-1.5 disabled:text-white/50">
                        <PlusIcon className="size-3.5" />
                      </NumberField.Increment>
                    </NumberField.Group>
                  </NumberField.Root>
                </div>
                <div className="glass flex min-h-11.5 items-center justify-between gap-1.5 rounded-lg py-1.5 pr-2.5 pl-4.5">
                  <label className="text-lg font-medium" htmlFor="game-bid">
                    Ставка
                  </label>
                  <NumberField.Root
                    defaultValue={50}
                    min={0}
                    max={100}
                    id="game-bid"
                    name="game-bid"
                  >
                    <NumberField.Group className="flex items-center">
                      <NumberField.Decrement className="cursor-pointer rounded-full p-1.5 disabled:text-white/50">
                        <MinusIcon className="size-3.5" />
                      </NumberField.Decrement>
                      <NumberField.Input className="h-7.5 w-11 rounded-2xl border border-white/5 text-center -outline-offset-1" />
                      <NumberField.Increment className="cursor-pointer rounded-full p-1.5 disabled:text-white/50">
                        <PlusIcon className="size-3.5" />
                      </NumberField.Increment>
                    </NumberField.Group>
                  </NumberField.Root>
                </div>
                <Button type="submit" className="min-h-9 text-lg font-medium">
                  Создать
                </Button>
              </form>
            </Collapsible.Panel>
          </Collapsible.Root>

          <div className="glass mt-3 flex min-h-13 items-center justify-between gap-4 rounded-3xl px-5.5 py-2 text-xl font-medium">
            <p className="text-white/70">Ваша комната #003</p>
            <span className="">1/4</span>
          </div>

          <ul className="mt-3 grid grid-cols-2 gap-4">
            <li className="glass rounded-xl p-5">
              <h3 className="mb-1.5 text-xl font-bold text-white/50">
                Игра #001
              </h3>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Хост:</span> Nickname
              </p>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Игроков:</span> 1/2
              </p>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Ставка:</span> 250 TON
              </p>
              <Button
                nativeButton={false}
                render={<Link href="/play/lobby" />}
                className="mt-3 h-8.5 w-full text-sm font-bold"
              >
                <ArrowIcon className="mr-0.5 w-3.75" />
                Войти
              </Button>
            </li>
            <li className="glass rounded-xl p-5">
              <h3 className="mb-1.5 text-xl font-bold text-white/50">
                Игра #002
              </h3>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Хост:</span> Nickname
              </p>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Игроков:</span> 3/4
              </p>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Ставка:</span> 49 TON
              </p>
              <Button
                nativeButton={false}
                render={<Link href="/play/lobby" />}
                className="mt-3 h-8.5 w-full text-sm font-bold"
              >
                <ArrowIcon className="mr-0.5 w-3.75" />
                Войти
              </Button>
            </li>
          </ul>
        </Tabs.Panel>
        <Tabs.Panel className="mt-3" value="history" tabIndex={-1}>
          <ul className="mt-3 grid grid-cols-2 gap-4">
            <li className="glass rounded-xl p-5">
              <h3 className="mb-1.5 text-xl font-bold text-white/50">
                Игра #001
              </h3>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Хост:</span> Nickname
              </p>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Игроков:</span> 1/2
              </p>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Ставка:</span> 250 TON
              </p>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Место:</span> 1
              </p>
              <div className="bg-gray/10 mt-3.75 flex min-h-8.5 items-center justify-center gap-1.5 rounded-3xl px-4 py-1">
                <div className="flex items-center gap-1">
                  <span className="text-green text-sm font-bold">+ 25</span>
                  <TonIcon className="text-blue-sky w-3.25" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green text-sm font-bold">+ 5</span>
                  <PointIcon className="text-yellow-bright w-3.5" />
                </div>
              </div>
            </li>
            <li className="glass rounded-xl p-5">
              <h3 className="mb-1.5 text-xl font-bold text-white/50">
                Игра #002
              </h3>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Хост:</span> Nickname
              </p>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Игроков:</span> 3/4
              </p>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Ставка:</span> 49 TON
              </p>
              <p className="text-sm font-bold">
                <span className="mr-1 text-white/50">Место:</span> 3
              </p>
              <div className="bg-gray/10 mt-3.75 flex min-h-8.5 items-center justify-center gap-1.5 rounded-3xl px-4 py-1">
                <div className="flex items-center gap-1">
                  <span className="text-red-light text-sm font-bold">- 50</span>
                  <TonIcon className="text-blue-sky w-3.25" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-red-light text-sm font-bold">- 5</span>
                  <PointIcon className="text-yellow-bright w-3.5" />
                </div>
              </div>
            </li>
          </ul>
        </Tabs.Panel>
      </Tabs.Root>
    </>
  )
}

function Filters() {
  return (
    <>
      <h3 className="mb-2 text-center text-3xl font-bold">Фильтры</h3>

      <RadioGroup defaultValue="2">
        <h4 className="mb-3.75 text-2xl font-semibold text-white/50">Игра</h4>

        <div className="grid grid-cols-2 gap-3">
          <Radio.Root
            value="2"
            nativeButton
            render={
              <Button className="min-h-9.5 w-full px-3! text-xl font-medium text-white/70">
                2 игрока
              </Button>
            }
            className="data-checked:bg-gray/25"
          />
          <Radio.Root
            value="3"
            nativeButton
            render={
              <Button className="min-h-9.5 w-full px-3! text-xl font-medium text-white/70">
                3 игрока
              </Button>
            }
            className="data-checked:bg-gray/25"
          />
          <Radio.Root
            value="4"
            nativeButton
            render={
              <Button className="min-h-9.5 w-full px-3! text-xl font-medium text-white/70">
                4 игрока
              </Button>
            }
            className="data-checked:bg-gray/25"
          />
          <Radio.Root
            value="5"
            nativeButton
            render={
              <Button className="min-h-9.5 w-full px-3! text-xl font-medium text-white/70">
                5 игроков
              </Button>
            }
            className="data-checked:bg-gray/25"
          />
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="desc" className="mt-4.5">
        <h4 className="mb-3.75 text-2xl font-semibold text-white/50">Ставка</h4>

        <div className="grid gap-3">
          <Radio.Root
            value="desc"
            nativeButton
            render={
              <Button className="min-h-9.5 w-full px-3! text-xl font-medium text-white/70">
                По убыванию
              </Button>
            }
            className="data-checked:bg-gray/25"
          />
          <Radio.Root
            value="asc"
            nativeButton
            render={
              <Button className="min-h-9.5 w-full px-3! text-xl font-medium text-white/70">
                По возрастанию
              </Button>
            }
            className="data-checked:bg-gray/25"
          />
        </div>
      </RadioGroup>

      <RadioGroup defaultValue="old" className="mt-4.5">
        <h4 className="mb-3.75 text-2xl font-semibold text-white/50">
          Комната
        </h4>

        <div className="grid gap-3">
          <Radio.Root
            value="old"
            nativeButton
            render={
              <Button className="min-h-9.5 w-full px-3! text-xl font-medium text-white/70">
                Старые
              </Button>
            }
            className="data-checked:bg-gray/25"
          />
          <Radio.Root
            value="new"
            nativeButton
            render={
              <Button className="min-h-9.5 w-full px-3! text-xl font-medium text-white/70">
                Новые
              </Button>
            }
            className="data-checked:bg-gray/25"
          />
        </div>
      </RadioGroup>
    </>
  )
}
