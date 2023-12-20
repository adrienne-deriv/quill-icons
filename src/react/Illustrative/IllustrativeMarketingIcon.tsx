import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeMarketingIcon = (
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
    <g fillOpacity={0.72}>
      <path d='M16.833 15.812a1.31 1.31 0 0 0-1.146-.24l-7.094 1.773H6.007a3.335 3.335 0 0 0-3.334 3.333v.667a3.345 3.345 0 0 0 2.667 3.267v2.733c0 1.1.9 2 2 2s2-.9 2-2v-2.48l6.347 1.587c.106.026.22.04.326.04a1.326 1.326 0 0 0 1.333-1.333v-8.294c0-.413-.186-.793-.513-1.053m-12.82 5.526v-.666c0-1.1.9-2 2-2h2v4.666h-2c-1.1 0-2-.9-2-2m3.334 6.667a.669.669 0 0 1-.667-.667v-2.666h1.333v2.666c0 .367-.3.667-.666.667m8.666-2.853-6.666-1.667v-4.96l6.666-1.667zM26.68 2.672h-9.333c-1.1 0-2 .9-2 2v5.333c0 1.1.9 2 2 2h4.973v1.333c0 .26.153.494.387.607a.67.67 0 0 0 .713-.1l2.173-1.84h1.087c1.1 0 2-.9 2-2V4.672c0-1.1-.9-2-2-2m.667 7.333c0 .367-.3.667-.667.667h-1.333a.645.645 0 0 0-.434.16l-1.26 1.066v-.56c0-.366-.3-.666-.666-.666h-5.64a.669.669 0 0 1-.667-.667V4.672c0-.367.3-.667.667-.667h9.333c.367 0 .667.3.667.667z' />
      <path d='M19.347 8.005a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M22.013 8.005a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M24.68 8.005a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M20.487 22.085a.672.672 0 0 0-.947 0c-.26.26-.26.68 0 .947l.473.473c.134.133.3.193.474.193a.664.664 0 0 0 .473-1.133l-.473-.473zM21.9 20.005h-.94c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h.94c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667M20.013 19.452c.174 0 .34-.067.474-.194l.473-.473a.664.664 0 1 0-.94-.94l-.473.473a.672.672 0 0 0 0 .947c.133.127.3.193.473.193zM3.933 11.652a2 2 0 0 0 2.827 0l.113-.114a.676.676 0 0 1 .94 0l.114.114a2 2 0 0 0 2.826 0l.114-.114c.26-.26.68-.26.94 0l.86.86v1.06c0 .367.3.667.666.667.367 0 .667-.3.667-.667V4.785a.689.689 0 0 0-.193-.473l-1.06-1.06a2 2 0 0 0-2.827 0l-.587.586-.586-.586a2 2 0 0 0-2.827 0l-.587.586-.393-.393c-.38-.38-.953-.5-1.453-.287-.5.207-.82.694-.82 1.234v5.726c0 .18.073.347.193.474l1.06 1.06zm.08-7.254.394.394a1.36 1.36 0 0 0 1.886 0l.587-.587c.26-.26.68-.26.94 0l.587.587c.52.52 1.366.52 1.886 0l.587-.587c.26-.26.68-.26.94 0l.86.86v5.453c-.76-.68-2.02-.653-2.747.08l-.113.114a.664.664 0 0 1-.94 0l-.113-.114c-.38-.38-.88-.586-1.414-.586-.533 0-1.033.206-1.413.586l-.113.114a.664.664 0 0 1-.94 0l-.86-.86V4.398z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeMarketingIcon);
export default ForwardRef;
