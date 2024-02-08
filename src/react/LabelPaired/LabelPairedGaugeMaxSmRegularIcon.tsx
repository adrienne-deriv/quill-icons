import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMaxSmRegularIcon = (
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
      <path d='M7 16.875a6.3 6.3 0 0 0 3.063-.82 6.3 6.3 0 0 0 2.242-2.242 6.12 6.12 0 0 0 0-6.126 6.3 6.3 0 0 0-2.242-2.242A6.3 6.3 0 0 0 7 4.625a6.3 6.3 0 0 0-3.062.82 6.3 6.3 0 0 0-2.243 2.242 6.12 6.12 0 0 0 0 6.126 6.3 6.3 0 0 0 2.242 2.242q1.395.792 3.063.82M7 3.75q1.914.027 3.5.93 1.586.93 2.57 2.57.93 1.668.93 3.5t-.93 3.5q-.984 1.64-2.57 2.57-1.586.903-3.5.93-1.914-.027-3.5-.93-1.586-.93-2.57-2.57Q0 12.582 0 10.75t.93-3.5q.984-1.64 2.57-2.57 1.586-.903 3.5-.93m.656 2.625q-.054.602-.656.656-.602-.054-.656-.656.054-.602.656-.656.602.054.656.656m-1.531 7q0 .383.246.629A.85.85 0 0 0 7 14.25a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629.85.85 0 0 0-.246-.629A.85.85 0 0 0 7 12.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629m-.875 0q.027-.738.52-1.23.492-.493 1.23-.52.738.027 1.23.492l2.926-1.75q.356-.165.602.164.165.356-.164.602l-2.926 1.75q.082.246.082.492-.027.738-.52 1.23-.492.493-1.23.52-.738-.027-1.23-.52-.493-.492-.52-1.23m5.469-5.687q-.055.601-.656.656-.602-.055-.657-.656.055-.602.656-.657.602.055.657.657m-8.094 2.406q.602.054.656.656-.054.602-.656.656-.602-.054-.656-.656.054-.602.656-.656m1.969-2.406q-.055.601-.657.656-.601-.055-.656-.656.055-.602.656-.657.602.055.657.657' />
    </g>
    <defs>
      <clipPath id='283dc043fa81164a2b830c0ded7c651e__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMaxSmRegularIcon);
export default ForwardRef;
