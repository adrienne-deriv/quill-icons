import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeSmRegularIcon = (
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
      <path d='M7 4.625a6.11 6.11 0 0 0-5.305 3.063c-1.12 1.914-1.12 4.238 0 6.125C2.79 15.727 4.785 16.875 7 16.875a6.04 6.04 0 0 0 5.277-3.062c1.121-1.887 1.121-4.211 0-6.126A6.1 6.1 0 0 0 7 4.626M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M4.813 7.25v.027h3.91a.42.42 0 0 1 .41.274c.082.164.027.355-.11.492l-2.16 1.832h.547c1.203 0 2.188.984 2.188 2.188 0 1.23-.957 2.214-2.188 2.214h-.984c-.739 0-1.45-.355-1.914-.957l-.055-.11a.41.41 0 0 1 .082-.6.41.41 0 0 1 .602.081l.082.082c.273.383.738.63 1.203.63h.984c.738 0 1.313-.602 1.313-1.34 0-.711-.575-1.313-1.313-1.313H5.687a.49.49 0 0 1-.437-.273.49.49 0 0 1 .137-.493l2.16-1.859H4.813a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438' />
    </g>
    <defs>
      <clipPath id='2212597338602669ca8a4ed6c9594a7b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeSmRegularIcon);
export default ForwardRef;
