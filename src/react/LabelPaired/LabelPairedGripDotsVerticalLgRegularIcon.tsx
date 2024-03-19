import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={30}
    viewBox='0 0 10 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 9.25c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625A.64.64 0 0 0 2.5 9.25m-2.5 0C0 8.586.352 8 .938 7.648c.546-.351 1.289-.351 1.875 0 .546.352.937.938.937 1.602 0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.876 0A1.87 1.87 0 0 1 0 9.25m2.5 6.25c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625A.64.64 0 0 0 2.5 15.5m-2.5 0c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.875 0 .546.352.937.938.937 1.602 0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.876 0A1.87 1.87 0 0 1 0 15.5m1.875 6.875a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625m0-2.5c.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.875-.352.585-.938.937-1.602.937a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.875.35-.547.937-.938 1.64-.938M8.75 9.25c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625m-2.5 0c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.875 0C9.609 8 10 8.586 10 9.25c0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.876 0a1.87 1.87 0 0 1-.937-1.64m1.875 6.875a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625m0-2.5c.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.874-.352.586-.938.938-1.602.938a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.875.35-.547.937-.938 1.64-.938m.625 8.125c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625m-2.5 0c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.875 0 .546.352.937.938.937 1.602 0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.876 0a1.87 1.87 0 0 1-.937-1.64' />
    </g>
    <defs>
      <clipPath id='d4bdb812342db980212c70702b1e19e4__a'>
        <path d='M0 0h10v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalLgRegularIcon);
export default ForwardRef;
