import CubeIcon from '@/icons/cube.svg'
import StarIcon from '@/icons/star-outline.svg'

export default function Shop() {
  return (
    <>
      <span className="[html:has(&)]:[--bg-color-1:theme(colors.green.neon)] [html:has(&)]:[--bg-color-2:theme(colors.green.lime)]" />

      <span className="grow" />

      <h1 className="-m-1.25 mt-5.5 mb-7.25 text-center text-5xl font-semibold">
        Скоро тут будут...
      </h1>

      <ul className="grid gap-2.25 px-3">
        <li className="glass flex items-center gap-4.75 rounded-3xl px-6 pt-3.5 pb-4">
          <CubeIcon className="w-12 shrink-0" />
          <div>
            <h2 className="mb-0.75 text-3xl font-semibold">Кейсы с призами</h2>
            <p className="text-sm font-medium text-white/50">
              Открывайте кейсы с редкими предметами и ценными наградами
            </p>
          </div>
        </li>
        <li className="glass flex items-center gap-4.75 rounded-3xl px-6 pt-3.5 pb-4">
          <StarIcon className="w-12 shrink-0" />
          <div>
            <h2 className="mb-0.75 text-3xl font-semibold">Эксклюзивы</h2>
            <p className="text-sm font-medium text-white/50">
              Уникальные предметы, доступные только в магазине
            </p>
          </div>
        </li>
      </ul>

      <span className="grow-2" />
    </>
  )
}
