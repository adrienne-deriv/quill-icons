import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedRectangleAdLgRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.75 8c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v12.5c0 .365.117.664.352.898.234.235.533.352.898.352h17.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V9.25c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352zM.25 9.25c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h17.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H2.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758zm8.398 2.852 2.813 6.25c.104.364 0 .65-.313.859-.364.104-.65 0-.859-.313L9.9 18H6.226l-.391.898c-.208.313-.495.417-.86.313-.338-.208-.442-.495-.312-.86l2.813-6.25a.631.631 0 0 1 .585-.351c.26 0 .456.117.586.352m-.585 1.796-1.29 2.852h2.579zm6.874.977c-.598.026-1.054.287-1.367.781a1.66 1.66 0 0 0 0 1.563c.313.494.768.755 1.367.781.6-.026 1.055-.287 1.368-.781a1.66 1.66 0 0 0 0-1.563c-.313-.495-.768-.755-1.367-.781m1.563-.781v-1.719c.026-.39.234-.599.625-.625.39.026.599.234.625.625v6.25c-.026.39-.234.599-.625.625-.312-.026-.52-.182-.625-.469-.443.313-.963.469-1.562.469-.808-.026-1.472-.3-1.993-.82-.52-.521-.794-1.185-.82-1.992.026-.808.3-1.472.82-1.993.521-.52 1.185-.794 1.992-.82.6 0 1.12.156 1.563.469'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdLgRegularIcon);
export default ForwardRef;
