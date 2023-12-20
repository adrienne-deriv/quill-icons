import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMemoCircleCheckSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.875 4.625h-7a.852.852 0 0 0-.629.246A.852.852 0 0 0 1 5.5V16c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h6.344c.273.328.583.61.93.848a1.393 1.393 0 0 1-.274.027h-7c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h7c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v3.691c-.31.073-.602.183-.875.329V5.5a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246m-7 3.063c.018-.274.164-.42.438-.438h6.124c.274.018.42.164.438.438-.018.273-.164.419-.437.437H2.311c-.273-.018-.419-.164-.437-.437m.438 2.187h5.25c.273.018.419.164.437.438-.018.273-.164.419-.437.437h-5.25c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438m0 2.625h3.5c.273.018.419.164.437.438-.018.273-.164.419-.437.437h-3.5c-.274-.018-.42-.164-.438-.437.018-.274.164-.42.438-.438m9.625 4.375c.546 0 1.057-.137 1.53-.41a3.008 3.008 0 0 0 1.122-1.121c.273-.474.41-.985.41-1.531 0-.547-.137-1.058-.41-1.532a3.008 3.008 0 0 0-1.121-1.12 3.013 3.013 0 0 0-1.531-.411c-.547 0-1.058.137-1.532.41a3.008 3.008 0 0 0-1.12 1.121c-.274.474-.411.985-.411 1.531 0 .547.137 1.058.41 1.532.274.474.647.847 1.121 1.12.474.274.985.411 1.531.411m0-7c.71 0 1.367.173 1.968.52.602.346 1.085.829 1.45 1.449.346.62.519 1.276.519 1.969 0 .692-.173 1.348-.52 1.968a3.947 3.947 0 0 1-1.449 1.45 3.877 3.877 0 0 1-1.969.519c-.71 0-1.367-.173-1.968-.52a3.947 3.947 0 0 1-1.45-1.449A3.975 3.975 0 0 1 8 13.812c0-.692.173-1.348.52-1.968a3.947 3.947 0 0 1 1.449-1.45 3.878 3.878 0 0 1 1.969-.519m1.23 2.762c.2-.183.401-.183.602 0 .182.2.182.4 0 .601l-1.97 1.969c-.2.182-.4.182-.6 0l-1.094-1.094c-.183-.2-.183-.4 0-.601.2-.183.4-.183.601 0l.793.765z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckSmRegularIcon);
export default ForwardRef;
