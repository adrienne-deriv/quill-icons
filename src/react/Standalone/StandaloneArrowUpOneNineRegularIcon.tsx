import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpOneNineRegularIcon = (
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
      d='M22.25 8.375V14h1.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-3.75c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625H21V9.234l-1.055.352c-.364.078-.625-.052-.78-.39-.08-.365.051-.626.39-.782l1.875-.625c.208-.078.39-.052.547.078.182.13.273.3.273.508m-10.82-.43 3.75 3.75c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-2.695-2.657v14.727c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V9.898L7.68 12.555c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l3.75-3.75c.287-.26.573-.26.86 0m10.039 13.868c.755-.026 1.34-.365 1.758-1.016.364-.677.364-1.354 0-2.031-.417-.651-1.003-.99-1.758-1.016-.756.026-1.341.365-1.758 1.016-.365.677-.365 1.354 0 2.03.417.652 1.003.99 1.758 1.017m-3.282-2.032c.026-.937.352-1.705.977-2.304.599-.625 1.367-.951 2.305-.977.937.026 1.705.352 2.304.977.625.599.951 1.367.977 2.304v.157c0 .859-.273 1.614-.82 2.265l-2.461 2.852c-.26.26-.547.273-.86.039-.286-.26-.312-.547-.078-.86l.977-1.172h-.04c-.937-.026-1.705-.351-2.304-.976-.625-.599-.95-1.367-.977-2.305'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpOneNineRegularIcon);
export default ForwardRef;
