import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleCalendarRegularIcon = (
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
    <path
      fillOpacity={0.72}
      d='M24.75 16.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C18.995 8.14 17.537 7.75 16 7.75s-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.839 1.172 4.375 1.172 1.537 0 2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.786 1.172-4.375M6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.562-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5m8.125-6.25c.39.026.599.234.625.625v.625h2.5v-.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625v.625h.625c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v6.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547h-6.25a2.038 2.038 0 0 1-1.328-.547A2.038 2.038 0 0 1 11 19.625v-6.25c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547h.625v-.625c.026-.39.234-.599.625-.625m-1.875 3.125V14h7.5v-.625c-.026-.39-.234-.599-.625-.625h-6.25c-.39.026-.599.234-.625.625m7.5 1.875h-7.5v4.375c.026.39.234.599.625.625h6.25c.39-.026.599-.234.625-.625z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleCalendarRegularIcon);
export default ForwardRef;
