export default function NoHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="app__main pt-7">{children}</main>
}
