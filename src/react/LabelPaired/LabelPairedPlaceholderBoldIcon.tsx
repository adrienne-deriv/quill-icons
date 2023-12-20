import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPlaceholderBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.75 5h.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-.5c-.354 0-.646.125-.875.375-.25.23-.375.52-.375.875v.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-.5c.02-.77.292-1.417.813-1.937.52-.521 1.166-.792 1.937-.813m-2 5c.458.042.708.292.75.75v2.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-2.5c.042-.458.292-.708.75-.75m12.5 0c.458.042.708.292.75.75v2.5c-.042.458-.292.708-.75.75-.458-.042-.708-.292-.75-.75v-2.5c.042-.458.292-.708.75-.75m0-1c-.458-.042-.708-.292-.75-.75v-.5c0-.354-.125-.646-.375-.875-.23-.25-.52-.375-.875-.375h-.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h.5c.77.02 1.417.292 1.938.813.52.52.791 1.166.812 1.937v.5c-.042.458-.292.708-.75.75m.75 6.75v.5c-.02.77-.292 1.417-.812 1.938-.521.52-1.167.791-1.938.812h-.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h.5c.354 0 .646-.125.875-.375.25-.23.375-.52.375-.875v-.5c.042-.458.292-.708.75-.75.458.042.708.292.75.75m-12.5 0v.5c0 .354.125.646.375.875.23.25.52.375.875.375h.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-.5c-.77-.02-1.417-.292-1.937-.812C.292 17.667.02 17.02 0 16.25v-.5c.042-.458.292-.708.75-.75.458.042.708.292.75.75M5.75 19c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75h2.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75zM5 5.75c.042-.458.292-.708.75-.75h2.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-2.5c-.458-.042-.708-.292-.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderBoldIcon);
export default ForwardRef;
