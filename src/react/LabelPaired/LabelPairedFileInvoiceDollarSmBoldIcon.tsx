import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.438 16V8.125H7.25a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629V5.063H2q-.41.027-.437.437V16q.027.41.437.438h7q.41-.028.438-.438M.25 5.5q.027-.738.52-1.23.492-.493 1.23-.52h4.54q.71 0 1.23.52l2.46 2.46q.52.52.52 1.258V16q-.027.738-.52 1.23-.492.493-1.23.52H2q-.738-.027-1.23-.52Q.277 16.739.25 16zM5.5 9.656q.492.027.547.547v.274q.3.027.574.109.465.164.41.656-.165.465-.683.41a5 5 0 0 0-.848-.136q-.356 0-.629.136-.165.11-.137.164 0 .028.11.082.273.138.765.247l.028.027h.027q.492.11 1.012.355.246.137.465.41.19.247.218.657-.054.847-.71 1.176-.274.164-.602.218v.274q-.055.492-.547.547-.492-.056-.547-.547v-.301a7 7 0 0 1-.71-.191q-.028 0-.056-.028-.054 0-.082-.027h-.082q-.465-.192-.355-.684.191-.464.684-.383.054.028.136.055h.055q.519.191.984.219.384 0 .602-.11.165-.108.137-.19.027-.03-.137-.138a4.4 4.4 0 0 0-.766-.273H5.31a3.8 3.8 0 0 1-.957-.356 1.6 1.6 0 0 1-.493-.382q-.19-.246-.218-.657 0-.437.218-.71.22-.301.52-.438.274-.137.574-.191v-.274q.055-.52.547-.547M2.875 6.375h2.188q.41.027.437.438-.027.41-.437.437H2.875q-.41-.027-.437-.437.027-.411.437-.438m0 1.75h2.188q.41.027.437.438-.027.41-.437.437H2.875q-.41-.027-.437-.437.027-.411.437-.438' />
    </g>
    <defs>
      <clipPath id='0087fd9e79ab9b8a0ef4b3488d64c75d__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarSmBoldIcon);
export default ForwardRef;
