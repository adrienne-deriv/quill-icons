import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTelegramCaptionIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M6 3.688c1.078.015 2.055.28 2.93.796a5.802 5.802 0 0 1 2.086 2.086c.515.875.78 1.852.797 2.93-.016 1.078-.282 2.055-.797 2.93a5.802 5.802 0 0 1-2.086 2.086c-.875.515-1.852.78-2.93.797-1.078-.016-2.055-.282-2.93-.797A5.803 5.803 0 0 1 .984 12.43C.47 11.555.204 10.578.188 9.5c.015-1.078.28-2.055.796-2.93A5.803 5.803 0 0 1 3.07 4.484c.875-.515 1.852-.78 2.93-.796m2.695 3.96v-.234a.348.348 0 0 0-.093-.164.452.452 0 0 0-.235-.07c-.078 0-.265.054-.562.164-.282.093-.813.304-1.594.633-.563.234-1.695.718-3.399 1.453-.265.11-.406.218-.421.328 0 .156.164.273.492.351.047 0 .094.008.14.024.141.062.297.11.47.14.171.047.312.07.421.07.188.016.398-.054.633-.21 1.578-1.078 2.398-1.625 2.46-1.64.032-.016.071-.009.118.023.031.046.04.078.023.093-.03.079-.203.258-.515.54-.297.296-.57.562-.82.796-.157.125-.243.203-.258.235l-.14.14c-.157.125-.25.25-.282.375-.047.11.047.25.281.422.234.14.445.274.633.399.187.14.414.297.68.468l.187.141c.234.188.477.281.727.281.172.016.304-.18.398-.586l.234-1.336c.094-.53.18-1.054.258-1.57.078-.531.133-.953.164-1.266' />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTelegramCaptionIcon);
export default ForwardRef;