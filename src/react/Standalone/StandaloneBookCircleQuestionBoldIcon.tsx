import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBookCircleQuestionBoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M3.5 9.938A3.443 3.443 0 0 1 6.938 6.5h11.875C19.984 6.5 21 7.516 21 8.688v5.585c-.703.196-1.328.47-1.875.86V8.688a.336.336 0 0 0-.312-.313H6.938c-.899 0-1.563.703-1.563 1.563v10.585a3.1 3.1 0 0 1 1.25-.273H16v.625c0 .43.04.86.078 1.25H6.625c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25h10.469c.468.742 1.093 1.406 1.797 1.875H6.625c-1.758 0-3.125-1.367-3.125-3.125V9.938m5 1.874c0-.507.39-.937.938-.937h6.874a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H9.438c-.547 0-.938-.39-.938-.937m0 3.126c0-.508.39-.938.938-.938h6.874a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H9.438c-.547 0-.938-.39-.938-.937m8.75 5.937c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m3.125-1.797v.235c0 .351.273.625.625.625a.64.64 0 0 0 .625-.625v-.235c0-.195.156-.39.352-.39h1.601c.274 0 .547.273.547.546 0 .235-.117.391-.312.508l-1.25.625a.69.69 0 0 0-.313.586v.547c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625v-.195l.898-.47c.586-.312.977-.937.977-1.6 0-.977-.82-1.758-1.797-1.758h-1.601c-.899 0-1.602.703-1.602 1.601m1.563 4.61c0 .546.39.937.937.937.508 0 .938-.39.938-.937a.95.95 0 0 0-.938-.938.925.925 0 0 0-.937.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBookCircleQuestionBoldIcon);
export default ForwardRef;
