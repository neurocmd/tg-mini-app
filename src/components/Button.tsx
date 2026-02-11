import { Button as ButtonPrimitive } from '@base-ui/react/button'
import clsx from 'clsx'

export default function Button({ className, ...rest }: ButtonPrimitive.Props) {
  return (
    <ButtonPrimitive
      {...rest}
      className={clsx(
        'bg-gray/10 hover:bg-gray/20 inline-flex cursor-pointer items-center justify-center rounded-2xl px-5 py-1.5 transition active:scale-97',
        className,
      )}
    />
  )
}
