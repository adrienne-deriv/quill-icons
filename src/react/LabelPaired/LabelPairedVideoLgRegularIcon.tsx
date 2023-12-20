import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedVideoLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.75 9.25c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10c0 .365.117.664.352.898.234.235.533.352.898.352h10c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-10c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352zM.25 10.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h10c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-10c-.703-.026-1.29-.273-1.758-.742C.523 21.789.276 21.203.25 20.5zm20.273 11.055L16.5 19.328v-1.406l4.648 2.539c.026.026.066.039.118.039.13 0 .208-.078.234-.234v-9.532a.276.276 0 0 0-.234-.234c-.052 0-.091.013-.118.04L16.5 13.077v-1.406l4.023-2.227c.235-.13.482-.195.743-.195.416 0 .768.143 1.054.43.287.286.43.638.43 1.054v9.532c0 .416-.143.768-.43 1.054-.286.287-.638.43-1.054.43-.26 0-.508-.065-.743-.195'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoLgRegularIcon);
export default ForwardRef;
