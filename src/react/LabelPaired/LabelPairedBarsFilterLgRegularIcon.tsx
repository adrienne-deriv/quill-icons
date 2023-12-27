import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarsFilterLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.25 8.625c.026-.39.234-.599.625-.625h16.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H.875c-.39-.026-.599-.234-.625-.625Zm2.5 6.25c.026-.39.234-.599.625-.625h11.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H3.375c-.39-.026-.599-.234-.625-.625Zm8.75 6.25c-.026.39-.234.599-.625.625h-3.75c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h3.75c.39.026.599.234.625.625Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterLgRegularIcon);
export default ForwardRef;
