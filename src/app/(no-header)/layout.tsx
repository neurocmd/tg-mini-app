export default function NoHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex h-full scroll-pt-37 flex-col overflow-y-auto px-5 pt-[calc(theme(spacing.7)+var(--safe-area-inset-top))] pb-[calc(90px+40px+var(--safe-area-inset-bottom))]">
      {children}
    </main>
  )
}
