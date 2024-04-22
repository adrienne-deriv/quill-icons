import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyReportsIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#682322625369e6b3d32bfcf75d80222f__a)'>
      <path
        fill='#333'
        d='M13 8v7h1a1 1 0 0 0 1-1V8zM9 0l4 4v3h3v7a2 2 0 0 1-2 2H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm-.414 1H1v14h11V4.414zM6.5 11a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm3-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1z'
      />
    </g>
    <defs>
      <clipPath id='682322625369e6b3d32bfcf75d80222f__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyReportsIcon);
export default ForwardRef;
