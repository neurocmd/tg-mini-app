import Header from '@/components/Header'

export default function WithHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="flex h-full scroll-pt-37 flex-col overflow-y-auto px-5 pt-[calc(148px+var(--safe-area-inset-top))] pb-[calc(90px+40px+var(--safe-area-inset-bottom))]">
        {children}
      </main>
    </>
  )
}
