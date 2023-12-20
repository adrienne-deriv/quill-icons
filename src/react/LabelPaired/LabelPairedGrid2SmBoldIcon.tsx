import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGrid2SmBoldIcon = (
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
        d='M2.188 5.938v2.625h2.625V5.937zm-1.313 0c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383h2.625c.364.018.674.146.93.383.236.255.364.565.382.93v2.625a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.382H2.188a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.382-.93zm1.313 7v2.624h2.625v-2.624zm-1.313 0c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383h2.625c.364.018.674.146.93.383.236.255.364.565.382.93v2.624a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.383H2.188a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.382-.93zm10.938-7H9.187v2.625h2.626zM9.187 4.625h2.626c.364.018.674.146.93.383.236.255.364.565.382.93v2.625a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.382H9.189a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.383-.93V5.938c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383m0 8.313v2.624h2.626v-2.624zm-1.312 0c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383h2.624c.365.018.675.146.93.383.237.255.365.565.383.93v2.624a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.383H9.189a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.383-.93z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2SmBoldIcon);
export default ForwardRef;
