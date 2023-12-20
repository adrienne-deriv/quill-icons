import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleSterlingLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M18.75 15.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C12.995 7.14 11.537 6.75 10 6.75c-1.536 0-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.839 1.172 4.375 1.172 1.537 0 2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.786 1.172-4.375M0 15.5c.026-1.823.469-3.49 1.328-5C2.214 8.99 3.438 7.766 5 6.828 6.589 5.943 8.255 5.5 10 5.5s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.562-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5m10.156-4.375c-.416 0-.755.143-1.015.43-.26.26-.404.599-.43 1.015l.039 1.68h1.875c.39.026.599.234.625.625-.026.39-.234.599-.625.625H8.75a6 6 0 0 1-.703 2.5h4.765c.391.026.6.234.626.625-.027.39-.235.599-.626.625H6.876a.612.612 0 0 1-.547-.312.67.67 0 0 1 .04-.665l.35-.507c.47-.703.73-1.459.782-2.266h-.625c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625H7.5l-.04-1.68c.027-.755.287-1.393.782-1.914.495-.495 1.133-.755 1.914-.781.417 0 .807.091 1.172.273l.82.43c.339.209.43.482.274.82-.182.339-.456.43-.82.274l-.82-.39a1.387 1.387 0 0 0-.626-.157'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingLgRegularIcon);
export default ForwardRef;
