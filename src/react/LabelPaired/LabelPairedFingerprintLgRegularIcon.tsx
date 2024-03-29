import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.25 15.5v1.875A.64.64 0 0 1 .625 18 .617.617 0 0 1 0 17.375V15.5c0-5.508 4.453-10 10-10a10 10 0 0 1 7.773 3.71.67.67 0 0 1-.117.9c-.273.195-.664.156-.86-.118C15.197 8.04 12.735 6.75 10 6.75c-4.844 0-8.75 3.945-8.75 8.75m18.36-2.656c.234.86.39 1.758.39 2.656v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V15.5a7.7 7.7 0 0 0-.352-2.305c-.078-.351.118-.703.47-.78.312-.08.663.116.741.429M10 8.625h-.04a6.86 6.86 0 0 1 6.876 6.875v.977c0 1.171-.04 2.343-.195 3.515-.04.313-.313.508-.625.508-.391 0-.664-.312-.625-.703.156-1.094.234-2.188.234-3.32V15.5c0-3.086-2.54-5.625-5.625-5.625-.703 0-1.367.156-1.992.352-.235.117-.547.039-.742-.157-.274-.312-.196-.82.195-.937A6.85 6.85 0 0 1 10 8.625m-4.336 2.46a.655.655 0 0 1-.039.86 5.7 5.7 0 0 0-1.25 3.555v.977c0 1.21-.156 2.421-.469 3.593a.59.59 0 0 1-.586.43c-.43 0-.703-.39-.625-.781.274-1.055.43-2.149.43-3.242V15.5c0-1.68.586-3.242 1.64-4.453.235-.274.665-.235.9.039M10 11.75c2.07 0 3.75 1.68 3.75 3.75v.977c0 1.64-.195 3.242-.508 4.804-.039.274-.312.469-.586.469-.43 0-.703-.352-.625-.742.313-1.485.469-3.008.469-4.531V15.5c0-1.367-1.133-2.5-2.5-2.5a2.49 2.49 0 0 0-2.5 2.5v.977c0 1.64-.234 3.28-.703 4.843a.59.59 0 0 1-.586.43c-.43 0-.703-.39-.586-.82.39-1.446.625-2.93.625-4.453V15.5c0-2.07 1.68-3.75 3.75-3.75m.625 3.75v.977c0 2.539-.469 5.039-1.406 7.421l-.235.586c-.117.352-.468.508-.78.352-.352-.117-.509-.469-.352-.781l.195-.625a19.1 19.1 0 0 0 1.328-6.953V15.5c0-.312.273-.625.625-.625.313 0 .625.313.625.625' />
    </g>
    <defs>
      <clipPath id='279bf0990648fa17172595279d25d4dd__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintLgRegularIcon);
export default ForwardRef;
