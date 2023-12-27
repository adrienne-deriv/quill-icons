import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeRiskManagementIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M22.667 14.8v-.787c0-1.1-.9-2-2-2H20s-.02 0-.033.007c-.334-3.733-3.48-6.673-7.3-6.673a7.335 7.335 0 0 0-7.3 6.66h-.7c-1.1 0-2 .9-2 2V27.34c0 1.1.9 2 2 2H22c1.1 0 2-.9 2-2V16.673c0-.866-.56-1.6-1.333-1.88v.007Zm0 9.207H18a.669.669 0 0 1-.667-.667v-2.667c0-.366.3-.666.667-.666h4.667v4Zm-2-10.667c.366 0 .666.3.666.667v.666h-1.62c.127-.44.214-.886.254-1.34.013 0 .02.007.033.007h.667Zm-8-6.667c3.306 0 6 2.694 6 6 0 .694-.12 1.36-.347 2h-2.987V13.34c0-.733-.6-1.333-1.333-1.333h-2.667v-1.334h3.334c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667h-1.334v-.667c0-.366-.3-.666-.666-.666-.367 0-.667.3-.667.666v.667h-.667c-.733 0-1.333.6-1.333 1.333v1.334c0 .733.6 1.333 1.333 1.333H14v1.333H7.02a5.98 5.98 0 0 1-.347-2c0-3.306 2.694-6 6-6h-.006Zm-8 6.667h.7c.04.453.126.9.246 1.333h-.946A.677.677 0 0 1 4 14.007c0-.36.307-.667.667-.667Zm18 14c0 .367-.3.667-.667.667H4.667A.669.669 0 0 1 4 27.34V15.887c.207.073.433.12.667.12H22c.367 0 .667.3.667.666v2H18c-1.1 0-2 .9-2 2v2.667c0 1.1.9 2 2 2h4.667v2Z' />
      <path d='M20 22.673a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333ZM29.993 2.647a.584.584 0 0 0-.046-.234s-.007-.013-.014-.02a.54.54 0 0 0-.12-.173c-.013-.02-.033-.033-.053-.047a.513.513 0 0 0-.14-.093c-.02-.013-.04-.02-.067-.033A.693.693 0 0 0 29.32 2h-1.333c-.367 0-.667.3-.667.667 0 .286.18.526.433.626L23.987 7.06l-.86-.86a.664.664 0 0 0-.94 0l-1.334 1.333a.664.664 0 1 0 .94.94l.86-.86.86.86c.134.134.3.194.474.194.173 0 .34-.067.473-.194l4.24-4.24c.093.254.333.44.62.44.367 0 .667-.3.667-.666v-1.36h.006Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeRiskManagementIcon);
export default ForwardRef;
