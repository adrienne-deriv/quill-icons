import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChevronLeftRegularIcon = (
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
    <path d='M10.57 16.93c-.26-.287-.26-.573 0-.86l7.5-7.5c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-7.032 7.07 7.032 7.07c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-7.5-7.5Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronLeftRegularIcon);
export default ForwardRef;
