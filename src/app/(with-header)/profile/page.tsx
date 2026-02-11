'use client'

import clsx from 'clsx'
import Image from 'next/image'

import { Carousel, CarouselContent, CarouselItem } from '@/components/Carousel'
import CopyIcon from '@/icons/copy.svg'
import PointIcon from '@/icons/point.svg'
import RightIcon from '@/icons/up-right.svg'
import ava1Img from '@/images/ava-1.jpg'
import ava2Img from '@/images/ava-2.jpg'
import ava3Img from '@/images/ava-3.jpg'
import ava4Img from '@/images/ava-4.jpg'
import ava5Img from '@/images/ava-5.jpg'

export default function Profile() {
  return (
    <>
      <span className="[html:has(&)]:[--bg-color-1:theme(colors.purple)] [html:has(&)]:[--bg-color-2:theme(colors.pink)]" />

      <div className="mt-7 mb-4.25 flex flex-col items-center text-center">
        <div className="empty:bg-gray mb-2.5 size-37.75 rounded-full">
          <Image
            src={ava2Img}
            width={300}
            height={300}
            alt=""
            priority
            className="size-full rounded-full object-cover"
          />
        </div>
        <h1 className="text-center text-6xl font-bold">Nickname</h1>
        <p className="-mt-3 text-3xl font-bold text-white/50">@username</p>
      </div>

      <section className="glass mb-2.5 shrink-0 rounded-2xl pt-5 pr-3.5 pb-5.5 pl-6.5">
        <div className="mb-3.5 flex items-center gap-1.75">
          <h2 className="text-md font-bold">Твоя реферальная ссылка</h2>
          <span className="bg-gray/10 rounded-3xl px-2.75 py-0.75 pb-1 text-xs font-semibold text-white/60">
            Условия
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <input
            id="referral-link"
            type="text"
            readOnly
            value="https://shop.com/product/iphone?referral=partner567"
            className="bg-gray/10 h-8.75 w-full grow rounded-3xl border border-transparent px-4 py-0.5 text-white/80 -outline-offset-1"
            onFocus={(e) => (e.target as HTMLInputElement).select()}
          />
          <button
            type="button"
            title="Копировать"
            className="-m-1.25 shrink-0 cursor-pointer rounded-full p-1.25 opacity-50 transition hover:opacity-100 focus-visible:opacity-100"
          >
            <CopyIcon className="size-5" />
          </button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://shop.com/product/iphone?referral=partner567"
            title="Открыть ссылку"
            className="-m-1.25 shrink-0 cursor-pointer rounded-full p-1.25 opacity-50 transition hover:opacity-100 focus-visible:opacity-100"
          >
            <RightIcon className="size-5" />
          </a>
        </div>
      </section>

      <ul className="grid grid-cols-2 gap-2.25">
        <li className="glass flex flex-col items-center rounded-2xl p-5">
          <h3 className="flex items-center text-center text-4xl font-bold">
            <PointIcon className="text-yellow-bright mr-0.5 -ml-1.5 w-5.5 shrink-0" />
            100
          </h3>
          <p className="-mt-1 text-sm font-medium text-white/50">рейтинга</p>
        </li>
        <li className="glass flex flex-col items-center rounded-2xl p-5">
          <h3 className="flex items-center text-center text-4xl font-bold">
            <span className="mr-0.5 text-white/50">#</span>3
          </h3>
          <p className="-mt-1 text-sm font-medium text-white/50">позиция</p>
        </li>
        <li className="glass flex flex-col items-center rounded-2xl p-5">
          <h3 className="flex items-center text-center text-4xl font-bold">
            57
          </h3>
          <p className="-mt-1 text-sm font-medium text-white/50">игр</p>
        </li>
        <li className="glass flex flex-col items-center rounded-2xl p-5">
          <h3 className="flex items-center text-center text-4xl font-bold">
            51<span className="text-white/50">%</span>
          </h3>
          <p className="-mt-1 text-sm font-medium text-white/50">побед</p>
        </li>
      </ul>

      <section className="mt-5.5">
        <h2 className="text-4xl font-bold">Инвентарь</h2>

        <section>
          <h3 className="mb-5.5 text-xl text-white/50">Аватарки</h3>

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
                        priority
                        className="size-full rounded-full object-cover"
                      />
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        <section className="mt-3.5">
          <h3 className="mb-5.5 text-xl text-white/50">Кости</h3>

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
                        priority
                        className="size-full rounded-full object-cover"
                      />
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      </section>
    </>
  )
}
