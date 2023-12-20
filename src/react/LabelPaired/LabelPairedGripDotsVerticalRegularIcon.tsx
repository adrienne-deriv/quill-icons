import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGripDotsVerticalRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 7c-.02-.312-.187-.48-.5-.5-.312.02-.48.188-.5.5.02.313.188.48.5.5.313-.02.48-.187.5-.5M0 7c.02-.562.27-1 .75-1.312.5-.25 1-.25 1.5 0C2.73 6 2.98 6.438 3 7c-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0C.27 8 .02 7.563 0 7m2 5c-.02-.312-.187-.48-.5-.5-.312.02-.48.188-.5.5.02.313.188.48.5.5.313-.02.48-.187.5-.5m-2 0c.02-.562.27-1 .75-1.312.5-.25 1-.25 1.5 0 .48.312.73.75.75 1.312-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0C.27 13 .02 12.563 0 12m1.5 5.5c.313-.02.48-.187.5-.5-.02-.312-.187-.48-.5-.5-.312.02-.48.188-.5.5.02.313.188.48.5.5m0-2c.563.02 1 .27 1.313.75.25.5.25 1 0 1.5-.313.48-.75.73-1.313.75-.562-.02-1-.27-1.312-.75-.25-.5-.25-1 0-1.5.312-.48.75-.73 1.312-.75M7 7c-.02-.312-.187-.48-.5-.5-.312.02-.48.188-.5.5.02.313.188.48.5.5.313-.02.48-.187.5-.5M5 7c.02-.562.27-1 .75-1.312.5-.25 1-.25 1.5 0C7.73 6 7.98 6.438 8 7c-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0C5.27 8 5.02 7.563 5 7m1.5 5.5c.313-.02.48-.187.5-.5-.02-.312-.187-.48-.5-.5-.312.02-.48.188-.5.5.02.313.188.48.5.5m0-2c.563.02 1 .27 1.313.75.25.5.25 1 0 1.5-.313.48-.75.73-1.313.75-.562-.02-1-.27-1.312-.75-.25-.5-.25-1 0-1.5.312-.48.75-.73 1.312-.75M7 17c-.02-.312-.187-.48-.5-.5-.312.02-.48.188-.5.5.02.313.188.48.5.5.313-.02.48-.187.5-.5m-2 0c.02-.562.27-1 .75-1.312.5-.25 1-.25 1.5 0 .48.312.73.75.75 1.312-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0C5.27 18 5.02 17.563 5 17'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalRegularIcon);
export default ForwardRef;
