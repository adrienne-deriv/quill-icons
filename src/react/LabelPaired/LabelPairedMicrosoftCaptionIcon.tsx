import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMicrosoftCaptionIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.25 4.25h5.04v5.04H.25V4.25Zm5.46 0h5.04v5.04H5.71V4.25ZM.25 9.71h5.04v5.04H.25V9.71Zm5.46 0h5.04v5.04H5.71V9.71Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrosoftCaptionIcon);
export default ForwardRef;
