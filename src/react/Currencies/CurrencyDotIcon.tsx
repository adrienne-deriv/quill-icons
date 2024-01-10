import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyDotIcon = (
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
    <g clipPath='url(#f8a2ac7685ecace0d58cdab3ed451f3f__a)'>
      <path
        fill='#E6007A'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M20.327 6.52c0 1.39-1.937 2.517-4.327 2.517-2.39 0-4.328-1.127-4.328-2.517S13.61 4.003 16 4.003c2.39 0 4.327 1.127 4.327 2.517M20.327 25.485C20.327 26.875 18.39 28 16 28c-2.39 0-4.328-1.126-4.328-2.517 0-1.39 1.938-2.516 4.328-2.516 2.39 0 4.327 1.127 4.327 2.517M9.97 12.52c1.194-2.069 1.187-4.31-.018-5.006-1.205-.696-3.15.418-4.345 2.488-1.195 2.07-1.187 4.312.017 5.007 1.205.696 3.15-.418 4.345-2.488M26.375 16.995c1.204.695 1.211 2.937.016 5.006-1.195 2.07-3.14 3.185-4.343 2.49-1.204-.695-1.211-2.937-.016-5.006 1.195-2.07 3.14-3.185 4.343-2.49M9.952 24.49c1.205-.695 1.213-2.936.018-5.006-1.195-2.07-3.14-3.184-4.345-2.489-1.205.696-1.213 2.938-.017 5.007 1.195 2.07 3.14 3.184 4.344 2.489M26.392 10.003c1.195 2.07 1.188 4.311-.016 5.006-1.204.695-3.148-.42-4.343-2.489-1.195-2.07-1.188-4.311.016-5.006 1.204-.695 3.148.42 4.343 2.49'
      />
    </g>
    <defs>
      <clipPath id='f8a2ac7685ecace0d58cdab3ed451f3f__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyDotIcon);
export default ForwardRef;
