export default function PlayLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <span className="[html:has(&)]:[--bg-color-1:theme(colors.blue.cyan)] [html:has(&)]:[--bg-color-2:theme(colors.blue)]" />
      {children}
    </>
  )
}
