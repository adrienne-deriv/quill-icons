import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneLoaderFillIcon = (
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
    <path d='M17.25 7.75v2.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m0 15v2.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25M6 16.5c0-.664.547-1.25 1.25-1.25h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25m16.25-1.25h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25M8.93 9.43c.468-.47 1.25-.47 1.758 0l1.757 1.797a1.205 1.205 0 0 1 0 1.757 1.205 1.205 0 0 1-1.758 0L8.93 11.227a1.25 1.25 0 0 1 0-1.797m12.343 10.625 1.797 1.758c.47.507.47 1.289 0 1.757a1.25 1.25 0 0 1-1.797 0l-1.757-1.758c-.47-.468-.47-1.289 0-1.757.507-.508 1.289-.508 1.757 0M8.93 23.57v.04a1.25 1.25 0 0 1 0-1.797l1.758-1.758a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.758l-1.758 1.757c-.507.508-1.289.508-1.757 0m10.586-12.343 1.757-1.797a1.324 1.324 0 0 1 1.797 0c.47.508.47 1.289 0 1.797l-1.797 1.757c-.468.47-1.25.47-1.757 0-.47-.507-.47-1.289 0-1.757' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLoaderFillIcon);
export default ForwardRef;
