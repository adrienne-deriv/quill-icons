import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePlaceholderBoldIcon = (
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
      d='M10.688 7.75h.624c.573.052.886.365.938.938-.052.572-.365.885-.937.937h-.626c-.442 0-.807.156-1.093.469a1.418 1.418 0 0 0-.469 1.094v.624c-.052.573-.365.886-.937.938-.573-.052-.886-.365-.938-.937v-.626c.026-.963.365-1.77 1.016-2.421.65-.651 1.458-.99 2.422-1.016M8.188 14c.572.052.885.365.937.938v3.124c-.052.573-.365.886-.937.938-.573-.052-.886-.365-.938-.937v-3.125c.052-.573.365-.886.938-.938m15.625 0c.572.052.885.365.937.938v3.124c-.052.573-.365.886-.937.938-.573-.052-.886-.365-.938-.937v-3.125c.052-.573.365-.886.938-.938m0-1.25c-.573-.052-.886-.365-.938-.937v-.626c0-.442-.156-.807-.469-1.093a1.418 1.418 0 0 0-1.093-.469h-.625c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h.625c.963.026 1.77.365 2.421 1.016.651.65.99 1.458 1.016 2.422v.624c-.052.573-.365.886-.937.938m.937 8.438v.625c-.026.963-.365 1.77-1.016 2.421-.65.651-1.458.99-2.422 1.016h-.625c-.572-.052-.885-.365-.937-.937.052-.573.365-.886.938-.938h.625c.442 0 .807-.156 1.093-.469.313-.286.469-.65.469-1.093v-.625c.052-.573.365-.886.938-.938.572.052.885.365.937.938m-15.625 0v.625c0 .442.156.807.469 1.093.286.313.65.469 1.094.469h.624c.573.052.886.365.938.938-.052.572-.365.885-.937.937h-.626c-.963-.026-1.77-.365-2.421-1.016-.651-.65-.99-1.458-1.016-2.422v-.625c.052-.572.365-.885.938-.937.572.052.885.365.937.938m5.313 4.062c-.573-.052-.886-.365-.938-.937.052-.573.365-.886.938-.938h3.124c.573.052.886.365.938.938-.052.572-.365.885-.937.937zM13.5 8.688c.052-.573.365-.886.938-.938h3.124c.573.052.886.365.938.938-.052.572-.365.885-.937.937h-3.125c-.573-.052-.886-.365-.938-.937'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlaceholderBoldIcon);
export default ForwardRef;
