import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.75 7.5h-9q-.703.046-.75.75v1.5q.046.703.75.75h9q.703-.047.75-.75v-1.5q-.047-.703-.75-.75m-9-1.5h9q.937.047 1.594.656.61.657.656 1.594v1.5a2.45 2.45 0 0 1-.656 1.594A2.45 2.45 0 0 1 12.75 12H9v1.5h10.875q1.172 0 1.969.75.843.703 1.031 1.828l1.078 7.735Q24 24 24 24.234V27q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27v-3q0-.094.047-.187l1.078-7.735q.188-1.125 1.031-1.828.797-.75 1.969-.75H7.5V12H3.75a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 1.5 9.75v-1.5q.047-.937.656-1.594A2.45 2.45 0 0 1 3.75 6M1.5 27q0 .657.422 1.078.421.422 1.078.422h18q.657 0 1.078-.422.422-.421.422-1.078v-1.5h-21zm19.875-10.687q-.234-1.219-1.453-1.313H4.125q-1.266.094-1.5 1.313L1.5 24h21zm-16.125.562q1.032.094 1.125 1.125-.093 1.032-1.125 1.125Q4.22 19.032 4.125 18q.095-1.03 1.125-1.125M8.625 18q.095-1.03 1.125-1.125 1.032.094 1.125 1.125-.093 1.032-1.125 1.125Q8.72 19.032 8.625 18M7.5 20.625q1.032.094 1.125 1.125-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125.095-1.03 1.125-1.125M13.125 18q.095-1.03 1.125-1.125 1.032.094 1.125 1.125-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125M12 20.625q1.032.094 1.125 1.125-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125.095-1.03 1.125-1.125M17.625 18q.094-1.03 1.125-1.125 1.032.094 1.125 1.125-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125M16.5 20.625q1.032.094 1.125 1.125-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125.095-1.03 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='221ecafe3a2045fddb62d20a800a3400__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterXlRegularIcon);
export default ForwardRef;
