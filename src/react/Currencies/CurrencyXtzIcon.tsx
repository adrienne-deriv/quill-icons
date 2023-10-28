import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyXtzIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='#2C7DF7'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
      />
      <path
        fill='#fff'
        d='M17.537 25c-1.284 0-2.221-.31-2.812-.928a2.865 2.865 0 0 1-.883-2 1.32 1.32 0 0 1 .155-.66c.1-.176.247-.322.422-.423.413-.207.9-.207 1.313 0 .175.1.32.246.419.422.11.203.166.43.16.661.012.276-.067.547-.224.773a1.049 1.049 0 0 1-.535.391c.211.27.51.454.844.527.374.108.76.164 1.15.166a2.57 2.57 0 0 0 1.449-.433c.444-.314.775-.763.945-1.28.214-.616.32-1.264.31-1.915a5.25 5.25 0 0 0-.339-1.991 2.453 2.453 0 0 0-.976-1.238 2.6 2.6 0 0 0-1.405-.402 2.677 2.677 0 0 0-1.219.414l-.902.453v-.453l4.058-5.444h-5.626v5.65c-.015.407.092.81.31 1.155.213.306.573.478.945.453.339-.006.665-.122.933-.328.304-.223.568-.495.782-.805a.275.275 0 0 1 .102-.134.206.206 0 0 1 .135-.051.47.47 0 0 1 .265.113.567.567 0 0 1 .143.382 2.365 2.365 0 0 1-.05.28c-.2.485-.535.9-.966 1.199-.399.27-.871.413-1.354.411-1.218 0-2.06-.24-2.53-.72a2.696 2.696 0 0 1-.698-1.968v-5.639h-2.86v-1.05h2.875V8.196l-.658-.658V7h1.91l.717.372v3.217l7.431-.023.74.742-4.557 4.579c.276-.11.565-.18.861-.208a3.74 3.74 0 0 1 1.666.476c.59.28 1.088.725 1.433 1.28.31.47.53.993.648 1.544a6.5 6.5 0 0 1 .155 1.322 5.53 5.53 0 0 1-.563 2.45 3.594 3.594 0 0 1-1.687 1.686 5.467 5.467 0 0 1-2.432.563Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyXtzIcon);
export default ForwardRef;
