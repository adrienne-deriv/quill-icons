import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeCreativeMaterialsIcon = (
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
      <path d='M17.487 14.473a1.31 1.31 0 0 0-1.147-.24l-7.093 1.774H6.66a3.335 3.335 0 0 0-3.333 3.333v.667a3.345 3.345 0 0 0 2.666 3.266v2.734c0 1.1.9 2 2 2s2-.9 2-2v-2.48l6.347 1.586c.107.027.22.04.327.04A1.326 1.326 0 0 0 18 23.82v-8.293c0-.414-.187-.794-.513-1.054ZM4.667 20v-.667c0-1.1.9-2 2-2h2V22h-2c-1.1 0-2-.9-2-2ZM8 26.667A.669.669 0 0 1 7.333 26v-2.667h1.334V26c0 .367-.3.667-.667.667Zm8.667-2.854L10 22.147v-4.96l6.667-1.667v8.293ZM27.333 3.333H18c-1.1 0-2 .9-2 2v5.334c0 1.1.9 2 2 2h4.973V14c0 .26.154.493.387.607a.67.67 0 0 0 .713-.1l2.174-1.84h1.086c1.1 0 2-.9 2-2V5.333c0-1.1-.9-2-2-2ZM28 10.667c0 .366-.3.666-.667.666H26a.646.646 0 0 0-.433.16l-1.26 1.067V12c0-.367-.3-.667-.667-.667H18a.669.669 0 0 1-.667-.666V5.333c0-.366.3-.666.667-.666h9.333c.367 0 .667.3.667.666v5.334Z' />
      <path d='M20 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM22.667 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM25.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM12.667 12c1.1 0 2-.9 2-2V5.333c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2V10c0 1.1.9 2 2 2h8Zm-.48-7.333L8.667 7.18l-3.52-2.513h7.04ZM4 10V5.487L8.28 8.54c.113.08.253.127.387.127a.64.64 0 0 0 .386-.127l4.28-3.053V10c0 .367-.3.667-.666.667h-8A.669.669 0 0 1 4 10ZM21.14 20.747a.672.672 0 0 0-.947 0c-.26.26-.26.68 0 .946l.474.474c.133.133.3.193.473.193s.34-.067.473-.193c.26-.26.26-.68 0-.94l-.473-.474v-.006ZM22.553 18.667h-.94c-.366 0-.666.3-.666.666 0 .367.3.667.666.667h.94c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666ZM20.667 18.113c.173 0 .34-.066.473-.193l.473-.473a.664.664 0 1 0-.94-.94l-.473.473a.672.672 0 0 0 0 .947c.133.126.3.193.473.193l-.006-.007Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeCreativeMaterialsIcon);
export default ForwardRef;
