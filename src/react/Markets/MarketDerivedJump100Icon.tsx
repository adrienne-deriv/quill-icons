import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const MarketDerivedJump100Icon = (
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
      d='M4 12v2H2v-2h2ZM8 12v4H6v-4h2ZM12 12v17h-2V12h2ZM16 26v6h-2v-6h2Z'
      clipRule='evenodd'
    />
    <path
      fill='#0AA0B0'
      fillRule='evenodd'
      d='M20 22v7h-2v-7h2ZM24 0v26h-2V0h2ZM28 4v8h-2V4h2ZM32 8v4h-2V8h2Z'
      clipRule='evenodd'
    />
    <path
      fill='#414652'
      d='M9.502 7.08c.32 0 .54-.117.664-.352.122-.235.184-.565.184-.992V4.68c0-.427-.062-.757-.184-.992-.123-.235-.344-.352-.664-.352-.32 0-.542.117-.664.352-.123.235-.184.565-.184.992v1.056c0 .427.06.757.184.992.122.235.344.352.664.352ZM14.962 6.728c-.122.235-.344.352-.664.352-.32 0-.54-.117-.664-.352-.122-.235-.184-.565-.184-.992V4.68c0-.427.062-.757.184-.992.123-.235.344-.352.664-.352.32 0 .542.117.664.352.123.235.184.565.184.992v1.056c0 .427-.06.757-.184.992Z'
    />
    <path
      fill='#414652'
      fillRule='evenodd'
      d='M2 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.502 8.096c-.731 0-1.272-.253-1.624-.76-.352-.507-.528-1.216-.528-2.128 0-.912.176-1.621.528-2.128.352-.507.893-.76 1.624-.76.73 0 1.272.253 1.624.76.352.507.528 1.216.528 2.128 0 .912-.176 1.621-.528 2.128-.352.507-.894.76-1.624.76ZM3.057 8v-.968H4.56V3.288h-.072L3.353 4.776l-.768-.6 1.336-1.76h1.84v4.616h1.184V8H3.057Zm9.617-.664c.352.507.894.76 1.624.76.731 0 1.272-.253 1.624-.76.352-.507.528-1.216.528-2.128 0-.912-.176-1.621-.528-2.128-.352-.507-.893-.76-1.624-.76-.73 0-1.272.253-1.624.76-.352.507-.528 1.216-.528 2.128 0 .912.176 1.621.528 2.128Z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M3.057 8v-.968H4.56V3.288h-.072L3.353 4.776l-.768-.6 1.336-1.76h1.84v4.616h1.184V8H3.057ZM9.502 8.096c-.731 0-1.272-.253-1.624-.76-.352-.507-.528-1.216-.528-2.128 0-.912.176-1.621.528-2.128.352-.507.893-.76 1.624-.76.73 0 1.272.253 1.624.76.352.507.528 1.216.528 2.128 0 .912-.176 1.621-.528 2.128-.352.507-.894.76-1.624.76Zm0-1.016c.32 0 .54-.117.664-.352.122-.235.184-.565.184-.992V4.68c0-.427-.062-.757-.184-.992-.123-.235-.344-.352-.664-.352-.32 0-.542.117-.664.352-.123.235-.184.565-.184.992v1.056c0 .427.06.757.184.992.122.235.344.352.664.352ZM14.298 8.096c-.73 0-1.272-.253-1.624-.76-.352-.507-.528-1.216-.528-2.128 0-.912.176-1.621.528-2.128.352-.507.894-.76 1.624-.76.731 0 1.272.253 1.624.76.352.507.528 1.216.528 2.128 0 .912-.176 1.621-.528 2.128-.352.507-.893.76-1.624.76Zm0-1.016c.32 0 .542-.117.664-.352.123-.235.184-.565.184-.992V4.68c0-.427-.06-.757-.184-.992-.122-.235-.344-.352-.664-.352-.32 0-.54.117-.664.352-.122.235-.184.565-.184.992v1.056c0 .427.062.757.184.992.123.235.344.352.664.352Z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedJump100Icon);
export default ForwardRef;
