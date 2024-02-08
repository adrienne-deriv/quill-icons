import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedInstagramLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 11.008q1.913.04 3.164 1.328 1.29 1.25 1.328 3.164-.04 1.913-1.328 3.164-1.25 1.29-3.164 1.328-1.914-.04-3.164-1.328-1.29-1.25-1.328-3.164.04-1.914 1.328-3.164 1.25-1.29 3.164-1.328m0 7.422q1.25-.04 2.07-.86t.86-2.07q-.04-1.25-.86-2.07T9 12.57q-1.25.04-2.07.86t-.86 2.07q.04 1.25.86 2.07t2.07.86m5.742-7.617a1.27 1.27 0 0 0-.312-.743 1.1 1.1 0 0 0-.742-.273q-.469 0-.743.273a1.01 1.01 0 0 0-.312.742q.078.977 1.055 1.055.936-.078 1.054-1.055m2.969 1.093v-.039q.039.781.039 2.227v2.812q0 1.407-.04 2.188.001 2.148-1.444 3.672-1.524 1.445-3.633 1.406-.781.039-2.227.078H7.594a93 93 0 0 1-2.188-.078q-2.148.039-3.672-1.406Q.29 21.242.328 19.094.25 18.313.25 16.906v-2.812q0-1.446.078-2.227Q.29 9.758 1.734 8.234 3.297 6.79 5.406 6.79q.742-.039 2.188-.039h2.812q1.446 0 2.227.04 2.109-.001 3.633 1.444 1.445 1.524 1.445 3.672m-1.875 8.75q.273-.78.312-2.11.08-1.327.04-2.421v-1.25q.04-1.095-.04-2.422-.039-1.327-.312-2.11a3.12 3.12 0 0 0-1.68-1.679q-.78-.273-2.11-.312a83 83 0 0 0-2.421-.04h-1.25a26 26 0 0 0-2.422.04q-1.289.039-2.11.312a3.12 3.12 0 0 0-1.679 1.68q-.273.78-.312 2.11-.04 1.327-.04 2.421v1.25q0 1.095.04 2.422.039 1.289.312 2.11a3.12 3.12 0 0 0 1.68 1.679q.82.273 2.11.312 1.328.04 2.421.04h1.25q1.095 0 2.422-.04 1.327-.039 2.11-.312a3.12 3.12 0 0 0 1.679-1.68' />
    </g>
    <defs>
      <clipPath id='e40e8b3bd93957da7a9ebd307035b6f1__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInstagramLgIcon);
export default ForwardRef;
