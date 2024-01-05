import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketDerivedJump10Icon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#FF444F'
      fillRule='evenodd'
      d='M4 12v2H2v-2zM8 12v4H6v-4zM12 12v17h-2V12zM16 26v6h-2v-6z'
      clipRule='evenodd'
    />
    <path
      fill='#0AA0B0'
      fillRule='evenodd'
      d='M20 22v7h-2v-7zM24 0v26h-2V0zM28 4v8h-2V4zM32 8v4h-2V8z'
      clipRule='evenodd'
    />
    <path
      fill='#414652'
      d='M10.064 6.728c-.123.235-.344.352-.664.352-.32 0-.541-.117-.664-.352s-.184-.565-.184-.992V4.68c0-.427.061-.757.184-.992s.344-.352.664-.352c.32 0 .541.117.664.352s.184.565.184.992v1.056c0 .427-.061.757-.184.992'
    />
    <path
      fill='#414652'
      fillRule='evenodd'
      d='M2 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.776 7.336c.352.507.893.76 1.624.76.73 0 1.272-.253 1.624-.76.352-.507.528-1.216.528-2.128 0-.912-.176-1.621-.528-2.128-.352-.507-.893-.76-1.624-.76-.73 0-1.272.253-1.624.76-.352.507-.528 1.216-.528 2.128 0 .912.176 1.621.528 2.128m-4.82-.304V8h3.887v-.968H5.66V2.416H3.82l-1.336 1.76.768.6 1.136-1.488h.072v3.744z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M2.955 8v-.968H4.46V3.288h-.072L3.251 4.776l-.768-.6 1.336-1.76h1.84v4.616h1.184V8zM9.4 8.096c-.73 0-1.272-.253-1.624-.76-.352-.507-.528-1.216-.528-2.128 0-.912.176-1.621.528-2.128.352-.507.893-.76 1.624-.76.73 0 1.272.253 1.624.76.352.507.528 1.216.528 2.128 0 .912-.176 1.621-.528 2.128-.352.507-.893.76-1.624.76m0-1.016c.32 0 .541-.117.664-.352s.184-.565.184-.992V4.68c0-.427-.061-.757-.184-.992s-.344-.352-.664-.352c-.32 0-.541.117-.664.352s-.184.565-.184.992v1.056c0 .427.061.757.184.992s.344.352.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedJump10Icon);
export default ForwardRef;