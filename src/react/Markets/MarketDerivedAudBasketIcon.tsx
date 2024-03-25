import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedAudBasketIcon = (
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
    <g fill='#0AA0B0' fillRule='evenodd' clipRule='evenodd'>
      <path d='M17.515 4.857 21.8 12H27a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h5.2l4.286-7.143a1.766 1.766 0 0 1 3.029 0M13.185 12l2.729-4.605a.1.1 0 0 1 .172 0L18.815 12zM25.72 16a1 1 0 0 1 .97 1.242l-2.5 10a1 1 0 0 1-.97.758H8.78a1 1 0 0 1-.97-.758l-2.5-10A1 1 0 0 1 6.28 16zM10 20a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zm6-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m4 1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0z' />
    </g>
    <path
      fill='#0D47A1'
      d='M17 1.25C17 .56 17.56 0 18.25 0h12.5C31.44 0 32 .56 32 1.25v7.5c0 .69-.56 1.25-1.25 1.25h-12.5C17.56 10 17 9.44 17 8.75z'
    />
    <path
      fill='#fff'
      d='m20.828 6.678.195.655.626-.253c.053-.022.102.04.07.088l-.383.563.585.34c.05.028.033.106-.025.11l-.671.047.103.676c.01.058-.061.092-.1.05l-.455-.505-.456.504c-.039.043-.109.009-.1-.049l.104-.676-.672-.047c-.057-.004-.075-.082-.025-.11l.585-.34-.382-.563c-.033-.048.016-.11.07-.088l.625.253.195-.655a.058.058 0 0 1 .111 0m7.694.953.095.32.306-.124c.026-.01.05.02.034.043l-.187.275.286.166c.024.014.016.052-.012.054l-.329.023.051.33c.004.028-.03.045-.049.024l-.222-.246-.223.246c-.019.021-.053.004-.049-.024l.05-.33-.327-.023c-.028-.002-.037-.04-.012-.054l.285-.166-.186-.275c-.016-.023.008-.053.034-.043l.305.124.096-.32a.028.028 0 0 1 .054 0m.738-2.578c.01-.03.052-.03.061 0l.077.233.242.002c.031 0 .044.04.02.06l-.195.146.073.234c.009.03-.025.056-.05.037l-.197-.143-.197.143c-.026.019-.06-.006-.05-.037l.073-.234-.195-.146c-.025-.02-.012-.06.02-.06l.241-.002zm-2.864-.575.095.32.306-.124c.026-.01.05.02.033.044l-.186.275.285.165c.025.014.016.052-.012.054l-.328.023.05.33c.005.029-.03.045-.048.024l-.223-.246-.222.246c-.02.021-.053.005-.049-.023l.05-.33-.327-.024c-.029-.002-.037-.04-.013-.054l.286-.165-.186-.275c-.017-.024.007-.054.033-.044l.306.124.095-.32a.028.028 0 0 1 .055 0m4.137-1.05.096.32.305-.124c.026-.011.05.02.034.043l-.186.275.285.165c.025.015.016.052-.012.054l-.328.023.05.33c.005.029-.03.046-.048.025l-.223-.247-.222.247c-.02.02-.053.004-.05-.024l.052-.33-.329-.024c-.027-.002-.036-.04-.012-.054l.286-.165-.187-.275c-.015-.024.008-.054.034-.043l.306.123.095-.32a.028.028 0 0 1 .055 0m-2.011-1.404.095.32.306-.124c.026-.01.05.02.034.043l-.187.275.286.166c.024.014.016.052-.012.053l-.329.024.051.33c.004.028-.03.045-.049.024l-.222-.246-.223.246c-.019.02-.053.004-.049-.024l.05-.33-.327-.024c-.028-.002-.037-.04-.012-.053l.285-.166-.186-.275c-.016-.024.008-.054.034-.043l.305.123.096-.32a.028.028 0 0 1 .054 0M20.125 0v1.332L18.135.005a1.25 1.25 0 0 0-1.054.8l1.605 1.07H17v1.25h1.686L17 4.249V5h1.127l1.998-1.332V5h1.25V3.668L23.373 5H24.5v-.751l-1.686-1.124H24.5v-1.25h-1.686L24.5.751V0h-1.127l-1.998 1.332V0z'
    />
    <path fill='#F44336' d='M20.438 0v2.188H17v.624h3.438V5h.625V2.813H24.5v-.626h-3.437V0z' />
    <path
      fill='#F44336'
      d='m24.218 0-2.812 1.875h.563L24.5.188V0zM17 5h.282l2.812-1.875h-.563L17 4.812zM17.328.406l2.203 1.469h.563L17.577.197q-.139.09-.25.21M21.97 3.125l2.53 1.687V5h-.282l-2.812-1.875z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M30.75.625h-12.5a.625.625 0 0 0-.625.625v7.5c0 .345.28.625.625.625h12.5c.345 0 .625-.28.625-.625v-7.5a.625.625 0 0 0-.625-.625M18.25 0C17.56 0 17 .56 17 1.25v7.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25v-7.5C32 .56 31.44 0 30.75 0z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedAudBasketIcon);
export default ForwardRef;
