import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBasketShoppingRegularIcon = (
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
    <path d='M17.523 6.617a.62.62 0 0 1 .86.196L22.602 14h4.023c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.937l-2.344 9.375c-.274 1.094-1.29 1.875-2.422 1.875h-9.844c-1.172 0-2.148-.781-2.46-1.875L6.311 15.25h-.937a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625H9.36l4.218-7.187a.62.62 0 0 1 .86-.196c.273.156.39.547.195.86L10.805 14h10.351l-3.828-6.523a.62.62 0 0 1 .195-.86M7.602 15.25l2.265 9.063c.117.546.625.937 1.211.937h9.844c.547 0 1.055-.39 1.21-.937l2.266-9.063zm5.898 3.125v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625m2.5-.625c.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625m3.75.625v3.75a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBasketShoppingRegularIcon);
export default ForwardRef;
