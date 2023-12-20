import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLocationDotCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.875 8c-.031-.953-.36-1.75-.984-2.39-.641-.626-1.438-.954-2.391-.985-.953.031-1.75.36-2.39.984-.626.641-.954 1.438-.985 2.391 0 .297.117.742.352 1.336.265.594.601 1.219 1.007 1.875.344.547.688 1.07 1.032 1.57.359.5.687.938.984 1.313.297-.375.625-.813.984-1.313.36-.5.704-1.023 1.032-1.57.406-.656.742-1.281 1.007-1.875.235-.594.352-1.04.352-1.336M9 8c-.031.703-.281 1.516-.75 2.438a23.564 23.564 0 0 1-1.64 2.671c-.61.875-1.126 1.57-1.548 2.086a.71.71 0 0 1-.562.282.71.71 0 0 1-.562-.282A34.952 34.952 0 0 1 2.39 13.11c-.61-.859-1.157-1.75-1.641-2.671C.281 9.516.031 8.703 0 8c.031-1.281.469-2.344 1.313-3.187C2.156 3.969 3.218 3.53 4.5 3.5c1.281.031 2.344.469 3.188 1.313C8.53 5.656 8.968 6.719 9 8M5.25 8a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54c0 .219.07.398.21.54.142.14.321.21.54.21a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54M2.625 8c.016-.703.328-1.242.938-1.617.624-.344 1.25-.344 1.874 0 .61.375.922.914.938 1.617-.016.703-.328 1.242-.937 1.617-.625.344-1.25.344-1.875 0-.61-.375-.922-.914-.938-1.617'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotCaptionBoldIcon);
export default ForwardRef;
