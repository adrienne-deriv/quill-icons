import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.531 3.75H3.72c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H1.53a.216.216 0 0 0-.218.218V7.47c0 .383-.301.656-.657.656A.63.63 0 0 1 0 7.469V5.28c0-.82.684-1.531 1.531-1.531m8.75 0h2.188c.82 0 1.531.71 1.531 1.531V7.47c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V5.28c0-.11-.11-.218-.22-.218h-2.187a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656M1.313 14.031v2.188c0 .136.082.218.218.218H3.72c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H1.53A1.53 1.53 0 0 1 0 16.219V14.03c0-.355.273-.656.656-.656.356 0 .657.3.657.656m12.687 0v2.188c0 .847-.71 1.531-1.531 1.531H10.28a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657h2.188c.11 0 .219-.082.219-.218V14.03c0-.355.273-.656.656-.656.355 0 .656.3.656.656M2.625 10.75c0-1.559.82-2.98 2.188-3.773a4.32 4.32 0 0 1 4.375 0c1.34.793 2.187 2.214 2.187 3.773 0 1.586-.848 3.008-2.187 3.8a4.32 4.32 0 0 1-4.376 0 4.35 4.35 0 0 1-2.187-3.8m3.5-1.094c0-.355-.3-.656-.656-.656-.383 0-.657.3-.657.656 0 .383.274.656.657.656a.65.65 0 0 0 .656-.656m2.406.656a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656 0 .383.273.656.656.656m-3.91 1.45c-.164.164-.164.437 0 .629A3.37 3.37 0 0 0 7 13.375c.93 0 1.75-.383 2.352-.984.164-.192.164-.465 0-.63-.192-.163-.465-.163-.63 0A2.33 2.33 0 0 1 7 12.5a2.4 2.4 0 0 1-1.75-.738c-.164-.164-.437-.164-.629 0' />
    </g>
    <defs>
      <clipPath id='3ee9e281117b827bee6e2ee0346e0fd7__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderSmFillIcon);
export default ForwardRef;
