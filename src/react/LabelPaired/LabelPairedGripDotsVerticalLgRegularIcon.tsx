import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGripDotsVerticalLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 10 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.5 9.25c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625.39-.026.599-.234.625-.625m-2.5 0C.026 8.547.339 8 .938 7.61c.625-.313 1.25-.313 1.875 0 .598.39.911.937.937 1.64-.026.703-.339 1.25-.937 1.64-.626.313-1.25.313-1.876 0C.34 10.5.026 9.954 0 9.25m2.5 6.25c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625.39-.026.599-.234.625-.625m-2.5 0c.026-.703.339-1.25.938-1.64.625-.313 1.25-.313 1.875 0 .598.39.911.937.937 1.64-.026.703-.339 1.25-.937 1.64-.626.313-1.25.313-1.876 0C.34 16.75.026 16.204 0 15.5m1.875 6.875c.39-.026.599-.234.625-.625-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625m0-2.5c.703.026 1.25.338 1.64.938.313.625.313 1.25 0 1.875-.39.599-.937.911-1.64.937-.703-.026-1.25-.338-1.64-.937-.313-.625-.313-1.25 0-1.875.39-.6.937-.912 1.64-.938M8.75 9.25c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625.39-.026.599-.234.625-.625m-2.5 0c.026-.703.339-1.25.938-1.64.625-.313 1.25-.313 1.875 0 .598.39.911.937.937 1.64-.026.703-.339 1.25-.937 1.64-.626.313-1.25.313-1.876 0-.598-.39-.911-.937-.937-1.64m1.875 6.875c.39-.026.599-.234.625-.625-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625m0-2.5c.703.026 1.25.338 1.64.938.313.624.313 1.25 0 1.874-.39.6-.937.912-1.64.938-.703-.026-1.25-.338-1.64-.937-.313-.625-.313-1.25 0-1.875.39-.6.937-.912 1.64-.938m.625 8.125c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625.026.39.234.599.625.625.39-.026.599-.234.625-.625m-2.5 0c.026-.703.339-1.25.938-1.64.625-.313 1.25-.313 1.875 0 .598.39.911.937.937 1.64-.026.703-.339 1.25-.937 1.64-.626.313-1.25.313-1.876 0-.598-.39-.911-.937-.937-1.64'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalLgRegularIcon);
export default ForwardRef;
