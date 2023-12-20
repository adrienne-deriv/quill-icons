import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleUserRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.875 17.031a7.045 7.045 0 0 0 1.563-2.25A6.841 6.841 0 0 0 15 12c-.02-1.312-.344-2.49-.969-3.531a6.549 6.549 0 0 0-2.5-2.5C10.49 5.344 9.312 5.02 8 5c-1.312.02-2.49.344-3.531.969a6.55 6.55 0 0 0-2.5 2.5C1.344 9.51 1.02 10.688 1 12c0 1 .188 1.927.563 2.781a7.046 7.046 0 0 0 1.562 2.25 3.973 3.973 0 0 1 1.406-2.187C5.22 14.302 6.041 14.02 7 14h2c.958.02 1.781.302 2.469.844a3.974 3.974 0 0 1 1.406 2.187M12 17.75c-.083-.792-.406-1.437-.969-1.937C10.49 15.292 9.812 15.02 9 15H7c-.812.02-1.49.292-2.031.813-.563.5-.886 1.145-.969 1.937 1.167.813 2.5 1.23 4 1.25 1.5-.02 2.833-.437 4-1.25M8 20c-1.458-.02-2.792-.375-4-1.062C2.792 18.229 1.813 17.25 1.063 16 .354 14.73 0 13.396 0 12s.354-2.73 1.063-4C1.813 6.75 2.792 5.77 4 5.063 5.208 4.375 6.542 4.02 8 4c1.458.02 2.792.375 4 1.063C13.208 5.77 14.188 6.75 14.938 8 15.646 9.27 16 10.604 16 12s-.354 2.73-1.062 4c-.75 1.25-1.73 2.23-2.938 2.938-1.208.687-2.542 1.041-4 1.062m0-8c.563-.02 1-.27 1.313-.75.25-.5.25-1 0-1.5C9 9.27 8.563 9.02 8 9c-.562.02-1 .27-1.312.75-.25.5-.25 1 0 1.5.312.48.75.73 1.312.75m-2.5-1.5c.02-.937.438-1.656 1.25-2.156.833-.459 1.667-.459 2.5 0 .813.5 1.23 1.219 1.25 2.156-.02.938-.437 1.656-1.25 2.156-.833.459-1.667.459-2.5 0-.812-.5-1.23-1.219-1.25-2.156'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserRegularIcon);
export default ForwardRef;
