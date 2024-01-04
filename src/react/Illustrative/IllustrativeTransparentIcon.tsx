import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeTransparentIcon = (
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
      <path d='M9.33 22.677a8.337 8.337 0 0 0 9.357.99h6.98a.666.666 0 1 0 0-1.334H20.51c.037-.036.077-.07.113-.106A8.242 8.242 0 0 0 21.633 21h4.034a.667.667 0 1 0 0-1.333h-3.302c.188-.434.34-.88.452-1.334h2.85a.666.666 0 1 0 0-1.333H23.03a8.48 8.48 0 0 0 0-1.333h2.637a.666.666 0 1 0 0-1.334h-2.85A8.37 8.37 0 0 0 22.365 13h3.302a.667.667 0 1 0 0-1.333h-4.034a8.418 8.418 0 0 0-1.01-1.227c-.036-.037-.075-.072-.113-.107h5.157a.666.666 0 1 0 0-1.333h-6.98C15.53 7.298 11.5 7.778 8.838 10.44c-3.09 3.09-3.238 8.023-.451 11.293l-.985.985a1.986 1.986 0 0 0-1.159-.371c-.535 0-1.036.208-1.415.586l-1.885 1.885c-.378.379-.585.88-.585 1.414 0 .533.209 1.036.585 1.415l.472.471c.378.379.88.587 1.415.587s1.037-.208 1.415-.587l1.885-1.885c.7-.7.77-1.79.215-2.571zm.45-11.294a6.976 6.976 0 0 1 4.95-2.046c1.793 0 3.585.681 4.95 2.046a7.007 7.007 0 0 1 0 9.9c-2.73 2.729-7.17 2.729-9.898 0-2.729-2.73-2.729-7.17 0-9.898zM7.187 25.29l-1.885 1.885a.684.684 0 0 1-.944 0l-.471-.472a.667.667 0 0 1 0-.943l1.885-1.885a.667.667 0 0 1 .943 0l.237.235.235.235a.667.667 0 0 1 0 .943z' />
      <path d='M28.667 2.333h-17.7a1 1 0 0 0-1 1v3.922a.666.666 0 1 0 1.333 0V3.667h17.034v24.666H11.3V25.53a.666.666 0 1 0-1.333 0v3.137a1 1 0 0 0 1 1h17.7a1 1 0 0 0 1-1V3.333a1 1 0 0 0-1-1' />
      <path d='M14.73 19.5c2.472 0 4.72-1.152 5.593-2.863a.668.668 0 0 0 0-.605c-.873-1.714-3.121-2.864-5.593-2.864s-4.72 1.152-5.593 2.864a.667.667 0 0 0 0 .605c.873 1.713 3.121 2.863 5.593 2.863m0-4a.834.834 0 1 1 0 1.667.834.834 0 0 1 0-1.667m4.225.833c-.566.827-1.626 1.44-2.885 1.699a2.161 2.161 0 0 0 0-3.397c1.258.258 2.317.872 2.885 1.698m-5.566-1.698a2.161 2.161 0 0 0 0 3.397c-1.259-.259-2.317-.872-2.885-1.699.566-.826 1.626-1.44 2.885-1.698M12.765 12.132a6.449 6.449 0 0 1 1.963-.299c.682 0 1.344.1 1.964.299a.667.667 0 1 0 .407-1.27 7.793 7.793 0 0 0-2.37-.362c-.82 0-1.617.122-2.37.362a.666.666 0 1 0 .406 1.27M16.693 20.535a6.444 6.444 0 0 1-1.963.298c-.682 0-1.342-.1-1.963-.298a.667.667 0 0 0-.407 1.27c.753.24 1.55.362 2.37.362.82 0 1.617-.122 2.37-.362a.666.666 0 1 0-.407-1.27M25.667 25h-6.334a.666.666 0 1 0 0 1.333h6.334a.666.666 0 1 0 0-1.333M25.667 7.667a.666.666 0 1 0 0-1.334H21.5a.667.667 0 1 0 0 1.334z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeTransparentIcon);
export default ForwardRef;
