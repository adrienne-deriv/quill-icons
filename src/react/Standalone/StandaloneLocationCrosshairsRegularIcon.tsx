import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneLocationCrosshairsRegularIcon = (
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
    <path d='M16 6.5c.39.026.599.234.625.625v1.914c1.849.182 3.412.899 4.688 2.149 1.25 1.275 1.966 2.838 2.148 4.687h1.914c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-1.914c-.182 1.849-.898 3.412-2.148 4.688-1.276 1.25-2.839 1.966-4.688 2.148v1.914c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-1.914c-1.849-.182-3.412-.898-4.688-2.148-1.25-1.276-1.966-2.839-2.148-4.688H6.625c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h1.914c.182-1.849.899-3.412 2.149-4.688 1.275-1.25 2.838-1.966 4.687-2.148V7.125c.026-.39.234-.599.625-.625Zm-6.25 10c0 1.12.273 2.162.82 3.125a6.514 6.514 0 0 0 2.305 2.305c.99.547 2.031.82 3.125.82a6.368 6.368 0 0 0 3.125-.82 6.514 6.514 0 0 0 2.305-2.305c.547-.963.82-2.005.82-3.125s-.273-2.162-.82-3.125a6.514 6.514 0 0 0-2.305-2.305A6.368 6.368 0 0 0 16 10.25a6.368 6.368 0 0 0-3.125.82 6.514 6.514 0 0 0-2.305 2.305 6.225 6.225 0 0 0-.82 3.125Zm8.75 0c-.026-.938-.443-1.654-1.25-2.148-.833-.47-1.667-.47-2.5 0-.807.494-1.224 1.21-1.25 2.148.026.938.443 1.654 1.25 2.148.833.47 1.667.47 2.5 0 .807-.494 1.224-1.21 1.25-2.148Zm-6.25 0c0-.677.17-1.302.508-1.875A3.759 3.759 0 0 1 16 12.75a3.759 3.759 0 0 1 3.242 1.875 3.62 3.62 0 0 1 .508 1.875 3.62 3.62 0 0 1-.508 1.875A3.759 3.759 0 0 1 16 20.25a3.759 3.759 0 0 1-3.242-1.875 3.62 3.62 0 0 1-.508-1.875Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLocationCrosshairsRegularIcon);
export default ForwardRef;
