'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/Button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/Carousel'
import ava1Img from '@/images/ava-1.jpg'
import ava2Img from '@/images/ava-2.jpg'
import ava3Img from '@/images/ava-3.jpg'
import ava4Img from '@/images/ava-4.jpg'
import ava5Img from '@/images/ava-5.jpg'

export default function Home() {
  return (
    <>
      <span className="[html:has(&)]:[--bg-color-1:theme(colors.aqua)] [html:has(&)]:[--bg-color-2:theme(colors.aqua)]" />

      <div className="mx-3">
        <h1 className="text-5xl font-extrabold">
          Добро
          <br /> пожаловать в OneDice
        </h1>
        <p className="mt-1.5 text-3xl font-medium text-white/50">
          Играйте в кости онлайн с игроками со всего мира
        </p>
      </div>

      <span className="grow" />

      <h2 className="mx-3 mt-6 mb-4.5 text-3xl font-semibold">
        Выберите одну из предложенных автарок
      </h2>

      <div className="glass overflow-x-hidden rounded-2xl">
        <Carousel options={{ startIndex: 2 }}>
          <CarouselContent
            style={{ transform: `translate3d(${-(2 * 35 - 32.5)}%,0,0)` }} // обеспечиваем корректное отображение до инициализации карусели, не забыть проставить startIndex вместо 2
          >
            {[ava1Img, ava2Img, ava3Img, ava4Img, ava5Img].map((src, i) => (
              <CarouselItem
                key={i}
                index={i}
                className={clsx(
                  'flex w-[35%] justify-center py-5.5 select-none',
                  i === 2 && 'is-nearest', // обеспечиваем корректное отображение до инициализации карусели, не забыть проставить startIndex вместо 2
                )}
              >
                <button
                  type="button"
                  className="empty:bg-gray size-32.5 shrink-0 scale-52 rounded-full opacity-70 transition duration-250 [.is-nearest>&]:scale-100 [.is-nearest>&]:opacity-100"
                  aria-label="Выбрать аву"
                >
                  <Image
                    src={src}
                    width={300}
                    height={300}
                    alt=""
                    priority={i === 2} // не забыть проставить startIndex вместо 2
                    className="size-full rounded-full object-cover"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <Button
        nativeButton={false}
        render={<Link href="/play" />}
        className="mt-7 min-h-11 text-xl font-medium text-white/70"
      >
        Продолжить
      </Button>

      <span className="grow" />
    </>
  )
}
