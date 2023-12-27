import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeStudentIcon = (
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
      <path d='M28 3.333H4c-1.1 0-2 .9-2 2s.9 2 2 2h.667v8.12a1.994 1.994 0 0 0-1.334 1.88v3.334c0 1.1.9 2 2 2s2-.9 2-2v-3.334c0-.866-.56-1.6-1.333-1.88v-8.12h2.667v2c0 .587.26 1.114.666 1.48v5.854c0 3.306 2.694 6 6 6h2c3.307 0 6-2.694 6-6v-5.854A1.99 1.99 0 0 0 24 9.333v-2h4c1.1 0 2-.9 2-2s-.9-2-2-2ZM6 20.667c0 .366-.3.666-.667.666a.669.669 0 0 1-.666-.666v-3.334c0-.366.3-.666.666-.666.367 0 .667.3.667.666v3.334Zm11.333.666h-2a4.672 4.672 0 0 1-4.666-4.666v-4.994c3.246 1.4 6.593 2.18 9.973 2.307.34.013.68.02 1.02.02h.333v2.673a4.672 4.672 0 0 1-4.666 4.667l.006-.007ZM22 12.647c-.44 0-.873.013-1.307 0a26.161 26.161 0 0 1-7.16-1.314H22v1.314Zm.667-3.314c0 .367-.3.667-.667.667H10.667A.669.669 0 0 1 10 9.333v-2h12.667v2ZM28 6H4a.669.669 0 0 1-.667-.667c0-.366.3-.666.667-.666h24c.367 0 .667.3.667.666 0 .367-.3.667-.667.667ZM14.12 24.913A1.333 1.333 0 0 0 12.853 24H8a3.335 3.335 0 0 0-3.333 3.333V28c0 .733.6 1.333 1.333 1.333h7.74A1.33 1.33 0 0 0 15 27.58l-.887-2.667h.007ZM6 28v-.667c0-1.1.9-2 2-2h4.853L13.747 28H6ZM24.667 24h-4.854a1.34 1.34 0 0 0-1.266.913l-.887 2.667c-.133.407-.067.853.18 1.2.253.347.653.553 1.08.553h7.74c.733 0 1.333-.6 1.333-1.333v-.667A3.334 3.334 0 0 0 24.66 24h.007Zm2 4h-7.74l.886-2.667h4.854c1.1 0 2 .9 2 2V28Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeStudentIcon);
export default ForwardRef;
