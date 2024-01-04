import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeFastExecutionIcon = (
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
      <path d='M18.327 16.653v1.334c0 .733-.594 1.333-1.334 1.333h-.666v.667a.664.664 0 0 1-.667.666.664.664 0 0 1-.667-.666v-.667H13.66a.669.669 0 0 1-.667-.667c0-.366.3-.666.667-.666h3.334v-1.334h-2.667c-.733 0-1.334-.6-1.334-1.333v-1.333c0-.734.6-1.334 1.334-1.334h.666v-.666c0-.367.3-.667.667-.667.367 0 .667.3.667.667v1.333a.664.664 0 0 1-.667.667h-1.333v1.333h2.667c.74 0 1.333.6 1.333 1.333' />
      <path d='M18.327 13.32a.664.664 0 0 1-.667.667h-2c.373 0 .667-.3.667-.667v-.667h1.333c.373 0 .667.3.667.667M10.047 20.267a.658.658 0 0 1-.56-.307c-.1-.16-.194-.314-.287-.48a.666.666 0 0 1 1.16-.654c.08.14.16.28.247.414.2.313.107.72-.207.92a.648.648 0 0 1-.36.107zM15.634 28.64c-2.48 0-4.98-.727-7.147-2.213a.665.665 0 0 1-.173-.927.666.666 0 0 1 .926-.173 11.339 11.339 0 0 0 14.42-1.34l3.3-3.3a.676.676 0 0 1 .94 0l.747.746v-5.266H23.38l.747.746c.26.26.26.68 0 .94l-3.3 3.3c-2.494 2.487-6.414 2.86-9.32.874a.665.665 0 0 1-.173-.927.665.665 0 0 1 .926-.173 6.002 6.002 0 0 0 7.627-.714l2.826-2.826-.273-.274a1.334 1.334 0 0 1-.287-1.453c.207-.5.694-.827 1.234-.827h5.933c.367 0 .667.3.667.667v5.933c0 .54-.327 1.027-.827 1.234-.5.206-1.073.093-1.453-.287l-.274-.273-2.826 2.826a12.66 12.66 0 0 1-8.967 3.714zM6.667 24.6a.652.652 0 0 1-.5-.227 12.627 12.627 0 0 1-1.327-1.787.657.657 0 0 1 .227-.913.663.663 0 0 1 .913.227c.327.54.727 1.08 1.18 1.587a.665.665 0 0 1-.493 1.106zM4.313 20.593a.68.68 0 0 1-.633-.446c-.067-.2-.133-.407-.193-.614a.659.659 0 0 1 .446-.826.659.659 0 0 1 .827.446c.06.194.113.374.18.56a.668.668 0 0 1-.413.847.63.63 0 0 1-.22.033zM21.54 13.493a.656.656 0 0 1-.58-.34c-.08-.14-.16-.28-.247-.42a.662.662 0 0 1 .207-.92c.307-.2.72-.106.92.207.1.153.194.313.287.473a.666.666 0 0 1-.58.994z' />
      <path d='M7.933 17.147H2a.669.669 0 0 1-.667-.667v-5.933c0-.54.327-1.027.827-1.234a1.334 1.334 0 0 1 1.453.287l.274.273 2.826-2.826a12.66 12.66 0 0 1 9.647-3.694c.367.02.647.334.627.7a.673.673 0 0 1-.7.627 11.346 11.346 0 0 0-8.634 3.307l-3.3 3.3a.66.66 0 0 1-.473.193.688.688 0 0 1-.473-.193l-.747-.747v5.267h5.267l-.747-.747a.66.66 0 0 1-.193-.473c0-.18.073-.347.193-.473l3.3-3.3a7.336 7.336 0 0 1 9.32-.874c.307.207.38.62.173.927a.665.665 0 0 1-.926.173 6.002 6.002 0 0 0-7.627.714L8.593 14.58l.274.274c.38.38.493.953.286 1.453-.206.5-.693.827-1.233.827zM19.66 5.347a.678.678 0 0 1-.227-.04 9.782 9.782 0 0 0-.626-.2.67.67 0 0 1-.454-.827.674.674 0 0 1 .827-.453c.24.073.473.14.707.226a.665.665 0 0 1-.227 1.294M25.994 3.973a4.333 4.333 0 1 0 0 8.667 4.333 4.333 0 0 0 0-8.667m0 7.334c-1.654 0-3-1.347-3-3 0-1.654 1.346-3 3-3 1.653 0 3 1.346 3 3 0 1.653-1.347 3-3 3' />
      <path d='M27.66 8.307a.664.664 0 0 1-.666.666h-.334v.334a.664.664 0 0 1-.666.666.664.664 0 0 1-.667-.666v-.334h-.334a.669.669 0 0 1-.666-.666c0-.367.3-.667.666-.667h.334v-.333c0-.367.3-.667.666-.667.367 0 .667.3.667.667v.333h.334c.373 0 .666.3.666.667' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeFastExecutionIcon);
export default ForwardRef;
