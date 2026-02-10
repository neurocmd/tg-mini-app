'use client'

import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'
import clsx from 'clsx'

import CloseIcon from '@/icons/close.svg'

function Dialog({ ...rest }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...rest} />
}

function DialogTrigger({ ...rest }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...rest} />
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  variant = 'modal',
  ...rest
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean
  variant?: 'modal' | 'sheet'
}) {
  return (
    <DialogPrimitive.Portal data-slot="dialog-portal">
      <DialogPrimitive.Backdrop
        data-slot="dialog-overlay"
        className="'fixed inset-0 z-2000"
      />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={clsx(
          'fixed z-2000 w-full transition outline-none',
          variant === 'modal' &&
            '_data-ending-style:scale-90 _data-ending-style:opacity-0 _data-starting-style:scale-90 _data-starting-style:opacity-0 top-1/2 left-1/2 max-w-[calc(100%-26px*2)] -translate-x-1/2 -translate-y-1/2 rounded-3xl',
          variant === 'sheet' &&
            '_data-ending-style:translate-y-100 _data-ending-style:opacity-0 _data-starting-style:translate-y-100 _data-starting-style:opacity-0 inset-x-0 bottom-0 max-h-full overflow-y-auto rounded-t-3xl duration-1000',
          className,
        )}
        {...rest}
      >
        <div
          className={clsx(
            'glass p-9.5',
            variant === 'modal' && 'rounded-3xl',
            variant === 'sheet' && 'rounded-t-3xl pb-16',
          )}
        >
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close
              data-slot="dialog-close"
              aria-label="Закрыть"
              className={clsx(
                'absolute cursor-pointer rounded-full opacity-50 transition hover:opacity-100 focus-visible:opacity-100',
                variant === 'modal' && 'top-4 right-3',
                variant === 'sheet' && 'top-6 right-8',
              )}
            >
              <CloseIcon className="w-10" />
            </DialogPrimitive.Close>
          )}
        </div>
      </DialogPrimitive.Popup>
    </DialogPrimitive.Portal>
  )
}

export { Dialog, DialogContent, DialogTrigger, DialogClose }
