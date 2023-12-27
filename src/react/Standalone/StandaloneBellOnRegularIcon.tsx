import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBellOnRegularIcon = (
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
    <path d='M27.172 6.852c.156.338.065.612-.274.82l-2.5 1.25c-.364.156-.638.065-.82-.274-.156-.364-.065-.638.274-.82l2.5-1.25c.338-.156.611-.065.82.274Zm-11.797.273c.026-.39.234-.599.625-.625.39.026.599.234.625.625v.664c1.615.182 2.943.846 3.984 1.992 1.068 1.146 1.615 2.552 1.641 4.219v1.133c.026 1.77.651 3.294 1.875 4.57l.117.117c.339.339.508.742.508 1.211 0 .495-.17.899-.508 1.211-.312.339-.716.508-1.21.508H8.968c-.495 0-.899-.17-1.211-.508-.339-.312-.508-.716-.508-1.21 0-.47.17-.886.508-1.25l.117-.079c1.224-1.276 1.849-2.8 1.875-4.57V14c.052-1.667.599-3.073 1.64-4.219 1.042-1.146 2.37-1.81 3.985-1.992v-.664ZM16 9c-1.406.026-2.591.508-3.555 1.445-.937.964-1.419 2.149-1.445 3.555v1.133c-.026 2.11-.781 3.92-2.266 5.43l-.078.117a.486.486 0 0 0-.156.351c.026.287.182.443.469.469H23.03c.287-.026.443-.182.469-.469a.486.486 0 0 0-.156-.351l-.078-.117c-1.485-1.51-2.24-3.32-2.266-5.43V14c-.026-1.406-.52-2.591-1.484-3.555C18.578 9.508 17.406 9.026 16 9Zm-1.172 15.43c.209.52.6.794 1.172.82.573-.026.963-.3 1.172-.82.156-.365.43-.495.82-.39.339.155.456.416.352.78a2.608 2.608 0 0 1-.899 1.211A2.343 2.343 0 0 1 16 26.5a2.343 2.343 0 0 1-1.445-.469 2.608 2.608 0 0 1-.899-1.21c-.104-.365.013-.626.352-.782.39-.104.664.026.82.39ZM3.5 13.375c.026-.39.234-.599.625-.625H7.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H4.125c-.39-.026-.599-.234-.625-.625Zm21.25-.625h3.125c.39.026.599.234.625.625-.026.39-.234.599-.625.625H24.75c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625ZM5.102 7.672c-.339-.208-.43-.482-.274-.82.182-.339.456-.43.82-.274l2.5 1.25c.339.182.43.456.274.82-.182.339-.456.43-.82.274l-2.5-1.25Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBellOnRegularIcon);
export default ForwardRef;
