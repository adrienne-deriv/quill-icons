import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyRightIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 18 7'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#e6c7c2988402a8fd2b44772bbe7c19b4__a)'>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M5.959 4A3 3 0 0 1 .04 4H0V3h.041A3 3 0 0 1 5.96 3H18v1z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='e6c7c2988402a8fd2b44772bbe7c19b4__a'>
        <path fill='#fff' d='M0 0h18v7H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyRightIcon);
export default ForwardRef;
