import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyCandleIcon = (
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
      d='M3 16a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V3a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7v3a1 1 0 1 1-2 0v-3z'
    />
    <path
      fill='#FF444F'
      d='M18 2a1 1 0 0 1 1 1v4h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-.883.993L18 22a1 1 0 0 1-1-1v-2h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2V3a1 1 0 0 1 1-1'
    />
  </svg>
);
const ForwardRef = forwardRef(LegacyCandleIcon);
export default ForwardRef;
