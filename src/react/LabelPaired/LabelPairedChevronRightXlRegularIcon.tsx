import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronRightXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M14.016 17.484c.312.344.312.688 0 1.032l-9 9c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032L12.422 18 3.984 9.516c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l9 9Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightXlRegularIcon);
export default ForwardRef;
