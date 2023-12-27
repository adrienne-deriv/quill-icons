import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeSignUpIcon = (
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
      <path d='M9.333 23.333c1.654 0 3-1.346 3-3 0-1.653-1.346-3-3-3-1.653 0-3 1.347-3 3 0 1.654 1.347 3 3 3Zm0-4.666A1.667 1.667 0 1 1 9.332 22a1.667 1.667 0 0 1 .001-3.334ZM15.333 20h6c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666h-6c-.366 0-.666.3-.666.666 0 .367.3.667.666.667ZM15.333 22.667H20c.367 0 .667-.3.667-.667 0-.367-.3-.667-.667-.667h-4.667c-.366 0-.666.3-.666.667 0 .367.3.667.666.667Z' />
      <path d='M22 10.667H4.667A3.335 3.335 0 0 0 1.333 14v13.333a3.335 3.335 0 0 0 3.334 3.334H22a3.334 3.334 0 0 0 3.333-3.334V14A3.335 3.335 0 0 0 22 10.667ZM4.667 12H22c1.1 0 2 .9 2 2H2.667c0-1.1.9-2 2-2ZM24 27.333c0 1.1-.9 2-2 2h-8v-2.666A2.666 2.666 0 0 0 11.333 24c-.366 0-.666.3-.666.667 0 .366.3.666.666.666.734 0 1.334.6 1.334 1.334v2.666H6v-2.666c0-.734.6-1.334 1.333-1.334.367 0 .667-.3.667-.666C8 24.3 7.7 24 7.333 24a2.666 2.666 0 0 0-2.666 2.667v2.666c-1.1 0-2-.9-2-2v-12H24v12ZM26.333 1.333a4.333 4.333 0 1 0 0 8.667 4.333 4.333 0 0 0 0-8.667Zm0 7.334c-1.653 0-3-1.347-3-3 0-1.654 1.347-3 3-3 1.654 0 3 1.346 3 3 0 1.653-1.346 3-3 3Z' />
      <path d='m26.86 4.86-.86.86-.193-.193a.664.664 0 1 0-.94.94l.666.666c.134.134.3.194.474.194.173 0 .34-.067.473-.194L27.813 5.8a.664.664 0 1 0-.94-.94h-.013Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeSignUpIcon);
export default ForwardRef;
