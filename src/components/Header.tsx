'use client'

import { NumberField } from '@base-ui/react'
import { Menu } from '@base-ui/react/menu'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Dialog, DialogContent, DialogTrigger } from './Dialog'
import Button from '@/components/Button'
import BackIcon from '@/icons/arrow-back.svg'
import MinusIcon from '@/icons/minus.svg'
import PlusIcon from '@/icons/plus.svg'
import PointIcon from '@/icons/point.svg'
import SettingsIcon from '@/icons/settings.svg'
import StarIcon from '@/icons/star.svg'
import TonIcon from '@/icons/ton.svg'
import ava1Img from '@/images/ava-1.jpg'

export default function Header() {
  const router = useRouter()

  function onClickBack() {
    router.back()
  }

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-1000 px-5.5 pt-[calc(theme(spacing.6)+var(--safe-area-inset-top))]">
      <div className="mb-2.5 flex items-center justify-between gap-5 *:pointer-events-auto">
        <button
          type="button"
          className="-m-1.5 -ml-3 cursor-pointer rounded-full p-1.5 opacity-50 backdrop-blur-sm transition hover:opacity-100 focus-visible:opacity-100"
          onClick={onClickBack}
          aria-label="Назад"
        >
          <BackIcon className="size-7.5" />
        </button>
        <Link
          href="/settings"
          aria-label="Настройки"
          className="-m-2 shrink-0 cursor-pointer rounded-full p-2 opacity-50 backdrop-blur-sm transition hover:opacity-100 focus-visible:opacity-100"
        >
          <SettingsIcon className="size-6.5" />
        </Link>
      </div>

      <div className="glass p pointer-events-auto rounded-3xl p-3">
        <div className="flex items-center gap-4">
          <div className="flex max-w-1/2 min-w-0 items-center gap-2">
            <Link
              href="/profile"
              className="empty:bg-gray size-15 shrink-0 rounded-full"
            >
              <Image
                src={ava1Img}
                width={300}
                height={300}
                alt="Logo"
                priority
                className="size-full rounded-full object-cover"
              />
            </Link>
            <div className="-my-1 min-w-0">
              <Link
                href="/profile"
                className="line-clamp-2 text-xl font-bold text-black"
              >
                Nicknamenicknamenicknameni
              </Link>
              <p className="flex items-center gap-1">
                <PointIcon className="text-yellow-bright size-3.5 shrink-0" />
                <span className="text-sm font-semibold text-nowrap text-black">
                  100 points
                </span>
              </p>
            </div>
          </div>
          <div className="mx-auto flex min-w-0 shrink-0 flex-col items-center">
            <Menu.Root>
              <Menu.Trigger className="max-w-[12ch] min-w-0 cursor-pointer truncate text-xl text-black/70">
                UQAN...2TKU
              </Menu.Trigger>
              <Menu.Portal>
                <Menu.Positioner sideOffset={0}>
                  <Menu.Popup className="w-46.5 origin-(--transform-origin) transition duration-150 data-starting-style:scale-95">
                    <div className="glass rounded-xl px-4.5 py-4">
                      <div className="grid gap-2.5">
                        <Menu.Item
                          nativeButton
                          render={
                            <Button className="min-h-8 text-sm text-white/70">
                              Скопировать
                            </Button>
                          }
                        />
                        <Menu.Item
                          nativeButton
                          render={
                            <Button className="min-h-8 text-sm text-white/70">
                              Отключить
                            </Button>
                          }
                        />
                      </div>
                    </div>
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.Root>

            <div className="flex gap-px font-semibold text-black">
              <Dialog>
                <DialogTrigger className="bg-gray/20 hover:bg-gray/40 relative isolate size-5.25 shrink-0 cursor-pointer rounded-full text-sm transition before:absolute before:-inset-1.25 before:-z-1 before:rounded-full">
                  -
                </DialogTrigger>
                <DialogContent>
                  <h3 className="mb-7 text-center text-3xl font-bold">
                    Вывести TON
                  </h3>

                  <NumberField.Root
                    defaultValue={50}
                    min={1}
                    max={100}
                    className="mb-2"
                  >
                    <NumberField.Group className="flex gap-1">
                      <NumberField.Decrement
                        render={
                          <Button className="min-h-10 w-10 shrink-0 rounded-full p-0! text-xl font-medium disabled:pointer-events-none disabled:text-white/50">
                            <MinusIcon className="size-6" />
                          </Button>
                        }
                      />
                      <NumberField.Input className="min-h-10 w-full grow rounded-full bg-white/10 text-center text-xl font-medium -outline-offset-1" />
                      <NumberField.Increment
                        render={
                          <Button className="min-h-10 w-10 shrink-0 rounded-full p-0! text-xl font-medium disabled:pointer-events-none disabled:text-white/50">
                            <PlusIcon className="size-6" />
                          </Button>
                        }
                      />
                    </NumberField.Group>
                  </NumberField.Root>

                  <Button className="min-h-10 w-full text-xl font-medium">
                    Вывести
                  </Button>
                </DialogContent>
              </Dialog>

              <Menu.Root>
                <Menu.Trigger
                  type="button"
                  className="bg-gray/20 hover:bg-gray/40 flex h-5.25 shrink-0 cursor-pointer items-center gap-1 rounded-full px-3 text-sm transition"
                >
                  <TonIcon className="text-blue-sky relative top-px w-3.25 shrink-0" />
                  <span className="text-nowrap">10 TON</span>
                </Menu.Trigger>
                <Menu.Portal>
                  <Menu.Positioner sideOffset={6}>
                    <Menu.Popup className="w-46.5 origin-(--transform-origin) transition duration-0 data-ending-style:opacity-0 data-starting-style:opacity-0">
                      <div className="glass rounded-xl px-4.5 py-4">
                        <div className="grid gap-2.5">
                          <Menu.Item
                            nativeButton
                            render={
                              <Button className="min-h-8 gap-1 text-sm text-white/70">
                                <StarIcon className="text-yellow-bright w-3.75" />
                                Stars
                              </Button>
                            }
                          />
                          <Menu.Item
                            nativeButton
                            render={
                              <Button className="min-h-8 gap-1 text-sm text-white/70">
                                <TonIcon className="text-blue-sky relative top-px w-3.25" />
                                TON
                              </Button>
                            }
                          />
                        </div>
                      </div>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.Root>

              <Dialog>
                <DialogTrigger className="bg-gray/20 hover:bg-gray/40 relative isolate size-5.25 shrink-0 cursor-pointer rounded-full text-sm transition before:absolute before:-inset-1.25 before:-z-1 before:rounded-full">
                  +
                </DialogTrigger>
                <DialogContent>
                  <h3 className="mb-7 text-center text-3xl font-bold">
                    Пополнить TON
                  </h3>

                  <NumberField.Root
                    defaultValue={50}
                    min={1}
                    max={100}
                    className="mb-2"
                  >
                    <NumberField.Group className="flex gap-1">
                      <NumberField.Decrement
                        render={
                          <Button className="min-h-10 w-10 shrink-0 rounded-full p-0! text-xl font-medium disabled:pointer-events-none disabled:text-white/50">
                            <MinusIcon className="size-6" />
                          </Button>
                        }
                      />
                      <NumberField.Input className="min-h-10 w-full grow rounded-full bg-white/10 text-center text-xl font-medium -outline-offset-1" />
                      <NumberField.Increment
                        render={
                          <Button className="min-h-10 w-10 shrink-0 rounded-full p-0! text-xl font-medium disabled:pointer-events-none disabled:text-white/50">
                            <PlusIcon className="size-6" />
                          </Button>
                        }
                      />
                    </NumberField.Group>
                  </NumberField.Root>

                  <Button className="min-h-10 w-full text-xl font-medium">
                    Пополнить
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
