import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M19.336 12.023c.156.352.039.704-.234.977l-1.68 1.523c.039.313.039.665.039.977 0 .352 0 .703-.04 1.016l1.68 1.523c.274.234.391.625.235.977a8 8 0 0 1-.586 1.328l-.195.312c-.274.43-.547.86-.86 1.211-.234.313-.625.39-.976.274l-2.149-.664c-.547.39-1.133.703-1.718.976l-.508 2.227a.93.93 0 0 1-.703.703 11.7 11.7 0 0 1-3.32 0 .93.93 0 0 1-.704-.703l-.508-2.227a9.3 9.3 0 0 1-1.718-.976l-2.149.664c-.351.117-.742.039-.976-.235-.313-.39-.586-.82-.86-1.25l-.195-.312c-.234-.43-.43-.86-.586-1.328-.156-.352-.04-.703.234-.977l1.68-1.523C2.5 16.203 2.5 15.852 2.5 15.5c0-.312 0-.664.04-.977L.86 13c-.274-.273-.391-.625-.235-.977a8 8 0 0 1 .586-1.328l.195-.312c.274-.43.547-.86.86-1.25.234-.274.625-.352.976-.235l2.149.665c.547-.391 1.132-.743 1.718-.977l.508-2.227a.93.93 0 0 1 .703-.703C8.867 5.578 9.414 5.5 10 5.5c.547 0 1.094.078 1.64.156.352.04.626.352.704.703l.508 2.227c.625.234 1.171.586 1.718.976l2.149-.664c.351-.117.742-.039.976.235.313.39.586.82.86 1.25l.195.312c.234.43.43.86.625 1.328zM10 18.625c1.094 0 2.11-.586 2.695-1.562.547-.938.547-2.149 0-3.125C12.11 13 11.094 12.375 10 12.375c-1.133 0-2.148.625-2.734 1.563-.547.976-.547 2.187 0 3.124A3.16 3.16 0 0 0 10 18.626' />
    </g>
    <defs>
      <clipPath id='5872c13ab835247afac26ee696c5bfee__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearLgFillIcon);
export default ForwardRef;
