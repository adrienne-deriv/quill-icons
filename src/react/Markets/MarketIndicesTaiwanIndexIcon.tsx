import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketIndicesTaiwanIndexIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#FE0000'
      d='M26 8H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2'
    />
    <path fill='#02308A' d='M4 10v6h12V8H6a2 2 0 0 0-2 2' />
    <path
      fill='#02308A'
      fillRule='evenodd'
      d='M10.125 9.5 9.6 10.83a1.75 1.75 0 0 1 1.05 0zm-1.633 2.37c.13-.337.36-.623.655-.822l-1.368-.418zm-.117.63c0 .322.087.624.239.884L7.2 13.168l1.18-.809a2 2 0 0 0-.005.141m.552 1.276c.256.24.583.404.947.456l-1.05.97zm2.175-2.728c.295.2.526.485.656.821l.712-1.24zm.773 1.452q0-.07-.006-.14l1.18.808-1.413.216c.152-.26.239-.562.239-.884m-.553 1.276.104 1.427-1.05-.97c.364-.053.691-.217.946-.457m.303-1.3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M9.874 14.232a1.74 1.74 0 0 1-.947-.456l-.104 1.427zM8.614 13.384a1.74 1.74 0 0 1-.234-1.025l-1.18.809zM8.492 11.87c.13-.337.36-.623.655-.822l-1.368-.418zM9.6 10.83l.525-1.33.525 1.33a1.75 1.75 0 0 0-1.05 0M11.103 11.048c.294.2.525.485.655.821l.712-1.24zM11.87 12.36q.005.07.005.14c0 .322-.087.624-.24.884l1.415-.216zM11.322 13.776l.104 1.427-1.05-.97c.364-.053.691-.217.946-.457'
    />
    <path fill='#fff' d='M10.125 13.977a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M26 9H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1M6 8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#FE0000'
      d='M17.02 8H26a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5.971h13.02z'
    />
    <path
      fill='#02308A'
      fillRule='evenodd'
      d='M17.02 16V7.971H6a2 2 0 0 0-2 2V16zm-6.51-6.866-.525 1.33a1.75 1.75 0 0 1 1.05 0zm-1.633 2.37c.13-.336.361-.622.655-.821l-1.367-.42zm-.117.63c0 .323.087.624.24.884l-1.415-.216 1.18-.808a2 2 0 0 0-.005.14m.553 1.276c.255.24.583.404.946.456l-1.05.971zm2.175-2.727c.295.199.525.485.655.82l.713-1.24zm.772 1.451a2 2 0 0 0-.005-.14l1.18.808-1.414.216c.152-.26.24-.561.24-.884m-.552 1.276.104 1.427-1.05-.97c.363-.053.69-.217.946-.457m.302-1.299a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M10.26 13.866a1.75 1.75 0 0 1-.947-.456l-.104 1.427zM9 13.018a1.74 1.74 0 0 1-.234-1.024l-1.18.808zM8.877 11.504c.13-.336.361-.622.655-.821l-1.367-.42zM9.985 10.464l.525-1.33.525 1.33a1.75 1.75 0 0 0-1.05 0M11.488 10.683c.295.199.525.485.655.82l.713-1.24zM12.255 11.994a1.77 1.77 0 0 1-.234 1.024l1.414-.216zM11.708 13.41l.104 1.427-1.05-.97c.363-.053.69-.217.946-.457'
    />
    <path fill='#fff' d='M10.51 13.611a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M26 9H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1M6 8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#414652'
      d='M13 2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2z'
    />
    <path
      fill='#fff'
      d='M15.814 8v-.968h.72V3.384h-.72v-.968h2.656v.968h-.72v3.648h.72V8zM19.483 2.416h2.104q.552 0 1.008.176t.776.528q.32.345.496.872.176.52.176 1.216t-.176 1.224a2.4 2.4 0 0 1-.496.872q-.32.345-.776.52T21.587 8h-2.104zm2.104 4.504q.544 0 .856-.304t.312-.976v-.864q0-.672-.312-.976t-.856-.304H20.7V6.92zM29.46 8H28.05l-1.208-2.056h-.024L25.643 8h-1.312l1.792-2.888-1.704-2.696h1.416l1.088 1.888h.024l1.104-1.888h1.312l-1.72 2.72z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketIndicesTaiwanIndexIcon);
export default ForwardRef;
