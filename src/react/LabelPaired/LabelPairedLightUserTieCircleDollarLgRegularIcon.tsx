import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightUserTieCircleDollarLgRegularIcon = (
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
      <path d='M0 24.328c0-3.086 2.188-5.664 5.117-6.21.274-.04.547.116.625.35l1.29 2.696c.273-.82.546-1.68.82-2.539H7.46A.64.64 0 0 1 6.836 18c0-.312.312-.625.625-.625h2.5c.351 0 .625.313.625.625a.617.617 0 0 1-.625.625h-.352c.274.86.547 1.719.82 2.54.43-.9.86-1.798 1.25-2.696a.66.66 0 0 1 .665-.352c.117.04.234.04.351.078a6.8 6.8 0 0 0-.195 1.563c-.703 1.484-1.367 2.93-2.07 4.414 0 .039-.04.078-.04.078h3.672c.391.508.82.898 1.329 1.25H1.17A1.15 1.15 0 0 1 0 24.328m1.25-.078h5.82s-.039-.04-.039-.078c-.742-1.563-1.445-3.125-2.187-4.688A4.956 4.956 0 0 0 1.25 24.25m2.5-13.75c0-1.758.938-3.437 2.5-4.297 1.523-.898 3.438-.898 5 0 1.523.86 2.5 2.54 2.5 4.297 0 1.797-.977 3.438-2.5 4.336-1.562.898-3.477.898-5 0a4.97 4.97 0 0 1-2.5-4.336m1.719-1.875c-.664 1.172-.664 2.617 0 3.75.703 1.172 1.914 1.875 3.281 1.875a3.72 3.72 0 0 0 3.242-1.875c.664-1.133.664-2.578 0-3.75-.664-1.133-1.914-1.875-3.242-1.875-1.367 0-2.578.742-3.281 1.875m2.304 14.219c.157.273.274.547.391.82a.632.632 0 0 0 1.133 0c.117-.273.273-.547.39-.82-.312-.938-.624-1.914-.937-2.852zm5.977-2.969c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m1.25 0a4.37 4.37 0 0 0 4.375 4.375c2.383 0 4.375-1.953 4.375-4.375 0-2.383-1.992-4.375-4.375-4.375-2.422 0-4.375 1.992-4.375 4.375m2.188-1.055c-.04-.742.39-1.21.859-1.445q.293-.175.703-.234v-.391c0-.352.273-.625.625-.625.313 0 .625.273.625.625v.39c.234.04.469.079.664.118.352.078.547.43.469.781-.078.313-.43.547-.742.43-.391-.078-.703-.157-1.055-.157-.234 0-.508.079-.703.157-.117.078-.156.117-.195.156v.117c0 .04 0 .078.156.195.234.118.547.196.937.313h.04c.35.117.82.234 1.171.469.39.234.781.625.82 1.25 0 .703-.39 1.172-.859 1.445a2.5 2.5 0 0 1-.703.234v.43a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-.469c-.352-.039-.664-.156-.937-.234-.079-.04-.157-.04-.196-.078-.351-.078-.508-.43-.43-.781.118-.313.47-.508.782-.391.078 0 .156.04.234.04.469.155.82.273 1.172.273.273 0 .547-.04.742-.118l.156-.156s.04-.078.04-.156-.04-.117-.196-.235c-.195-.117-.508-.195-.898-.312-.04 0-.078 0-.078-.04-.352-.077-.782-.194-1.133-.39-.39-.195-.781-.586-.82-1.21' />
    </g>
    <defs>
      <clipPath id='00297248ce9f4d32b5f5ac36c47bc302__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightUserTieCircleDollarLgRegularIcon);
export default ForwardRef;
