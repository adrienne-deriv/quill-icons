import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarcodeLgBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.938 6.75c.572.052.885.365.937.938v15.625c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937V7.688c.052-.573.365-.886.938-.938m3.437 0c.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V7.375c.026-.39.234-.599.625-.625m2.813 0c.572.052.885.365.937.938v15.625c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937V7.688c.052-.573.365-.886.938-.938m4.375 0c.572.052.885.365.937.938v15.625c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937V7.688c.052-.573.365-.886.938-.938m6.562.938c.052-.573.365-.886.938-.938.572.052.885.365.937.938v15.625c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937zm-2.5-.313c.026-.39.234-.599.625-.625.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeLgBoldIcon);
export default ForwardRef;
