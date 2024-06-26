import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyAudIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#283991'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
    />
    <path
      fill='#fff'
      d='m24.3 8.51-.612.763.638.751-.989-.176-.356.895-.327-.896-.969.153.636-.744-.613-.745.964.17.356-.913.328.914zM10.944 24.916l1.078-1.344-1.666.302-.578-1.614-.628 1.614-1.7-.302 1.08 1.314L7.408 26.2l1.71-.27.577 1.581.629-1.58 1.744.312zM23.688 26.103l.612-.761-.944.17-.328-.914-.356.915-.963-.171.612.744-.636.745.97-.153.326.895.356-.894.989.176zM27.644 13.626l.61-.761-.943.17-.327-.914-.356.915-.964-.171.612.745-.636.744.97-.153.326.896.356-.895.989.176zM20.878 14.8l-.611.762.637.752-.988-.176-.356.894-.327-.895-.97.152.636-.744-.612-.745.964.172.355-.915.328.915zM16 .263l-6 4v-3.1a16 16 0 0 0-4 2.346v.754l-.502-.335A16.04 16.04 0 0 0 1.163 10h.232l-.315.21a16 16 0 0 0-1.078 5.525L6 11.738V16h4v-4.263l6 4V10.93L14.606 10H16V6h-1.394L16 5.07z'
    />
    <path fill='#F44336' d='m16 1.974-5.931 3.911h1.52L16 2.976z' />
    <path
      fill='#F44336'
      d='M16 6.726H9.241V1.493c-.873.408-1.703.892-2.482 1.444v3.789H2.96a16 16 0 0 0-1.47 2.522H6.76V16H9.24V9.248H16z'
    />
    <path
      fill='#F44336'
      d='m16 12.57-3.763-2.481h-1.52L16 13.572zM5.908 10.089l-5.77 3.805q.075-.57.189-1.127l4.061-2.678zM5.103 5.885h-1.5q.262-.323.543-.631z'
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyAudIcon);
export default ForwardRef;
