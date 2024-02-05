import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.125 9.375h-2.25v2.25h2.25zM1.875 7.5h2.25q.797 0 1.313.563Q6 8.577 6 9.375v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562Q0 12.422 0 11.625v-2.25q0-.797.563-1.312.514-.564 1.312-.563m2.25 9.375h-2.25v2.25h2.25zM1.875 15h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313Q4.922 21 4.125 21h-2.25q-.797 0-1.312-.562Q0 19.922 0 19.125v-2.25q0-.797.563-1.312Q1.077 15 1.875 15m0 9.375v2.25h2.25v-2.25zm-1.875 0q0-.797.563-1.312.514-.563 1.312-.563h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562Q0 27.422 0 26.625zm11.625-15h-2.25v2.25h2.25zM9.375 7.5h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562-.564-.516-.563-1.313v-2.25q0-.797.563-1.312.514-.564 1.312-.563m0 9.375v2.25h2.25v-2.25zm-1.875 0q0-.797.563-1.312Q8.577 15 9.375 15h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562-.564-.516-.563-1.313zm4.125 7.5h-2.25v2.25h2.25zM9.375 22.5h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562-.564-.516-.563-1.313v-2.25q0-.797.563-1.312.514-.563 1.312-.563m7.5-13.125v2.25h2.25v-2.25zm-1.875 0q0-.797.563-1.312.514-.564 1.312-.563h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562Q15 12.422 15 11.625zm4.125 7.5h-2.25v2.25h2.25zM16.875 15h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562Q15 19.922 15 19.125v-2.25q0-.797.563-1.312.514-.563 1.312-.563m0 9.375v2.25h2.25v-2.25zm-1.875 0q0-.797.563-1.312.514-.563 1.312-.563h2.25q.797 0 1.313.563.562.514.562 1.312v2.25q0 .797-.562 1.313-.516.562-1.313.562h-2.25q-.797 0-1.312-.562Q15 27.422 15 26.625z' />
    </g>
    <defs>
      <clipPath id='478e20fb6060a226b5fc0dfee93c714b__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridXlBoldIcon);
export default ForwardRef;
