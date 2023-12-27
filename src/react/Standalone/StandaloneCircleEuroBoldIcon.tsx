import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCircleEuroBoldIcon = (
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
    <path d='M24.125 16.5c0-1.484-.365-2.838-1.094-4.063-.703-1.223-1.692-2.213-2.968-2.968A8.062 8.062 0 0 0 16 8.375a8.062 8.062 0 0 0-4.063 1.094c-1.275.755-2.265 1.745-2.968 2.969-.73 1.223-1.094 2.578-1.094 4.062 0 1.484.365 2.838 1.094 4.063.703 1.224 1.693 2.213 2.969 2.968A8.061 8.061 0 0 0 16 24.625a8.061 8.061 0 0 0 4.063-1.094c1.276-.755 2.265-1.744 2.968-2.968.73-1.224 1.094-2.579 1.094-4.063ZM6 16.5c.026-1.823.469-3.49 1.328-5C8.214 9.99 9.438 8.766 11 7.828c1.588-.885 3.255-1.328 5-1.328s3.412.443 5 1.328c1.563.938 2.787 2.162 3.672 3.672.86 1.51 1.302 3.177 1.328 5-.026 1.823-.469 3.49-1.328 5-.886 1.51-2.11 2.734-3.672 3.672-1.588.885-3.255 1.328-5 1.328s-3.412-.443-5-1.328c-1.563-.938-2.786-2.162-3.672-3.672-.86-1.51-1.302-3.177-1.328-5Zm5 .625h.625a4.746 4.746 0 0 1-.04-.586c0-.234.014-.456.04-.664H11c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h.977c.39-.938.99-1.693 1.796-2.266.834-.546 1.784-.833 2.852-.859h1.602c.572.052.885.365.937.938-.052.572-.365.885-.937.937h-1.602c-1.068.026-1.901.443-2.5 1.25h3.125c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-3.71a2.73 2.73 0 0 0-.08.664c0 .208.027.404.08.586h3.71c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-3.203c.625.833 1.484 1.276 2.578 1.328h1.602c.572.052.885.365.937.938-.052.547-.365.859-.937.937h-1.602c-1.094-.026-2.044-.325-2.852-.898a5.299 5.299 0 0 1-1.835-2.305H11c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleEuroBoldIcon);
export default ForwardRef;
