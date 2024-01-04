import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneDerivP2pBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M11 13.688c-.234 0-.508.039-.82.039-.274.039-.586.078-.86.117v5.547h1.25v-1.875H11c.82 0 1.484-.157 1.914-.47.469-.273.703-.78.703-1.444 0-.665-.234-1.172-.664-1.446-.469-.312-1.094-.469-1.953-.469m.078 1.093c.195 0 .352 0 .508.04.156.038.273.077.39.117.118.078.196.156.235.273.078.078.078.234.078.39 0 .313-.078.547-.312.665-.235.117-.547.156-.977.156h-.43V14.82c.078 0 .157-.039.235-.039zm6.445.469c0-.234-.039-.469-.117-.664a1.487 1.487 0 0 0-.351-.508 2.073 2.073 0 0 0-.586-.312 2.686 2.686 0 0 0-.86-.118 2.28 2.28 0 0 0-1.015.235 2.326 2.326 0 0 0-.82.547l.585.82c.04-.04.118-.078.196-.117a.7.7 0 0 1 .273-.195c.078-.079.195-.118.352-.157.117-.078.234-.078.39-.078.196 0 .39.04.508.117.156.117.195.274.195.508 0 .117 0 .235-.078.352-.039.078-.117.195-.195.312l-.312.313-.352.351c-.156.157-.352.313-.508.469a6.795 6.795 0 0 0-.469.547c-.117.195-.234.39-.312.586a2.275 2.275 0 0 0-.117.742v.391h3.75v-1.016h-2.422c.039-.04.078-.117.117-.195.078-.078.156-.157.234-.274.118-.078.196-.195.274-.273l.273-.274.469-.468c.195-.157.313-.313.469-.508.117-.156.234-.352.312-.547.078-.195.117-.39.117-.586m2.5-1.562h.04c-.235 0-.508.039-.82.039-.313.039-.626.078-.9.117v5.547h1.29v-1.875h.39c.82 0 1.485-.157 1.954-.47.43-.273.664-.78.664-1.444 0-.665-.235-1.172-.664-1.446-.47-.312-1.094-.469-1.954-.469m.118 1.093c.156 0 .351 0 .468.04.157.038.313.077.391.117.117.078.195.156.234.273.078.078.118.234.118.39 0 .313-.118.547-.352.665-.195.117-.547.156-.977.156h-.39V14.82c.039 0 .117-.039.195-.039zm2.109-6.406H9.75c-1.055 0-1.875.86-1.875 1.875v12.5c0 1.055.82 1.875 1.875 1.875h12.5c1.016 0 1.875-.82 1.875-1.875v-12.5c0-1.016-.86-1.875-1.875-1.875M9.75 6.5h12.5c2.07 0 3.75 1.68 3.75 3.75v12.5c0 2.07-1.68 3.75-3.75 3.75H9.75C7.68 26.5 6 24.82 6 22.75v-12.5C6 8.18 7.68 6.5 9.75 6.5'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneDerivP2pBoldIcon);
export default ForwardRef;
