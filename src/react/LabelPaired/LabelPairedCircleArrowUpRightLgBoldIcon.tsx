import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleArrowUpRightLgBoldIcon = (
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
        d='M10 23.625c1.484 0 2.839-.365 4.063-1.094 1.223-.703 2.213-1.692 2.968-2.968a8.061 8.061 0 0 0 1.094-4.063 8.061 8.061 0 0 0-1.094-4.062c-.755-1.277-1.744-2.266-2.968-2.97C12.838 7.74 11.484 7.376 10 7.376c-1.484 0-2.839.365-4.062 1.094-1.224.703-2.214 1.693-2.97 2.969A8.062 8.062 0 0 0 1.876 15.5c0 1.432.365 2.787 1.094 4.063.755 1.276 1.745 2.265 2.969 2.968 1.223.73 2.578 1.094 4.062 1.094M10 5.5c1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C.443 18.912 0 17.245 0 15.5s.443-3.411 1.328-5C2.266 8.938 3.49 7.714 5 6.828c1.51-.86 3.177-1.302 5-1.328m-2.5 5.625h5.938c.572.052.885.365.937.938v6.25c-.052.572-.365.885-.937.937-.573-.052-.886-.365-.938-.937v-3.985l-5.273 5.274c-.443.364-.886.364-1.329 0-.364-.443-.364-.886 0-1.329L11.172 13H7.5c-.573-.052-.885-.365-.937-.937.052-.573.364-.886.937-.938'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpRightLgBoldIcon);
export default ForwardRef;
