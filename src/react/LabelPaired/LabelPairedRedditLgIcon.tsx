import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRedditLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 15.5c0-5.508 4.453-10 10-10 5.508 0 10 4.492 10 10 0 5.547-4.492 10-10 10H1.445c-.547 0-.82-.625-.43-1.016L2.93 22.57C1.094 20.773 0 18.273 0 15.5m13.633-3.984c.937 0 1.68-.743 1.68-1.68 0-.899-.743-1.64-1.68-1.64-.781 0-1.485.546-1.64 1.327-1.329.118-2.384 1.29-2.384 2.657-1.484.078-2.812.508-3.867 1.133a2.55 2.55 0 0 0-1.445-.47c-1.29 0-2.305 1.055-2.305 2.345 0 .937.547 1.718 1.328 2.109.078 2.695 3.047 4.883 6.68 4.883s6.563-2.188 6.64-4.883c.782-.39 1.329-1.211 1.329-2.11 0-1.289-1.016-2.343-2.305-2.343-.547 0-1.055.156-1.445.469-1.055-.665-2.422-1.055-3.906-1.133 0-.977.742-1.836 1.718-1.953.156.742.82 1.289 1.602 1.289m-6.719 3.632c.625 0 1.133.704 1.094 1.563-.04.82-.508 1.133-1.172 1.133s-1.25-.352-1.211-1.172c.04-.86.625-1.524 1.29-1.524m7.422 1.524c.039.82-.547 1.172-1.211 1.172-.625 0-1.133-.313-1.172-1.133-.039-.86.469-1.563 1.133-1.563.625 0 1.21.665 1.25 1.524m-1.875 2.187c-.43.977-1.367 1.641-2.461 1.641-1.133 0-2.07-.664-2.46-1.64-.08-.118 0-.235.155-.235A21 21 0 0 1 10 18.508c.781 0 1.563.039 2.305.117.117 0 .195.117.156.234' />
    </g>
    <defs>
      <clipPath id='09cb590f702983f37abf30cfcc415f04__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRedditLgIcon);
export default ForwardRef;
