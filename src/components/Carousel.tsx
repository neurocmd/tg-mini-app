'use client'

import clsx from 'clsx'
import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'
import * as React from 'react'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  options?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  snappedIndex: number // Добавляем индекс активного слайда в контекст
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context)
    throw new Error('useCarousel must be used within a <Carousel />')
  return context
}

function Carousel({
  orientation = 'horizontal',
  options,
  setApi,
  plugins,
  className,
  children,
  ...rest
}: React.ComponentProps<'div'> & CarouselProps) {
  const classNamesPlugin = React.useMemo(() => ClassNames(), [])

  const [carouselRef, api] = useEmblaCarousel(
    {
      align: 'center',
      loop: true,
      dragFree: true,
      containScroll: false,
      ...options,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    [classNamesPlugin, ...(plugins || [])],
  )

  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [snappedIndex, setSnappedIndex] = React.useState(0)
  const [isReady, setIsReady] = React.useState(false)

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  // Механика доводки (iOS Picker style)
  const tweakInertia = React.useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return
    const { scrollTo, target, location } = emblaApi.internalEngine()
    const displacement = target.get() - location.get()
    const ITEM_SIZE = 32
    const factor = Math.abs(displacement) < ITEM_SIZE / 2.5 ? 10 : 0.1
    const distance = displacement * factor
    scrollTo.distance(distance, true)
  }, [])

  const onSelect = React.useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setSnappedIndex(emblaApi.selectedScrollSnap()) // Обновляем индекс "примагниченного" слайда
  }, [])

  React.useLayoutEffect(() => {
    if (api) setIsReady(true)
  }, [api])

  React.useEffect(() => {
    if (!api) return
    if (setApi) setApi(api)

    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)
    api.on('pointerUp', tweakInertia)

    return () => {
      api.off('reInit', onSelect)
      api.off('select', onSelect)
      api.off('pointerUp', tweakInertia)
    }
  }, [api, setApi, onSelect, tweakInertia])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        options,
        orientation:
          orientation || (options?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        snappedIndex, // Прокидываем индекс в контекст
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={clsx('relative', isReady && 'is-ready', className)}
        role="region"
        {...rest}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...rest }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel()
  return (
    <div ref={carouselRef} className="h-full overflow-hidden">
      <div
        className={clsx(
          'flex',
          orientation === 'vertical' && 'flex-col',
          className,
        )}
        {...rest}
      />
    </div>
  )
}

function CarouselItem({
  className,
  index,
  ...rest
}: React.ComponentProps<'div'> & { index: number }) {
  // Сделали index обязательным
  const { api } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={clsx('min-w-0 shrink-0 grow-0', className)}
      onClick={() => index !== undefined && api?.scrollTo(index)}
      {...rest}
    />
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
}
