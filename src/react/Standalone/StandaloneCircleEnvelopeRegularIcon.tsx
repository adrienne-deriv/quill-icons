import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleEnvelopeRegularIcon = (
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
      d='M24.75 16.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C18.995 8.14 17.537 7.75 16 7.75s-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.839 1.172 4.375 1.172 1.537 0 2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.786 1.172-4.375M6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.562-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5m6.25-3.75h7.5c.365 0 .664.117.898.352.235.234.352.533.352.898v5c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352h-7.5c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898v-5c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352m7.5 1.914V14h-7.5v.664l3.477 1.836c.078.026.169.052.273.078a.693.693 0 0 0 .313-.078zm0 1.406-2.852 1.524c-.286.13-.585.195-.898.195-.312 0-.612-.065-.898-.195L12.25 16.07V19h7.5z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleEnvelopeRegularIcon);
export default ForwardRef;
