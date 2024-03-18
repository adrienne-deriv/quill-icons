import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneEuroSignFillIcon = (
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
    <path d='M11.625 15.875H11c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h1.094c1.133-3.242 4.297-5.625 7.969-5.625H21c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.937a5.96 5.96 0 0 0-5.235 3.125h4.922c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-5.625v1.25h5.625c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-4.922c.977 1.875 2.969 3.125 5.235 3.125H21c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.937c-3.672 0-6.836-2.344-7.97-5.625H11c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h.625v-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEuroSignFillIcon);
export default ForwardRef;
