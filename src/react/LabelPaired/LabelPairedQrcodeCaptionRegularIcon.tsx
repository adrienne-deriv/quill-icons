import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeCaptionRegularIcon = (
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
      <path d='M3.625 5h-2.25q-.352.023-.375.375v2.25q.023.352.375.375h2.25q.352-.023.375-.375v-2.25Q3.977 5.023 3.625 5m-2.25-.75h2.25q.469.024.797.328.304.328.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-2.25q.024-.468.328-.797.329-.304.797-.328M3.625 11h-2.25q-.352.023-.375.375v2.25q.023.352.375.375h2.25q.352-.023.375-.375v-2.25q-.023-.352-.375-.375m-2.25-.75h2.25q.469.024.797.328.304.329.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797v-2.25q.024-.468.328-.797.329-.304.797-.328m6-5.25q-.352.023-.375.375v2.25q.023.352.375.375h2.25q.352-.023.375-.375v-2.25Q9.977 5.023 9.625 5zm-1.125.375q.024-.468.328-.797.328-.304.797-.328h2.25q.469.024.797.328.304.328.328.797v2.25a1.22 1.22 0 0 1-.328.797 1.22 1.22 0 0 1-.797.328h-2.25a1.22 1.22 0 0 1-.797-.328 1.22 1.22 0 0 1-.328-.797zm0 5.25q.023-.352.375-.375h1.5q.352.023.375.375v1.594H10v-1.594q.023-.352.375-.375.352.023.375.375v1.969q-.023.352-.375.375h-2.25q-.352-.023-.375-.375V11H7v3.563q-.023.351-.375.374-.352-.023-.375-.374zM2.313 5.938h.374q.352.022.376.375v.375q-.024.351-.376.375h-.374q-.352-.024-.376-.375v-.375q.024-.353.375-.375m-.376 6.375q.024-.352.375-.376h.376q.351.024.374.376v.374q-.023.352-.374.376h-.376q-.351-.024-.374-.376zm6.376-6.376h.374q.352.024.376.375v.375q-.024.353-.376.375h-.374q-.352-.022-.376-.375v-.375q.024-.351.375-.375M7.75 14q.023-.352.375-.375H8.5q.352.023.375.375v.375q-.023.352-.375.375h-.375q-.352-.023-.375-.375zm2.25-.375h.375q.352.023.375.375v.375q-.023.352-.375.375H10q-.352-.023-.375-.375V14q.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='544101c3ba19a07daf0d7855a908d867__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeCaptionRegularIcon);
export default ForwardRef;
