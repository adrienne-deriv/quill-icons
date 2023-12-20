import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedKeyboardXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3 10.5c-.437 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078v12c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h21c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078V12c0-.437-.14-.797-.422-1.078-.281-.281-.64-.422-1.078-.422zM0 12c.031-.844.328-1.547.89-2.11C1.454 9.329 2.157 9.032 3 9h21c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v12c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 25.546.032 24.843 0 24zm4.125.375h.75c.469.031.719.281.75.75v.75c-.031.469-.281.719-.75.75h-.75c-.469-.031-.719-.281-.75-.75v-.75c.031-.469.281-.719.75-.75m-.75 5.25c.031-.469.281-.719.75-.75h.75c.469.031.719.281.75.75v.75c-.031.469-.281.719-.75.75h-.75c-.469-.031-.719-.281-.75-.75zm.75 3.75h.75c.469.031.719.281.75.75v.75c-.031.469-.281.719-.75.75h-.75c-.469-.031-.719-.281-.75-.75v-.75c.031-.469.281-.719.75-.75m3.75-8.25c.031-.469.281-.719.75-.75h.75c.469.031.719.281.75.75v.75c-.031.469-.281.719-.75.75h-.75c-.469-.031-.719-.281-.75-.75zm.75 3.75h.75c.469.031.719.281.75.75v.75c-.031.469-.281.719-.75.75h-.75c-.469-.031-.719-.281-.75-.75v-.75c.031-.469.281-.719.75-.75m3.75-3.75c.031-.469.281-.719.75-.75h.75c.469.031.719.281.75.75v.75c-.031.469-.281.719-.75.75h-.75c-.469-.031-.719-.281-.75-.75zm.75 3.75h.75c.469.031.719.281.75.75v.75c-.031.469-.281.719-.75.75h-.75c-.469-.031-.719-.281-.75-.75v-.75c.031-.469.281-.719.75-.75m3.75-3.75c.031-.469.281-.719.75-.75h.75c.469.031.719.281.75.75v.75c-.031.469-.281.719-.75.75h-.75c-.469-.031-.719-.281-.75-.75zm.75 3.75h.75c.469.031.719.281.75.75v.75c-.031.469-.281.719-.75.75h-.75c-.469-.031-.719-.281-.75-.75v-.75c.031-.469.281-.719.75-.75m3.75-3.75c.031-.469.281-.719.75-.75h.75c.469.031.719.281.75.75v.75c-.031.469-.281.719-.75.75h-.75c-.469-.031-.719-.281-.75-.75zm.75 3.75h.75c.469.031.719.281.75.75v.75c-.031.469-.281.719-.75.75h-.75c-.469-.031-.719-.281-.75-.75v-.75c.031-.469.281-.719.75-.75m-.75 5.25c.031-.469.281-.719.75-.75h.75c.469.031.719.281.75.75v.75c-.031.469-.281.719-.75.75h-.75c-.469-.031-.719-.281-.75-.75zM8.25 21.75h10.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H8.25c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardXlRegularIcon);
export default ForwardRef;
