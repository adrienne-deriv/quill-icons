import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 9.5c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75m-3.75 0c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75m-4.5.75A.74.74 0 0 1 1 9.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75' />
    </g>
    <defs>
      <clipPath id='9e17e3ce068abecdec57d0e5c7e4f6cb__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisCaptionRegularIcon);
export default ForwardRef;
