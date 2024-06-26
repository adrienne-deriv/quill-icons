import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneSquareListFillIcon = (
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
    <path d='M7.25 10.25c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5zm3.75 7.5c.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25m1.25-5c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25M11 21.5c.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25m3.75-9.687a.925.925 0 0 0-.937.937c0 .547.39.938.937.938H21c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937zm0 3.75a.925.925 0 0 0-.937.937c0 .547.39.938.937.938H21c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937zm0 3.75a.925.925 0 0 0-.937.937c0 .547.39.938.937.938H21c.508 0 .938-.391.938-.938a.95.95 0 0 0-.938-.937z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSquareListFillIcon);
export default ForwardRef;
