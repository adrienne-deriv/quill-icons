import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleCaretDownRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M16 25.25c1.588-.026 3.047-.417 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.781-1.38 1.172-2.838 1.172-4.375s-.39-2.995-1.172-4.375a8.989 8.989 0 0 0-3.203-3.203C19.047 8.167 17.589 7.776 16 7.75c-1.588.026-3.047.417-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203C7.64 13.505 7.25 14.964 7.25 16.5c0 1.537.39 2.995 1.172 4.375a8.988 8.988 0 0 0 3.203 3.203c1.328.755 2.787 1.146 4.375 1.172M16 6.5c1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C6.443 19.912 6 18.245 6 16.5s.443-3.411 1.328-5C8.266 9.938 9.49 8.714 11 7.828c1.51-.86 3.177-1.302 5-1.328m0 13.75c-.39 0-.716-.143-.977-.43l-3.75-4.023a1.04 1.04 0 0 1-.273-.703c0-.313.104-.573.313-.781a1.06 1.06 0 0 1 .78-.313h7.852c.287 0 .534.104.742.313.209.208.313.468.313.78 0 .261-.091.495-.273.704l-3.75 4.023c-.26.287-.586.43-.977.43m.078-1.29 3.438-3.71h-7.032l3.438 3.71c.026.027.052.04.078.04.026 0 .052-.013.078-.04'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleCaretDownRegularIcon);
export default ForwardRef;
