import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyContinuousIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#85ACB0'
      d='m11.646 13.225 6.08 1.736a1 1 0 0 0 1.239-.698l3-11a1 1 0 0 0-1.93-.526L17.302 12.76l-6.027-1.721a1 1 0 0 0-1.224.645L7.672 18.82l-3.858-5.402a1 1 0 1 0-1.628 1.162l5 7a1 1 0 0 0 1.763-.265z'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyContinuousIcon);
export default ForwardRef;
