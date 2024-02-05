import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInstagramCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.5 6.805q1.149.022 1.898.797.774.75.797 1.898-.022 1.149-.797 1.898-.75.774-1.898.797-1.149-.022-1.898-.797-.774-.75-.797-1.898.022-1.149.797-1.898.75-.774 1.898-.797m0 4.453q.75-.024 1.242-.516T7.258 9.5q-.024-.75-.516-1.242T5.5 7.742q-.75.024-1.242.516T3.742 9.5q.024.75.516 1.242t1.242.516m3.445-4.57a.76.76 0 0 0-.187-.446.65.65 0 0 0-.445-.164.6.6 0 0 0-.633.61q.046.585.633.632.561-.046.632-.633m1.782.656V7.32q.023.47.023 1.336v1.688q0 .843-.023 1.312 0 1.29-.868 2.203-.914.868-2.18.844-.468.024-1.335.047H4.656a55 55 0 0 1-1.312-.047q-1.29.024-2.203-.844-.867-.913-.844-2.203-.047-.468-.047-1.312V8.656q0-.867.047-1.336a2.97 2.97 0 0 1 .844-2.18 3.14 3.14 0 0 1 2.203-.867q.445-.023 1.312-.023h1.688q.867 0 1.336.023 1.265 0 2.18.868.867.913.867 2.203m-1.125 5.25q.163-.47.187-1.266.047-.796.024-1.453v-.75q.023-.656-.024-1.453-.024-.796-.187-1.266a1.87 1.87 0 0 0-1.008-1.008q-.47-.163-1.266-.187a50 50 0 0 0-1.453-.024h-.75a16 16 0 0 0-1.453.024q-.774.024-1.266.187-.703.306-1.008 1.008-.163.47-.187 1.266a50 50 0 0 0-.024 1.453v.75q0 .657.024 1.453.024.774.187 1.266.306.703 1.008 1.008.492.163 1.266.187.796.024 1.453.024h.75q.657 0 1.453-.024.797-.024 1.266-.187.703-.306 1.008-1.008' />
    </g>
    <defs>
      <clipPath id='e5461fc3c167f3584964bca7d35d0d9d__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInstagramCaptionIcon);
export default ForwardRef;
