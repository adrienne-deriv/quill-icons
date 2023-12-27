import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneHuaweiIcon = (
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
    <path d='M7.29 10.406s4.022 4.844 6.991 11.29v.038l-.039.078c-.039.04-.078 0-.078 0-1.094-.546-5.703-2.89-7.617-4.726 0 0-1.172-.938-1.29-2.5v-.39c.118-1.954 2.032-3.79 2.032-3.79Zm6.25 12.969v.04-.04s0 .04-.04.117c-.742.508-3.047 2.11-4.063 2.383-1.445.352-2.851-.82-3.71-2.305l7.695-.273s.078 0 .117.078Zm.077-.781s.04 0 .04.039v.078s-.04.039-.079.039H7.797s-.742 0-1.445-.313c0 0-1.602-.546-2.461-2.304 0 0-.391-.781-.391-1.914v-.04c0-.429.04-.898.195-1.366 0 0 6.563 3.476 9.922 5.78Zm-.703-15.235V7.32s.899-.195 1.25-.234c0 0 2.266 2.969 1.172 13.984 0 .04-.04.04-.04.078l-.038.04s-.04 0-.117-.04c-.704-1.054-4.024-5.976-4.727-9.023 0 0-.156-.469-.156-1.094v-.39a3.67 3.67 0 0 1 .781-2.11 3.295 3.295 0 0 1 1.875-1.172Zm8.633 2.344c.39.977 0 2.422 0 2.422-.664 3.008-3.985 7.93-4.727 9.023 0 0-.039.04-.117.04 0 0-.039-.04-.078-.118-1.094-11.054 1.172-13.984 1.172-13.984.625.117 1.21.234 1.21.234 2.032.508 2.54 2.383 2.54 2.383Zm-3.008 13.633v-.04H18.5l7.734.274c-1.172 1.992-2.422 2.344-3.125 2.344h-.156c-.273 0-.469-.039-.469-.039-1.054-.313-3.28-1.875-4.023-2.383-.04-.039-.04-.117-.04-.117.04-.04.118-.04.118-.04Zm8.125-8.79c-.039 1.563-1.25 2.54-1.25 2.54-1.875 1.836-6.484 4.18-7.578 4.727h-.118c-.038-.079 0-.157 0-.157 2.93-6.367 6.954-11.25 6.954-11.25s2.148 1.992 1.992 4.14Zm1.602 2.227v.04c.586 1.757-.196 3.242-.196 3.242-.82 1.836-2.46 2.383-2.46 2.383-.743.273-1.329.273-1.329.273-.117.039-4.687.039-5.898.039-.04 0-.078-.078-.078-.078 0-.04.039-.117.039-.117 3.36-2.266 9.922-5.782 9.922-5.782Z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneHuaweiIcon);
export default ForwardRef;
