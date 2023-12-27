import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretUpLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='m6.266 11.828-4.688 4.453a.265.265 0 0 0-.078.196.305.305 0 0 0 .273.273h9.454a.305.305 0 0 0 .273-.273.265.265 0 0 0-.078-.196l-4.688-4.453a.42.42 0 0 0-.234-.078.42.42 0 0 0-.234.078Zm-.86-.898c.313-.287.677-.43 1.094-.43.417 0 .781.143 1.094.43l4.687 4.453c.313.286.469.65.469 1.094 0 .442-.143.807-.43 1.093-.286.287-.65.43-1.093.43H1.773c-.442 0-.807-.143-1.093-.43-.287-.286-.43-.65-.43-1.093 0-.443.156-.82.469-1.133l4.687-4.414Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpLgRegularIcon);
export default ForwardRef;
