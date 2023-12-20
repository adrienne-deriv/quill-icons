import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMemoCircleCheckRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10 5H2a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 6v12c0 .292.094.531.281.719A.974.974 0 0 0 2 19h7.25c.313.375.667.698 1.063.969-.105.02-.209.031-.313.031H2c-.562-.02-1.031-.219-1.406-.594S.02 18.563 0 18V6c.02-.562.219-1.031.594-1.406S1.438 4.02 2 4h8c.563.02 1.031.219 1.406.594S11.98 5.437 12 6v4.219a4.117 4.117 0 0 0-1 .375V6a.974.974 0 0 0-.281-.719A.974.974 0 0 0 10 5M2 8.5c.02-.312.188-.48.5-.5h7c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-7c-.312-.02-.48-.187-.5-.5m.5 2.5h6c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-6c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5m0 3h4c.313.02.48.188.5.5-.02.313-.187.48-.5.5h-4c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5m11 5c.625 0 1.208-.156 1.75-.469.542-.312.969-.74 1.281-1.281A3.443 3.443 0 0 0 17 15.5c0-.625-.156-1.208-.469-1.75a3.435 3.435 0 0 0-1.281-1.281A3.443 3.443 0 0 0 13.5 12c-.625 0-1.208.156-1.75.469-.542.312-.969.74-1.281 1.281A3.443 3.443 0 0 0 10 15.5c0 .625.156 1.208.469 1.75.312.542.74.969 1.281 1.281A3.443 3.443 0 0 0 13.5 19m0-8a4.43 4.43 0 0 1 2.25.594 4.51 4.51 0 0 1 1.656 1.656c.396.708.594 1.458.594 2.25s-.198 1.542-.594 2.25a4.51 4.51 0 0 1-1.656 1.656A4.43 4.43 0 0 1 13.5 20a4.43 4.43 0 0 1-2.25-.594 4.51 4.51 0 0 1-1.656-1.656A4.543 4.543 0 0 1 9 15.5c0-.792.198-1.542.594-2.25a4.51 4.51 0 0 1 1.656-1.656A4.43 4.43 0 0 1 13.5 11m1.406 3.156c.23-.208.459-.208.688 0 .208.23.208.459 0 .688l-2.25 2.25c-.23.208-.459.208-.688 0l-1.25-1.25c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0l.906.875z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckRegularIcon);
export default ForwardRef;
