import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCirclePlusSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 7.031a2.41 2.41 0 0 1 2.406-2.406H12.72c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H2.656A1.08 1.08 0 0 0 1.562 7.03v7.438c0 .629.465 1.094 1.094 1.094h6.672c.164.492.438.93.766 1.312H2.656A2.39 2.39 0 0 1 .25 14.469zm2.625.875c0-.355.273-.656.656-.656h8.313c1.094 0 2.023.766 2.297 1.777-.11 0-.22-.027-.328-.027-.356 0-.711.055-1.04.11-.191-.301-.546-.547-.93-.547H3.532a.63.63 0 0 1-.656-.657m7 5.907c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937 3.92 3.92 0 0 1-3.938-3.937m1.75 0c0 .246.191.437.438.437h1.312v1.313c0 .246.191.437.438.437a.45.45 0 0 0 .437-.437V14.25h1.313a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438H14.25v-1.312a.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438v1.312h-1.312a.45.45 0 0 0-.438.438' />
    </g>
    <defs>
      <clipPath id='6392707e0a59ddd5b3b7deadc2a05bb3__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCirclePlusSmBoldIcon);
export default ForwardRef;
