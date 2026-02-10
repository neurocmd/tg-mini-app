import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,

  webpack(config) {
    // Ищем правила в oneOf (где Next обрабатывает asset)
    const rules = config.module.rules.find((rule: any) =>
      Array.isArray(rule.oneOf),
    )

    if (rules) {
      rules.oneOf.forEach((rule: any) => {
        if (rule.test?.test?.('.svg')) {
          rule.exclude = /\.svg$/i
        }
      })
    }

    // Добавляем SVGR
    config.module.rules.push({
      test: /\.svg$/,
      type: 'javascript/auto',
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgProps: { 'aria-hidden': 'true' },
            prettier: false,
            svgo: true,
            svgoConfig: {
              multipass: true,
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      // customize options for plugins included in preset
                      convertPathData: { floatPrecision: 2 },
                      // or disable plugins
                      removeViewBox: false,
                    },
                  },
                },
                // enable builtin plugin not included in default preset
                'removeDimensions',
                'prefixIds',
                'removeXMLNS',
                // enable and configure builtin plugin not included in preset
                {
                  name: 'removeAttributesBySelector',
                  params: {
                    selector: 'svg',
                    attributes: ['class', 'style', 'xml:space'],
                  },
                },
                {
                  name: 'convertColors',
                  params: {
                    currentColor: true, // fill/stroke управляется Tailwind
                  },
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    })

    return config
  },
}

export default nextConfig
