import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketStocksIntelIcon = (
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
        fill='#54BFF6'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path fill='#2868AF' d='M5.89 11.142H4v1.894h1.89z' />
      <path
        fill='#fff'
        d='M5.842 21.012V14.19H4.054v6.823zm11.886.068v-1.672c-.263 0-.484-.014-.646-.04a.73.73 0 0 1-.423-.19.759.759 0 0 1-.188-.404 4.374 4.374 0 0 1-.04-.66v-2.388h1.297V14.19H16.43v-2.663h-1.795v6.6c0 .56.047 1.032.141 1.41.095.37.256.674.478.903.222.23.517.391.874.492.363.101.82.149 1.364.149zM28 21.012V11h-1.795v10.012zm-15.092-6.155c-.498-.54-1.197-.81-2.085-.81-.43 0-.82.088-1.176.263-.35.176-.652.418-.887.729l-.101.128v-.978H6.89v6.823h1.781v-3.634.25-.122c.02-.64.175-1.112.47-1.416.317-.323.7-.485 1.137-.485.518 0 .914.162 1.176.472.256.31.39.748.39 1.308v3.62h1.809v-3.87c.006-.97-.249-1.739-.746-2.278m12.37 2.73c0-.492-.088-.95-.256-1.382a3.702 3.702 0 0 0-.72-1.126 3.277 3.277 0 0 0-1.109-.755 3.629 3.629 0 0 0-1.425-.27c-.49 0-.955.095-1.385.277-.43.189-.807.438-1.122.755a3.517 3.517 0 0 0-.753 1.126 3.439 3.439 0 0 0-.276 1.389c0 .492.087.957.262 1.389.175.431.424.809.733 1.126.31.316.692.573 1.136.755.444.189.934.283 1.459.283 1.52 0 2.46-.695 3.025-1.342l-1.29-.984c-.27.323-.915.762-1.722.762-.504 0-.92-.115-1.237-.35a1.732 1.732 0 0 1-.645-.952l-.02-.06h5.344zm-5.332-.627c0-.499.572-1.369 1.802-1.375 1.23 0 1.808.87 1.808 1.368z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksIntelIcon);
export default ForwardRef;