export default function Bg() {
  return (
    // <svg
    //   viewBox="0 0 390 671"
    //   fill="none"
    //   className="absolute top-0 left-0 -z-1 h-dvh w-full"
    //   preserveAspectRatio="none"
    //   aria-hidden
    // >
    //   <circle
    //     cx="195.5"
    //     cy="0.5"
    //     r="220.5"
    //     fill="var(--bg-color-1, currentColor)"
    //     filter="url(#filter0_f_101_418)"
    //   ></circle>

    //   <ellipse
    //     cx="192.5"
    //     cy="59.5"
    //     fill="var(--bg-color-2, currentColor)"
    //     rx="65.5"
    //     ry="208.5"
    //     filter="url(#filter1_f_101_418)"
    //   ></ellipse>

    //   <ellipse
    //     cx="192.5"
    //     cy="14"
    //     fill="var(--bg-color-2, currentColor)"
    //     rx="66"
    //     ry="208.5"
    //     transform="rotate(-90 192.5 14)"
    //     filter="url(#filter2_f_101_418)"
    //   ></ellipse>

    //   <defs>
    //     <filter
    //       id="filter0_f_101_418"
    //       width="1341"
    //       height="1341"
    //       x="-475"
    //       y="-670"
    //       colorInterpolationFilters="sRGB"
    //       filterUnits="userSpaceOnUse"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
    //       <feBlend
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       ></feBlend>
    //       <feGaussianBlur
    //         result="effect1_foregroundBlur_101_418"
    //         stdDeviation="225"
    //       ></feGaussianBlur>
    //     </filter>
    //     <filter
    //       id="filter1_f_101_418"
    //       width="431"
    //       height="717"
    //       x="-23"
    //       y="-299"
    //       colorInterpolationFilters="sRGB"
    //       filterUnits="userSpaceOnUse"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
    //       <feBlend
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       ></feBlend>
    //       <feGaussianBlur
    //         result="effect1_foregroundBlur_101_418"
    //         stdDeviation="75"
    //       ></feGaussianBlur>
    //     </filter>
    //     <filter
    //       id="filter2_f_101_418"
    //       width="717"
    //       height="432"
    //       x="-166"
    //       y="-202"
    //       colorInterpolationFilters="sRGB"
    //       filterUnits="userSpaceOnUse"
    //     >
    //       <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
    //       <feBlend
    //         in="SourceGraphic"
    //         in2="BackgroundImageFix"
    //         result="shape"
    //       ></feBlend>
    //       <feGaussianBlur
    //         result="effect1_foregroundBlur_101_418"
    //         stdDeviation="75"
    //       ></feGaussianBlur>
    //     </filter>
    //   </defs>
    // </svg>

    <svg
      viewBox="0 0 390 844"
      fill="none"
      className="absolute top-0 left-0 -z-1 h-full w-full mask-[linear-gradient(to_top,transparent_20%,black_30%)]"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <circle
        cx="195.5"
        cy=".5"
        r="220.5"
        fill="var(--bg-color-1, currentColor)"
        filter="url(#filter0_f_1_258)"
        // className="transition duration-150 ease-out"
      />

      <ellipse
        cx="192.5"
        cy="59.5"
        rx="65.5"
        ry="208.5"
        fill="var(--bg-color-2, currentColor)"
        filter="url(#filter1_f_1_258)"
        // className="transition duration-150 ease-out"
      />

      <ellipse
        cx="192.5"
        cy="14"
        rx="66"
        ry="208.5"
        transform="rotate(-90 192.5 14)"
        fill="var(--bg-color-2, currentColor)"
        filter="url(#filter2_f_1_258)"
        // className="transition duration-150 ease-out"
      />

      <defs>
        <filter
          id="filter0_f_1_258"
          x="-475"
          y="-670"
          width="1341"
          height="1341"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="225"
            result="effect1_foregroundBlur_1_258"
          />
        </filter>
        <filter
          id="filter1_f_1_258"
          x="-23"
          y="-299"
          width="431"
          height="717"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_1_258"
          />
        </filter>
        <filter
          id="filter2_f_1_258"
          x="-166"
          y="-202"
          width="717"
          height="432"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_1_258"
          />
        </filter>
      </defs>
    </svg>
  )
}
