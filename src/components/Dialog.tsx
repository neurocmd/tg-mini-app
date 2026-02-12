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

function DialogClose({ ...rest }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...rest} />
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...rest
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPrimitive.Portal data-slot="dialog-portal">
      <DialogPrimitive.Backdrop
        data-slot="dialog-overlay"
        className="fixed inset-0 z-2000 bg-black/10"
      />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={clsx(
          'fixed top-1/2 left-1/2 z-2000 grid max-h-[calc(100%-theme(spacing.5)*2)] w-full max-w-[calc(min(430px,100%)-theme(spacing.5)*2)] -translate-x-1/2 -translate-y-1/2 grid-rows-1 rounded-3xl outline-none',
          className,
        )}
        {...rest}
      >
        <div className="glass absolute inset-0 -z-1 rounded-3xl"></div>
        <div className="overflow-y-auto p-9">
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close
              data-slot="dialog-close"
              aria-label="Закрыть"
              className="absolute top-4 right-3 cursor-pointer rounded-full opacity-50 transition hover:opacity-100 focus-visible:opacity-100"
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
