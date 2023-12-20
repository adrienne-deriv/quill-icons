import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletCircleMinusRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 7.5C0 6.125 1.094 5 2.5 5h12c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-12A1.5 1.5 0 0 0 1 7.5v9c0 .844.656 1.5 1.5 1.5h8.094c.187.375.406.719.656 1H2.5A2.468 2.468 0 0 1 0 16.5zm3 0c0-.25.219-.5.5-.5h10C14.875 7 16 8.125 16 9.5v.531c-.187 0-.344-.031-.5-.031-.187 0-.344.031-.5.031V9.5c0-.812-.687-1.5-1.5-1.5h-10a.494.494 0 0 1-.5-.5m8 8c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m1 0c0 1.938 1.563 3.5 3.5 3.5 1.906 0 3.5-1.562 3.5-3.5 0-1.906-1.594-3.5-3.5-3.5-1.937 0-3.5 1.594-3.5 3.5m1 0c0-.25.219-.5.5-.5h4c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4a.494.494 0 0 1-.5-.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCircleMinusRegularIcon);
export default ForwardRef;
