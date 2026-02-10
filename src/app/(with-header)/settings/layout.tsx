export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <span className="[html:has(&)]:[--bg-color-1:theme(colors.red.bright)] [html:has(&)]:[--bg-color-2:theme(colors.red)]" />
      {children}
    </>
  )
}
