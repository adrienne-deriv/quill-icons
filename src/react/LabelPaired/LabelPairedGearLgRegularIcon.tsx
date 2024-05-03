import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearLgRegularIcon = (
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
      <path d='M8.71 6.984 8.165 8.86c-.117.47-.469.82-.86 1.016-.312.156-.585.313-.859.469-.351.273-.86.39-1.328.273l-1.875-.469h-.156c-.234.274-.43.547-.586.86l-.195.273c-.157.313-.313.625-.43.938 0 .039.04.117.078.156l1.367 1.367c.313.352.47.86.43 1.29v.976c.04.43-.117.898-.43 1.25l-1.367 1.406a.3.3 0 0 0-.078.156c.117.313.273.625.43.938l.156.273c.195.274.39.586.586.86h.195l1.875-.47c.469-.116.977 0 1.328.235.274.196.547.352.86.508.39.195.742.547.86 1.016l.546 1.875c0 .039.039.078.078.117.39.078.781.078 1.211.078.39 0 .781 0 1.172-.078.039-.04.078-.078.078-.117l.547-1.875c.117-.47.469-.82.86-1.016.312-.156.585-.312.859-.508.39-.234.859-.351 1.328-.234l1.875.469h.195c.195-.274.39-.586.586-.86l.156-.273c.157-.313.313-.625.43-.938a.3.3 0 0 0-.078-.156l-1.367-1.406a1.7 1.7 0 0 1-.43-1.25c0-.156.039-.313.039-.508 0-.156-.04-.312-.04-.469-.038-.43.118-.937.43-1.289l1.368-1.367a.3.3 0 0 0 .078-.156c-.117-.313-.273-.625-.43-.938l-.156-.273c-.195-.313-.39-.586-.586-.86h-.195l-1.875.47c-.469.116-.938 0-1.328-.235a6 6 0 0 0-.86-.508c-.39-.195-.742-.547-.86-1.016l-.546-1.875c0-.039-.04-.117-.078-.156-.39-.039-.781-.078-1.172-.078-.43 0-.82.04-1.21.078a.3.3 0 0 0-.08.156M10 5.5c.508 0 .977.04 1.484.117.079.04.118.04.196.078.351.196.664.547.78.938l.548 1.875c0 .078.078.195.195.234.352.156.703.352 1.016.586.117.078.234.117.312.078l1.914-.469c.39-.117.86-.039 1.211.196l.157.156c.273.313.507.703.742 1.094l.195.273v.04c.195.39.39.78.547 1.171.039.078.039.117.039.195.039.43-.117.86-.43 1.172l-1.367 1.407c-.039.039-.078.156-.078.273 0 .195.039.39.039.586s-.04.39-.04.586c0 .156.04.273.08.312l1.366 1.407c.313.312.469.742.43 1.172 0 .039 0 .117-.04.195-.155.39-.35.781-.546 1.172l-.195.312c-.235.39-.47.742-.782 1.094a.5.5 0 0 1-.117.156c-.351.235-.82.313-1.25.196l-1.875-.47c-.078-.038-.195 0-.312.079-.313.195-.664.39-1.016.586-.117.039-.195.156-.195.234l-.547 1.836c-.117.43-.43.781-.781.977-.078.039-.117.039-.196.078-.507.039-.976.078-1.484.078s-1.016-.04-1.523-.078c-.079-.04-.118-.04-.196-.078a1.64 1.64 0 0 1-.781-.977l-.547-1.836c0-.078-.078-.195-.195-.234a5.3 5.3 0 0 1-1.016-.586c-.117-.078-.234-.078-.312-.078l-1.875.469c-.43.117-.86.039-1.211-.196-.078-.039-.117-.078-.156-.117-.313-.352-.547-.742-.782-1.133l-.156-.273-.04-.04c-.194-.39-.39-.78-.546-1.171 0-.078-.039-.117-.039-.195 0-.43.117-.86.43-1.172l1.367-1.407c.039-.039.078-.156.078-.312v-1.172c0-.117-.04-.234-.078-.273l-1.367-1.407c-.313-.312-.43-.742-.43-1.171 0-.079.04-.118.04-.196.155-.39.35-.781.546-1.172l.039-.039.156-.273c.235-.39.508-.781.782-1.094a.3.3 0 0 1 .156-.156 1.46 1.46 0 0 1 1.21-.195l1.876.468c.078.04.195 0 .312-.078.313-.195.664-.43 1.016-.586.117-.039.195-.156.195-.234L7.5 6.633c.117-.39.43-.742.781-.938.078-.039.117-.039.196-.078A10 10 0 0 1 10 5.5m-2.187 10c0 .82.39 1.523 1.093 1.914.664.39 1.485.39 2.188 0a2.2 2.2 0 0 0 1.094-1.914c0-.781-.43-1.484-1.094-1.875-.703-.39-1.524-.39-2.188 0A2.1 2.1 0 0 0 7.812 15.5m5.625 0c0 1.25-.665 2.383-1.72 3.008-1.093.586-2.382.586-3.437 0-1.094-.625-1.719-1.758-1.719-3.008 0-1.21.625-2.344 1.72-2.969 1.054-.586 2.343-.586 3.437 0 1.054.625 1.719 1.758 1.719 2.969' />
    </g>
    <defs>
      <clipPath id='ec5aa89d17dfecc2f5f0fb3c7f38c8c1__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearLgRegularIcon);
export default ForwardRef;
