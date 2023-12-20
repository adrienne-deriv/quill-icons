import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneTelegramIcon = (
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
      d='M16 6.813c1.797.026 3.424.468 4.883 1.328a9.672 9.672 0 0 1 3.476 3.476c.86 1.458 1.302 3.086 1.328 4.883-.026 1.797-.468 3.424-1.328 4.883a9.672 9.672 0 0 1-3.476 3.476c-1.459.86-3.086 1.302-4.883 1.328-1.797-.026-3.424-.468-4.883-1.328a9.672 9.672 0 0 1-3.476-3.476c-.86-1.459-1.302-3.086-1.328-4.883.026-1.797.468-3.424 1.328-4.883a9.672 9.672 0 0 1 3.476-3.476c1.458-.86 3.086-1.302 4.883-1.328m4.492 6.601v-.39a.58.58 0 0 0-.156-.274.754.754 0 0 0-.39-.117c-.13 0-.443.091-.938.273-.469.156-1.354.508-2.656 1.055-.938.39-2.826 1.198-5.664 2.422-.443.182-.678.364-.704.547 0 .26.274.455.82.586.079 0 .157.013.235.039.234.104.495.182.781.234.287.078.521.117.703.117.313.026.665-.09 1.055-.351 2.63-1.797 3.998-2.709 4.102-2.735.052-.026.117-.013.195.04.052.078.065.13.04.156-.053.13-.34.43-.86.898-.495.495-.95.938-1.367 1.328-.26.209-.404.339-.43.39l-.235.235c-.26.209-.416.417-.468.625-.078.182.078.417.468.703.391.235.743.456 1.055.664.313.235.69.495 1.133.782l.312.234c.391.313.795.469 1.211.469.287.026.508-.3.664-.977l.391-2.226c.156-.886.3-1.758.43-2.618.13-.885.221-1.588.273-2.109'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTelegramIcon);
export default ForwardRef;
