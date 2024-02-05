import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInstagramMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 8.406q1.531.031 2.531 1.063 1.032 1 1.063 2.531-.031 1.531-1.063 2.531-1 1.032-2.531 1.063-1.531-.031-2.531-1.063-1.032-1-1.063-2.531.031-1.531 1.063-2.531 1-1.032 2.531-1.063m0 5.938q1-.031 1.656-.688Q9.313 13 9.344 12q-.031-1-.688-1.656Q8 9.687 7 9.656q-1 .031-1.656.688Q4.687 11 4.656 12q.031 1 .688 1.656.656.657 1.656.688m4.594-6.094a1.02 1.02 0 0 0-.25-.594.87.87 0 0 0-.594-.218q-.375 0-.594.218a.81.81 0 0 0-.25.594q.063.78.844.844.75-.063.844-.844m2.375.875v-.031q.03.624.031 1.781v2.25q0 1.125-.031 1.75 0 1.719-1.156 2.938-1.22 1.155-2.907 1.125-.624.03-1.781.062h-2.25q-1.155-.031-1.75-.062-1.719.03-2.937-1.125-1.156-1.22-1.125-2.938Q0 14.25 0 13.125v-2.25q0-1.156.063-1.781Q.03 7.406 1.188 6.188 2.438 5.03 4.124 5.03q.595-.03 1.75-.031h2.25q1.156 0 1.781.031 1.688 0 2.906 1.157 1.157 1.218 1.157 2.937m-1.5 7q.219-.626.25-1.687.062-1.063.031-1.938v-1q.03-.876-.031-1.937-.031-1.063-.25-1.688a2.5 2.5 0 0 0-1.344-1.344q-.626-.219-1.687-.25A66 66 0 0 0 7.5 6.25h-1q-.876-.03-1.937.031-1.032.031-1.688.25a2.5 2.5 0 0 0-1.344 1.344q-.219.626-.25 1.688-.03 1.062-.031 1.937v1q0 .875.031 1.938.031 1.031.25 1.687.406.938 1.344 1.344.657.219 1.688.25 1.062.03 1.937.031h1q.875 0 1.938-.031t1.687-.25a2.5 2.5 0 0 0 1.344-1.344' />
    </g>
    <defs>
      <clipPath id='e873b28fa0e3d3f392cff696fabb0806__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInstagramMdIcon);
export default ForwardRef;
