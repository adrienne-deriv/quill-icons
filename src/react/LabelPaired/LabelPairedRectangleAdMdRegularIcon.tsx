import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedRectangleAdMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M2 6a.973.973 0 0 0-.719.281A.973.973 0 0 0 1 7v10c0 .292.094.531.281.719A.974.974 0 0 0 2 18h14a.974.974 0 0 0 .719-.281A.974.974 0 0 0 17 17V7a.974.974 0 0 0-.281-.719A.974.974 0 0 0 16 6zM0 7c.02-.562.219-1.031.594-1.406S1.438 5.02 2 5h14c.563.02 1.031.219 1.406.594S17.98 6.437 18 7v10c-.02.563-.219 1.031-.594 1.406S16.563 18.98 16 19H2c-.562-.02-1.031-.219-1.406-.594S.02 17.563 0 17zm6.719 2.281 2.25 5c.083.292 0 .521-.25.688-.292.083-.521 0-.688-.25L7.72 14H4.78l-.312.719c-.167.25-.396.333-.688.25-.27-.167-.354-.396-.25-.688l2.25-5A.505.505 0 0 1 6.25 9c.208 0 .365.094.469.281M6.25 10.72 5.219 13H7.28zm5.5.781c-.48.02-.844.23-1.094.625a1.328 1.328 0 0 0 0 1.25c.25.396.615.604 1.094.625.48-.02.844-.23 1.094-.625a1.328 1.328 0 0 0 0-1.25c-.25-.396-.615-.604-1.094-.625m1.25-.625V9.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5v5c-.02.313-.187.48-.5.5a.538.538 0 0 1-.5-.375c-.354.25-.77.375-1.25.375-.646-.02-1.177-.24-1.594-.656-.416-.417-.635-.948-.656-1.594.02-.646.24-1.177.656-1.594.417-.416.948-.635 1.594-.656.48 0 .896.125 1.25.375' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdMdRegularIcon);
export default ForwardRef;