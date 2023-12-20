import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCloneLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.5 24.25h8.75c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-2.5h1.25V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.5c-.703-.026-1.29-.273-1.758-.742C.273 24.289.026 23.703 0 23v-8.75c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742H5V13H2.5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898V23c0 .365.117.664.352.898.234.235.533.352.898.352M8.75 18h8.75c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V8c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352H8.75c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v8.75c0 .365.117.664.352.898.234.235.533.352.898.352m-2.5-1.25V8c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h8.75c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v8.75c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H8.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneLgRegularIcon);
export default ForwardRef;
