import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.75 6.75h-10q-.547 0-.898.352Q1.5 7.452 1.5 8v15q0 .547.352.898.35.352.898.352h9.063q.585.703 1.328 1.21-.195.04-.391.04h-10q-1.055-.039-1.758-.742Q.29 24.054.25 23V8q.039-1.055.742-1.758T2.75 5.5h10q1.055.039 1.758.742T15.25 8v5.273q-.665.156-1.25.47V8q0-.547-.352-.898-.35-.352-.898-.352m-10 4.375q.039-.585.625-.625h8.75q.585.039.625.625-.039.585-.625.625h-8.75q-.586-.039-.625-.625m.625 3.125h7.5q.585.039.625.625-.039.585-.625.625h-7.5q-.586-.039-.625-.625.039-.585.625-.625m0 3.75h5q.585.039.625.625-.039.585-.625.625h-5q-.586-.039-.625-.625.039-.585.625-.625m13.75 6.25q1.171 0 2.188-.586a4.3 4.3 0 0 0 1.601-1.602q.585-1.015.586-2.187 0-1.172-.586-2.187a4.3 4.3 0 0 0-1.602-1.602 4.3 4.3 0 0 0-2.187-.586q-1.171 0-2.187.586-1.016.585-1.602 1.602a4.3 4.3 0 0 0-.586 2.187q0 1.171.586 2.188.585 1.015 1.601 1.601 1.017.585 2.188.586m0-10q1.523 0 2.813.742a5.64 5.64 0 0 1 2.07 2.07 5.7 5.7 0 0 1 .742 2.813 5.7 5.7 0 0 1-.742 2.813 5.64 5.64 0 0 1-2.07 2.07 5.54 5.54 0 0 1-2.813.742 5.54 5.54 0 0 1-2.812-.742 5.64 5.64 0 0 1-2.07-2.07 5.7 5.7 0 0 1-.743-2.813q0-1.485.742-2.812a5.64 5.64 0 0 1 2.07-2.07 5.54 5.54 0 0 1 2.813-.743m1.758 3.945q.43-.39.86 0 .39.43 0 .86l-2.813 2.812q-.43.39-.86 0l-1.562-1.562q-.39-.43 0-.86.43-.39.86 0L16.5 20.54z' />
    </g>
    <defs>
      <clipPath id='1c0ed947fbff7ddfb43f3ca035ea1f3f__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckLgRegularIcon);
export default ForwardRef;
