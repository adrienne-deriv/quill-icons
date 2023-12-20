import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleDollarCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.25 9.5a5.403 5.403 0 0 0-.703-2.625 5.394 5.394 0 0 0-1.922-1.922 5.25 5.25 0 0 0-5.25 0 5.393 5.393 0 0 0-1.922 1.922A5.403 5.403 0 0 0 .75 9.5c.016.953.25 1.828.703 2.625a5.393 5.393 0 0 0 1.922 1.922 5.25 5.25 0 0 0 5.25 0 5.394 5.394 0 0 0 1.922-1.922A5.403 5.403 0 0 0 11.25 9.5M0 9.5a6.143 6.143 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.075 6.075 0 0 1 6 3.5c1.047 0 2.047.266 3 .797A6.2 6.2 0 0 1 11.203 6.5c.516.906.781 1.906.797 3a6.141 6.141 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.075 6.075 0 0 1-3 .797 6.075 6.075 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.142 6.142 0 0 1 0 9.5m6.375-3.187v.539c.313.03.625.093.938.187.015.016.03.024.046.024s.032.007.047.023c.219.078.305.226.258.445-.078.219-.226.313-.445.282a1.286 1.286 0 0 0-.164-.07 8.482 8.482 0 0 0-.54-.118c-.468-.062-.859-.023-1.171.117-.282.14-.43.297-.446.469-.046.219.032.383.235.492.25.156.601.29 1.055.399h.023c.453.109.875.28 1.266.515.453.328.64.766.562 1.313-.125.515-.422.86-.89 1.03a2.431 2.431 0 0 1-.774.165v.563c-.031.234-.156.359-.375.374-.234-.015-.36-.14-.375-.374v-.61c-.234-.047-.492-.11-.773-.187a5.55 5.55 0 0 1-.47-.164c-.218-.094-.296-.25-.234-.47.079-.202.235-.28.47-.234l.468.141c.281.094.5.156.656.188.469.062.844.03 1.125-.094.25-.11.39-.266.422-.469.047-.234-.031-.422-.234-.562a3.417 3.417 0 0 0-.961-.375A.208.208 0 0 0 6 9.828a.18.18 0 0 0-.07-.023 5.19 5.19 0 0 1-1.22-.47 1.5 1.5 0 0 1-.468-.515c-.125-.218-.156-.468-.094-.75.125-.5.422-.843.891-1.03.188-.063.383-.118.586-.165v-.562c.016-.235.14-.36.375-.375.219.015.344.14.375.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarCaptionRegularIcon);
export default ForwardRef;
