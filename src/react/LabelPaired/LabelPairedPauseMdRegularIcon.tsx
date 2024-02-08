import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 7q-.469.031-.5.5v9q.031.47.5.5H3q.47-.03.5-.5v-9Q3.47 7.031 3 7zM0 7.5q.03-.625.438-1.062A1.63 1.63 0 0 1 1.5 6H3q.625.03 1.063.438.405.436.437 1.062v9a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 3 18H1.5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 0 16.5zM7 7q-.469.031-.5.5v9q.031.47.5.5h1.5q.47-.03.5-.5v-9q-.03-.469-.5-.5zm-1.5.5q.03-.625.438-1.062A1.63 1.63 0 0 1 7 6h1.5q.624.03 1.063.438.405.436.437 1.062v9a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 8.5 18H7a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 5.5 16.5z' />
    </g>
    <defs>
      <clipPath id='81906881d35a40b44342c5bef7deeec5__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseMdRegularIcon);
export default ForwardRef;
