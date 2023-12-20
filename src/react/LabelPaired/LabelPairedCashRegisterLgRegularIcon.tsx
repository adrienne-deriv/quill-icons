import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCashRegisterLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.625 6.75h-7.5c-.39.026-.599.234-.625.625v1.25c.026.39.234.599.625.625h7.5c.39-.026.599-.234.625-.625v-1.25c-.026-.39-.234-.599-.625-.625m-7.5-1.25h7.5c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v1.25c-.026.52-.208.964-.547 1.328-.364.339-.807.521-1.328.547H7.5v1.25h9.063c.65 0 1.197.208 1.64.625.469.39.755.898.86 1.523l.898 6.446c.026.104.039.221.039.351V23c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742C.273 24.289.026 23.703 0 23v-2.5c0-.052.013-.104.04-.156l.898-6.446c.104-.625.39-1.132.859-1.523.443-.417.99-.625 1.64-.625H6.25V10.5H3.125a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-1.25c.026-.52.208-.964.547-1.328.364-.339.807-.521 1.328-.547M1.25 23c0 .365.117.664.352.898.234.235.533.352.898.352h15c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-1.25H1.25zm16.563-8.906c-.13-.677-.534-1.042-1.211-1.094H3.438c-.704.052-1.12.417-1.25 1.094L1.25 20.5h17.5zm-13.438.469c.573.052.885.364.938.937-.053.573-.365.885-.938.938-.573-.053-.885-.365-.937-.938.052-.573.364-.885.937-.937m2.813.937c.052-.573.364-.885.937-.937.573.052.885.364.938.937-.053.573-.365.885-.938.938-.573-.053-.885-.365-.937-.938m-.938 2.188c.573.052.885.364.938.937-.053.573-.365.885-.938.938-.573-.053-.885-.365-.937-.938.052-.573.364-.885.937-.937m4.688-2.188c.052-.573.364-.885.937-.937.573.052.885.364.938.937-.053.573-.365.885-.938.938-.573-.053-.885-.365-.937-.938M10 17.688c.573.052.885.364.938.937-.053.573-.365.885-.938.938-.573-.053-.885-.365-.937-.938.052-.573.364-.885.937-.937m4.688-2.188c.052-.573.364-.885.937-.937.573.052.885.364.938.937-.053.573-.365.885-.938.938-.573-.053-.885-.365-.937-.938m-.938 2.188c.573.052.885.364.938.937-.053.573-.365.885-.938.938-.573-.053-.885-.365-.937-.938.052-.573.364-.885.937-.937'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterLgRegularIcon);
export default ForwardRef;
