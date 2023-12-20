import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStopLossLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.36 20.93c-.938 0-1.72-.157-2.344-.47-.664-.312-1.172-.741-1.641-1.21l1.484-1.523c.743.78 1.602 1.21 2.657 1.21.547 0 .976-.117 1.21-.351.274-.234.43-.547.43-.938a1.09 1.09 0 0 0-.234-.703c-.156-.195-.508-.351-.977-.39l-1.054-.157c-1.094-.156-1.914-.468-2.422-1.015-.508-.508-.782-1.211-.782-2.11 0-.468.079-.898.274-1.289.195-.39.43-.703.781-.976.313-.313.742-.508 1.211-.664a5.63 5.63 0 0 1 1.68-.235c.781 0 1.484.118 2.07.391.586.234 1.133.586 1.563 1.094l-1.524 1.523c-.273-.312-.547-.547-.937-.703-.352-.195-.782-.312-1.328-.312-.508 0-.899.117-1.133.273-.235.195-.39.43-.39.781 0 .352.116.586.312.781.195.157.507.274.937.313l1.055.195c1.055.157 1.875.47 2.383.977.547.508.78 1.21.78 2.11 0 .507-.077.976-.273 1.366-.156.43-.43.782-.78 1.094a3.426 3.426 0 0 1-1.29.703 5.898 5.898 0 0 1-1.719.235m5.976-.196V10.266h2.266v8.476h3.984v1.992z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossLgBoldIcon);
export default ForwardRef;
