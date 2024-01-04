import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleNineLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M18.75 15.5c-.026-1.588-.417-3.047-1.172-4.375a8.988 8.988 0 0 0-3.203-3.203C12.995 7.14 11.537 6.75 10 6.75c-1.536 0-2.995.39-4.375 1.172a8.989 8.989 0 0 0-3.203 3.203c-.755 1.328-1.146 2.787-1.172 4.375.026 1.588.417 3.047 1.172 4.375a8.989 8.989 0 0 0 3.203 3.203c1.38.781 2.839 1.172 4.375 1.172 1.537 0 2.995-.39 4.375-1.172a8.988 8.988 0 0 0 3.203-3.203c.755-1.328 1.146-2.786 1.172-4.375M0 15.5c.026-1.823.469-3.49 1.328-5C2.214 8.99 3.438 7.766 5 6.828 6.589 5.943 8.255 5.5 10 5.5s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.411-.443-5-1.328c-1.562-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5m10-3.75c-.937.026-1.654.443-2.148 1.25-.47.833-.47 1.667 0 2.5.494.807 1.21 1.224 2.148 1.25.938-.026 1.654-.443 2.148-1.25.47-.833.47-1.667 0-2.5-.494-.807-1.21-1.224-2.148-1.25M9.844 18c-1.016-.052-1.862-.43-2.54-1.133-.676-.703-1.028-1.575-1.054-2.617.026-1.068.39-1.953 1.094-2.656.703-.703 1.588-1.068 2.656-1.094 1.068.026 1.953.39 2.656 1.094.703.703 1.068 1.588 1.094 2.656-.026 1.224-.469 2.253-1.328 3.086L9.18 20.344c-.313.234-.612.221-.899-.04-.234-.312-.221-.611.04-.898z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineLgRegularIcon);
export default ForwardRef;
