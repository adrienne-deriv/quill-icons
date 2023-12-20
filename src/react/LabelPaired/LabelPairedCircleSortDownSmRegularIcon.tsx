import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleSortDownSmRegularIcon = (
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
        d='M.875 10.75a6.303 6.303 0 0 0 .82 3.063 6.292 6.292 0 0 0 2.242 2.242 6.124 6.124 0 0 0 6.126 0 6.292 6.292 0 0 0 2.242-2.242c.528-.93.802-1.951.82-3.063a6.303 6.303 0 0 0-.82-3.062 6.293 6.293 0 0 0-2.242-2.243 6.124 6.124 0 0 0-6.126 0 6.292 6.292 0 0 0-2.242 2.242 6.303 6.303 0 0 0-.82 3.063m13.125 0c-.018 1.276-.328 2.443-.93 3.5-.62 1.057-1.476 1.914-2.57 2.57-1.112.62-2.279.93-3.5.93s-2.388-.31-3.5-.93c-1.094-.656-1.95-1.513-2.57-2.57-.602-1.057-.912-2.224-.93-3.5.018-1.276.328-2.443.93-3.5.62-1.057 1.476-1.914 2.57-2.57 1.112-.62 2.279-.93 3.5-.93s2.388.31 3.5.93c1.094.656 1.95 1.513 2.57 2.57.602 1.057.912 2.224.93 3.5m-7.3 4.238-2.626-2.625a.436.436 0 0 1-.11-.465c.092-.182.229-.273.411-.273h5.25c.182.018.319.11.41.273a.436.436 0 0 1-.11.465l-2.624 2.625c-.2.183-.401.183-.602 0M5.44 12.5 7 14.059 8.559 12.5zM4.074 9.137 6.7 6.512c.2-.183.401-.183.602 0l2.625 2.625c.182.2.182.4 0 .601-.2.183-.401.183-.602 0L7 7.441 4.676 9.738c-.2.183-.401.183-.602 0-.182-.2-.182-.4 0-.601'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortDownSmRegularIcon);
export default ForwardRef;
