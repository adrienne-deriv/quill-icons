import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePhoneRegularIcon = (
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
    <path d='m20.688 17.242 4.375 1.875c.338.156.599.404.78.742.157.313.196.651.118 1.016l-.938 4.375c-.208.781-.716 1.198-1.523 1.25h-.703a3.869 3.869 0 0 0-.547-.04c-3.047-.26-5.794-1.184-8.242-2.773a17.514 17.514 0 0 1-5.82-6.21C6.755 14.95 6.026 12.125 6 9c.052-.807.469-1.315 1.25-1.523l4.375-.938a1.376 1.376 0 0 1 1.016.156c.338.157.586.404.742.742l1.875 4.375c.26.704.104 1.316-.469 1.836l-1.562 1.29a11.935 11.935 0 0 0 4.335 4.335l1.29-1.562c.52-.573 1.132-.73 1.835-.469ZM23.5 25.25c.156 0 .26-.078.313-.234l.937-4.375c.026-.183-.04-.3-.195-.352l-4.375-1.875c-.13-.052-.248-.026-.352.078l-1.289 1.602c-.469.468-1.003.56-1.602.273a12.89 12.89 0 0 1-4.804-4.805c-.287-.598-.195-1.132.273-1.601l1.602-1.29c.104-.103.13-.22.078-.35L12.21 7.944c-.078-.156-.195-.221-.352-.195l-4.375.938c-.156.052-.234.156-.234.312.026 3.02.768 5.755 2.227 8.203a15.994 15.994 0 0 0 5.82 5.82c2.448 1.459 5.182 2.201 8.203 2.227Z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePhoneRegularIcon);
export default ForwardRef;
