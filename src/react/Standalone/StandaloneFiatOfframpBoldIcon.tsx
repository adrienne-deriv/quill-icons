import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFiatOfframpBoldIcon = (
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
    <path
      fillOpacity={0.72}
      d='M11.156 14.977a3.297 3.297 0 0 0 2.852-1.641 3.282 3.282 0 0 0 0-3.281c-.586-1.016-1.68-1.64-2.852-1.68-1.172 0-2.265.664-2.851 1.68a3.282 3.282 0 0 0 0 3.28 3.297 3.297 0 0 0 2.851 1.642m-3.281.703v7.5c0 .78.664 1.445 1.445 1.445h7.5c-.742-.86-1.172-2.031-1.172-3.281 0-1.68.82-3.203 2.11-4.14l-2.461-2.462a5.07 5.07 0 0 1-4.14 2.11c-1.25 0-2.423-.43-3.282-1.172m12.93 8.945a3.251 3.251 0 0 0 3.28-3.281 3.276 3.276 0 0 0-3.28-3.282c-.43 0-.82.079-1.172.235h-.04a3.284 3.284 0 0 0-2.07 3.047 3.276 3.276 0 0 0 3.282 3.281m-1.25-8.281c.39-.117.82-.157 1.25-.157 2.851 0 5.195 2.305 5.195 5.157 0 2.851-2.344 5.156-5.195 5.156H9.32A3.318 3.318 0 0 1 6 23.18V11.695C6 8.844 8.305 6.5 11.156 6.5c2.852 0 5.156 2.344 5.156 5.195 0 .43-.039.86-.156 1.25zm1.875-6.211a.95.95 0 0 1 .937.937v3.633c0 .39-.234.703-.586.86a.898.898 0 0 1-1.015-.196l-3.633-3.633c-.352-.351-.352-.937 0-1.328a.968.968 0 0 1 1.328 0l2.031 2.031V11.07c0-.508.39-.937.938-.937m-.157 8.398h-.898v.39a1.465 1.465 0 0 0-1.016 1.407c0 .82.664 1.485 1.446 1.485.312 0 .547.234.547.546a.559.559 0 0 1-.547.547c-.274 0-.547-.273-.547-.547v-.156h-.899v.156c0 .625.391 1.172 1.016 1.368v.43h.898v-.391c.586-.235 1.016-.782 1.016-1.407 0-.82-.664-1.484-1.484-1.484a.559.559 0 0 1-.547-.547c0-.312.273-.547.547-.547.312 0 .547.235.547.547v.117h.937v-.117c0-.625-.43-1.172-1.016-1.406zM10.57 9.04h-.742v.781h-.742v.742h.742v2.266h-.742v.742h.742v.742h.742v-.742h.782v.742h.742v-.742c.586 0 1.094-.508 1.094-1.133 0-.273-.079-.546-.274-.742.43-.468.39-1.172-.078-1.601-.195-.196-.469-.274-.742-.274v-.78h-.742v.78h-.782zm1.524 3.008c.195 0 .351.195.351.39 0 .196-.156.391-.351.391H10.57v-.781zm0-1.485c.195 0 .351.157.351.391a.35.35 0 0 1-.351.352H10.57v-.742z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFiatOfframpBoldIcon);
export default ForwardRef;
