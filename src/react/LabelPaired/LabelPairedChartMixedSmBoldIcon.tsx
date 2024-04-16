import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.754 5.8 9.16 9.739a.7.7 0 0 1-.848 0L5.196 7.004 1.012 9.766a.63.63 0 0 1-.903-.164.663.663 0 0 1 .164-.93l4.594-3.063a.66.66 0 0 1 .793.055l3.09 2.707 4.156-3.582a.68.68 0 0 1 .93.082.68.68 0 0 1-.082.93m-8.285 9.763v-4.376c0-.109-.11-.218-.219-.218a.216.216 0 0 0-.219.219v4.374c0 .137.082.22.219.22.11 0 .219-.083.219-.22M5.25 9.875c.71 0 1.313.602 1.313 1.313v4.374c0 .739-.602 1.313-1.313 1.313a1.296 1.296 0 0 1-1.312-1.312v-4.376c0-.71.574-1.312 1.312-1.312m-3.281 5.688v-1.75c0-.11-.11-.22-.219-.22a.216.216 0 0 0-.219.22v1.75c0 .136.082.218.219.218.11 0 .219-.082.219-.219M1.75 12.5c.71 0 1.313.602 1.313 1.313v1.75c0 .738-.602 1.312-1.313 1.312a1.296 1.296 0 0 1-1.312-1.312v-1.75c0-.711.574-1.313 1.312-1.313m7.219.438c0-.11-.11-.22-.219-.22a.216.216 0 0 0-.219.22v2.624c0 .137.082.22.219.22.11 0 .219-.083.219-.22zm-1.531 0c0-.711.574-1.313 1.312-1.313.71 0 1.313.602 1.313 1.313v2.624c0 .739-.602 1.313-1.313 1.313a1.296 1.296 0 0 1-1.312-1.312zm5.03 2.624v-4.374c0-.11-.109-.22-.218-.22a.216.216 0 0 0-.219.22v4.374c0 .137.082.22.219.22.11 0 .219-.083.219-.22m-.218-5.687c.71 0 1.313.602 1.313 1.313v4.374c0 .739-.602 1.313-1.313 1.313a1.296 1.296 0 0 1-1.312-1.312v-4.376c0-.71.574-1.312 1.312-1.312' />
    </g>
    <defs>
      <clipPath id='585b2ce4ccefdb99930012b32047cf63__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedSmBoldIcon);
export default ForwardRef;
