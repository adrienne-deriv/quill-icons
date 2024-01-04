import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEightCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.375 7.156c-.031.907-.367 1.64-1.008 2.203.422.266.758.61 1.008 1.032.25.437.375.922.375 1.453-.016.828-.297 1.515-.844 2.062-.547.547-1.234.828-2.062.844H3.156c-.828-.016-1.515-.297-2.062-.844-.547-.547-.828-1.234-.844-2.062 0-.531.125-1.016.375-1.453a3.03 3.03 0 0 1 1.008-1.032C.993 8.797.656 8.063.625 7.156c.016-.828.297-1.515.844-2.062.547-.547 1.234-.828 2.062-.844h.938c.828.016 1.515.297 2.062.844.547.547.828 1.234.844 2.062m-2.906 2.907H3.156c-.5.015-.922.187-1.265.515-.328.344-.5.766-.516 1.266.016.5.188.922.516 1.265.343.329.765.5 1.265.516h1.688c.5-.016.922-.187 1.265-.516.329-.343.5-.765.516-1.265a1.852 1.852 0 0 0-.516-1.266 1.852 1.852 0 0 0-1.265-.515zm0-1.126c.5-.015.922-.187 1.265-.515.329-.344.5-.766.516-1.266a1.852 1.852 0 0 0-.516-1.265 1.852 1.852 0 0 0-1.265-.516H3.53c-.5.016-.922.188-1.265.516-.328.343-.5.765-.516 1.265.016.5.188.922.516 1.266.343.328.765.5 1.265.515z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEightCaptionBoldIcon);
export default ForwardRef;
