import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleMinusXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 7.5a10.48 10.48 0 0 0-9.094 5.25c-1.922 3.281-1.922 7.266 0 10.5C4.781 26.531 8.203 28.5 12 28.5c3.75 0 7.172-1.969 9.047-5.25 1.922-3.234 1.922-7.219 0-10.5C19.172 9.516 15.75 7.5 12 7.5M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M7.5 17.25h9c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-9a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='b147a39691bb9ebb2b51848a99a61f83__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleMinusXlRegularIcon);
export default ForwardRef;
