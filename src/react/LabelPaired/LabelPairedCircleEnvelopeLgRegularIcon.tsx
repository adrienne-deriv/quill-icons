import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleEnvelopeLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M18.75 15.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C12.995 7.14 11.537 6.75 10 6.75c-1.536 0-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.839 1.172 4.375 1.172 1.537 0 2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.786 1.172-4.375M0 15.5c.026-1.823.469-3.49 1.328-5C2.214 8.99 3.438 7.766 5 6.828 6.589 5.943 8.255 5.5 10 5.5s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.562-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5m6.25-3.75h7.5c.365 0 .664.117.898.352.235.234.352.533.352.898v5c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352h-7.5c-.365 0-.664-.117-.898-.352C5.117 18.664 5 18.365 5 18v-5c0-.365.117-.664.352-.898.234-.235.533-.352.898-.352m7.5 1.914V13h-7.5v.664L9.727 15.5c.078.026.169.052.273.078a.693.693 0 0 0 .313-.078zm0 1.406-2.852 1.524c-.286.13-.585.195-.898.195-.312 0-.612-.065-.898-.195L6.25 15.07V18h7.5z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeLgRegularIcon);
export default ForwardRef;