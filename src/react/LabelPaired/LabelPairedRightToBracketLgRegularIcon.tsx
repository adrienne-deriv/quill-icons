import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedRightToBracketLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M12.46 15.578c.027-.026.04-.052.04-.078 0-.026-.013-.052-.04-.078l-5.155-4.844c-.052-.052-.104-.078-.157-.078a.305.305 0 0 0-.273.273V13c-.026.39-.234.599-.625.625H1.563c-.183.026-.287.13-.313.313v3.124c.026.183.13.287.313.313H6.25c.39.026.599.234.625.625v2.227a.305.305 0 0 0 .273.273c.053 0 .105-.026.157-.078zm1.29-.078c0 .39-.143.716-.43.977l-5.156 4.882a1.46 1.46 0 0 1-1.016.391c-.442 0-.807-.143-1.093-.43-.287-.286-.43-.65-.43-1.093v-1.602H1.563c-.443 0-.808-.156-1.094-.469A1.418 1.418 0 0 1 0 17.063v-3.125c0-.443.156-.808.469-1.094a1.418 1.418 0 0 1 1.094-.469h4.062v-1.602c0-.442.143-.807.43-1.093.286-.287.65-.43 1.093-.43.391 0 .73.143 1.016.43l5.156 4.843c.287.26.43.586.43.977m-.625 7.5h3.75c.52-.026.963-.208 1.328-.547.339-.364.521-.807.547-1.328V9.875a2.038 2.038 0 0 0-.547-1.328A2.038 2.038 0 0 0 16.875 8h-3.75c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h3.75c.885.026 1.628.326 2.227.898.572.6.872 1.342.898 2.227v11.25c-.026.885-.326 1.628-.898 2.227-.6.572-1.342.872-2.227.898h-3.75c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketLgRegularIcon);
export default ForwardRef;