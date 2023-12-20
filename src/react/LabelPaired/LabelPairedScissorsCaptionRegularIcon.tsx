import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedScissorsCaptionRegularIcon = (
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
        d='M11.906 13.86c-.156.171-.328.187-.515.046l-3.563-3.023c-.172-.172-.187-.352-.047-.54.157-.155.328-.163.516-.023l3.562 3.024c.172.156.188.328.047.515m-5.18-4.852 4.665-3.914c.187-.14.359-.125.515.047.14.187.125.359-.047.515L4.9 11.54c.234.39.351.836.351 1.336-.016.75-.273 1.367-.773 1.852-.485.5-1.102.757-1.852.773-.75-.016-1.367-.273-1.852-.773-.5-.485-.757-1.102-.773-1.852.016-.75.273-1.367.773-1.852.485-.5 1.102-.757 1.852-.773.703.016 1.297.25 1.781.703L6.141 9.5 4.406 8.047c-.484.453-1.078.687-1.781.703-.75-.016-1.367-.273-1.852-.773C.273 7.492.016 6.875 0 6.125c.016-.75.273-1.367.773-1.852.485-.5 1.102-.757 1.852-.773.75.016 1.367.273 1.852.773.5.485.757 1.102.773 1.852 0 .5-.117.945-.352 1.336zM2.626 8c.703-.016 1.242-.328 1.617-.937.344-.625.344-1.25 0-1.875-.375-.61-.914-.922-1.617-.938-.703.016-1.242.328-1.617.938-.344.625-.344 1.25 0 1.875.375.609.914.921 1.617.937m0 3c-.703.016-1.242.328-1.617.938-.344.624-.344 1.25 0 1.874.375.61.914.922 1.617.938.703-.016 1.242-.328 1.617-.937.344-.626.344-1.25 0-1.876-.375-.609-.914-.921-1.617-.937'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsCaptionRegularIcon);
export default ForwardRef;
