import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMaxSmBoldIcon = (
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
      <path d='M7 16.438q1.56 0 2.844-.766 1.286-.738 2.078-2.078.765-1.34.765-2.844t-.765-2.844q-.794-1.34-2.078-2.078A5.45 5.45 0 0 0 7 5.062q-1.56 0-2.844.766a5.7 5.7 0 0 0-2.078 2.078 5.64 5.64 0 0 0-.765 2.844q0 1.504.765 2.844a5.7 5.7 0 0 0 2.078 2.078q1.286.765 2.844.765M7 3.75q1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93m.875 3.063a.85.85 0 0 1-.246.628.85.85 0 0 1-.629.247.85.85 0 0 1-.629-.247.85.85 0 0 1-.246-.628q0-.383.246-.63A.85.85 0 0 1 7 5.939q.383 0 .629.246a.85.85 0 0 1 .246.628M7 14.906q-.656-.027-1.094-.437-.41-.437-.437-1.094.027-.656.437-1.094.438-.41 1.094-.437.438 0 .766.219l3.007-2.079q.547-.3.93.192.3.52-.164.902l-3.035 2.05q.027.138.027.247-.027.656-.437 1.094-.437.41-1.094.437m3.5-6.781a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629a.85.85 0 0 1 .629-.246q.383 0 .629.246a.85.85 0 0 1 .246.629m-7.437 1.75q.382 0 .628.246a.85.85 0 0 1 .247.629.85.85 0 0 1-.247.629.85.85 0 0 1-.628.246.85.85 0 0 1-.63-.246.85.85 0 0 1-.245-.629q0-.383.246-.629a.85.85 0 0 1 .628-.246m2.187-1.75a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629q0-.383.246-.629a.85.85 0 0 1 .629-.246q.383 0 .629.246a.85.85 0 0 1 .246.629' />
    </g>
    <defs>
      <clipPath id='1180f561c0fc5069957b1b0566277e6a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMaxSmBoldIcon);
export default ForwardRef;
