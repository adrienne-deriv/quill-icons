import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.688 5.75c.343.031.53.219.562.563v5.625c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562V7.672l-5.414 5.414c-.266.219-.531.219-.797 0-.219-.266-.219-.531 0-.797l5.414-5.414H2.063c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightCaptionBoldIcon);
export default ForwardRef;
