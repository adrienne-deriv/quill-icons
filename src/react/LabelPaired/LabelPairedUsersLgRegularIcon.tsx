import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 8.625c0 .703.352 1.29.938 1.64.546.352 1.289.352 1.875 0 .546-.35.937-.937.937-1.64 0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.875 0-.586.352-.938.938-.938 1.602m5 0c0 1.133-.625 2.148-1.562 2.734-.977.547-2.188.547-3.125 0A3.16 3.16 0 0 1 2.5 8.625c0-1.094.586-2.11 1.563-2.695.937-.547 2.148-.547 3.125 0 .937.586 1.562 1.601 1.562 2.695m3.75 3.125c-.898 0-1.719.508-2.187 1.25-.43.781-.43 1.758 0 2.5a2.54 2.54 0 0 0 2.187 1.25c.86 0 1.68-.469 2.148-1.25.43-.742.43-1.719 0-2.5-.468-.742-1.289-1.25-2.148-1.25m0 6.25c-1.367 0-2.578-.703-3.281-1.875-.664-1.133-.664-2.578 0-3.75.703-1.133 1.914-1.875 3.281-1.875 1.328 0 2.54.742 3.242 1.875.664 1.172.664 2.617 0 3.75C15.04 17.297 13.828 18 12.5 18m-2.305 2.5c-2.11 0-3.867 1.68-3.945 3.75h12.46c-.077-2.07-1.835-3.75-3.944-3.75zm0-1.25h4.57A5.235 5.235 0 0 1 20 24.484c0 .586-.469 1.016-1.055 1.016H6.015A1.01 1.01 0 0 1 5 24.484c0-2.89 2.305-5.234 5.195-5.234M20 6.75c-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.875A1.87 1.87 0 0 0 20 10.5c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.876-.352-.546-.938-.937-1.602-.937m0 5a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.126C17.852 6.126 18.867 5.5 20 5.5c1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.125-.586.976-1.601 1.562-2.695 1.562m.625 2.5H17.5c0-.43-.078-.82-.156-1.25h3.281C23.008 13 25 14.992 25 17.375a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625 3.134 3.134 0 0 0-3.125-3.125m-13.125 0H4.375a3.11 3.11 0 0 0-3.125 3.125.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625C0 14.992 1.953 13 4.375 13h3.281a4.6 4.6 0 0 0-.156 1.25' />
    </g>
    <defs>
      <clipPath id='73f6cffa276a963776355b713c80d8dc__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersLgRegularIcon);
export default ForwardRef;
