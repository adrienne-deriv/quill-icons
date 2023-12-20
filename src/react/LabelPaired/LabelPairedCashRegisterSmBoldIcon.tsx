import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCashRegisterSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.75 3.75h6.125c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629v1.75a.852.852 0 0 1-.246.629.852.852 0 0 1-.629.246H5.688v.875h5.906c.456 0 .838.146 1.148.438.328.273.529.628.602 1.066l.629 4.512c.018.072.027.155.027.246V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52C.19 16.903.018 16.493 0 16v-1.75c0-.037.01-.073.027-.11l.63-4.511c.072-.438.273-.793.6-1.066.31-.292.694-.438 1.15-.438h1.53V7.25H1.75a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629v-1.75c0-.255.082-.465.246-.629a.852.852 0 0 1 .629-.246m.875 1.313c-.273.018-.42.164-.437.437.018.273.164.42.437.438H7c.273-.019.42-.165.438-.438-.019-.273-.165-.42-.438-.437zM1.313 16c.018.273.164.42.437.438h10.5c.273-.019.42-.165.438-.438v-.437H1.313zM12.03 9.82c-.036-.237-.173-.364-.41-.383H2.406c-.255.019-.4.146-.437.383l-.63 4.43h11.349zm-8.968.274c.4.036.62.255.656.656-.037.401-.255.62-.656.656-.402-.036-.62-.255-.657-.656.037-.401.255-.62.656-.656m1.968.656c.037-.401.255-.62.657-.656.4.036.62.255.656.656-.037.401-.255.62-.657.656-.4-.036-.62-.255-.656-.656m-.656 1.531c.401.037.62.255.656.656-.036.402-.255.62-.656.657-.401-.037-.62-.255-.656-.656.036-.402.255-.62.656-.657m3.281-1.531c.037-.401.255-.62.657-.656.4.036.62.255.656.656-.037.401-.255.62-.656.656-.402-.036-.62-.255-.657-.656M7 12.281c.401.037.62.255.656.656-.036.402-.255.62-.656.657-.401-.037-.62-.255-.656-.656.036-.402.255-.62.656-.657m3.281-1.531c.037-.401.255-.62.656-.656.402.036.62.255.657.656-.037.401-.255.62-.656.656-.402-.036-.62-.255-.657-.656m-.656 1.531c.401.037.62.255.656.656-.036.402-.255.62-.656.657-.401-.037-.62-.255-.656-.656.036-.402.255-.62.656-.657'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterSmBoldIcon);
export default ForwardRef;
