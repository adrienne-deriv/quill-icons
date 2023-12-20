import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedAtLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10 7.375c-2.292.052-4.206.846-5.742 2.383-1.537 1.536-2.33 3.45-2.383 5.742.052 2.292.846 4.206 2.383 5.742 1.536 1.537 3.45 2.33 5.742 2.383.573.052.885.365.938.938-.053.572-.365.885-.938.937-1.875-.026-3.555-.482-5.04-1.367a9.907 9.907 0 0 1-3.593-3.594C.482 19.055.026 17.375 0 15.5c.026-1.875.482-3.555 1.367-5.04a9.907 9.907 0 0 1 3.594-3.593C6.445 5.982 8.125 5.526 10 5.5c1.875.026 3.555.482 5.04 1.367a9.907 9.907 0 0 1 3.593 3.594c.885 1.484 1.341 3.164 1.367 5.039v1.094c-.026 1.015-.378 1.862-1.055 2.539-.677.677-1.523 1.029-2.539 1.055-1.276-.053-2.252-.56-2.93-1.524-.91.964-2.07 1.471-3.476 1.523-1.328-.026-2.435-.481-3.32-1.367-.886-.885-1.341-1.992-1.367-3.32.026-1.328.481-2.435 1.367-3.32.885-.886 1.992-1.341 3.32-1.367 1.146.025 2.135.377 2.969 1.054.182-.26.443-.404.781-.43.573.053.885.365.938.938v4.219c0 .494.169.898.507 1.21.313.34.716.509 1.211.509.495 0 .899-.17 1.211-.508.339-.313.508-.716.508-1.211V15.5c-.052-2.292-.846-4.206-2.383-5.742-1.536-1.537-3.45-2.33-5.742-2.383m2.813 8.125c-.027-1.068-.495-1.875-1.407-2.422-.937-.52-1.875-.52-2.812 0-.912.547-1.38 1.354-1.406 2.422.026 1.068.494 1.875 1.406 2.422.937.52 1.875.52 2.812 0 .912-.547 1.38-1.354 1.406-2.422'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtLgBoldIcon);
export default ForwardRef;
