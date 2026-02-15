declare module '*.svg' {
  import { ComponentType, SVGProps } from 'react'

  const SVGComponent: ComponentType<SVGProps<SVGSVGElement>>

  export default SVGComponent
}

// declare module 'react' {
//   interface CSSProperties extends React.CSSProperties {
//     [key: `--${string}`]: string | number | undefined
//   }
// }
