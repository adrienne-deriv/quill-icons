import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCreditCardXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9c-.844 0-1.5.703-1.5 1.5V12h24v-1.5c0-.797-.703-1.5-1.5-1.5zm-1.5 4.5v3h24v-3zm0 4.5v7.5c0 .844.656 1.5 1.5 1.5h21c.797 0 1.5-.656 1.5-1.5V18zM0 10.5c0-1.64 1.313-3 3-3h21c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm4.5 12.75c0-.375.328-.75.75-.75h3c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-3a.74.74 0 0 1-.75-.75m6 0c0-.375.328-.75.75-.75h6c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-6a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='1310123616b2c3b809ec68e7ec5a9807__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCreditCardXlRegularIcon);
export default ForwardRef;
