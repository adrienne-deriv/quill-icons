import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksMcdonaldsIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#c2bb039610e628a2dc222ac18d6d4da5__a)'>
      <path
        fill='#E51300'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#FEC200'
        d='M20.375 8.25c1.725 0 3.125 7.275 3.125 16.25H26C26 14.833 23.5 7 20.375 7 18.608 7 17.042 9.358 16 13.033 14.967 9.358 13.392 7 11.625 7 8.5 7 6 14.833 6 24.5h2.5c0-8.975 1.4-16.25 3.125-16.25s3.125 6.717 3.125 15h2.5c0-8.283 1.4-15 3.125-15'
      />
    </g>
    <defs>
      <clipPath id='c2bb039610e628a2dc222ac18d6d4da5__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksMcdonaldsIcon);
export default ForwardRef;
