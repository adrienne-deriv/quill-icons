import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleStarSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7 5.063c-1.04 0-1.987.255-2.844.765a5.68 5.68 0 0 0-2.078 2.078 5.643 5.643 0 0 0-.765 2.844c0 1.003.255 1.95.765 2.844a5.68 5.68 0 0 0 2.078 2.078c.857.51 1.805.765 2.844.765 1.04 0 1.987-.255 2.844-.765.857-.492 1.55-1.185 2.078-2.078.51-.893.765-1.841.765-2.844s-.255-1.95-.765-2.844c-.529-.893-1.222-1.586-2.078-2.078A5.452 5.452 0 0 0 7 5.062M7 17.75c-1.276-.018-2.443-.328-3.5-.93-1.057-.62-1.914-1.476-2.57-2.57-.62-1.112-.93-2.279-.93-3.5s.31-2.388.93-3.5C1.586 6.156 2.443 5.3 3.5 4.68c1.057-.602 2.224-.912 3.5-.93 1.276.018 2.443.328 3.5.93 1.057.62 1.914 1.476 2.57 2.57.62 1.112.93 2.279.93 3.5s-.31 2.388-.93 3.5c-.656 1.094-1.513 1.95-2.57 2.57-1.057.602-2.224.912-3.5.93M7 7.059c.182 0 .31.082.383.246l.875 1.722 1.914.274a.425.425 0 0 1 .328.3.436.436 0 0 1-.11.465l-1.367 1.34.329 1.914c.018.164-.046.301-.192.41-.146.11-.292.128-.437.055L7 12.883l-1.695.875a.397.397 0 0 1-.465-.027c-.146-.11-.21-.247-.192-.41l.329-1.915-1.368-1.34a.436.436 0 0 1-.109-.464.435.435 0 0 1 .355-.301l1.887-.274.875-1.722A.387.387 0 0 1 7 7.059'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarSmBoldIcon);
export default ForwardRef;
