import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagKenyaIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#006700' d='M0 12h24v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path fill='#BD0000' d='M24 5H0v6h24z' />
    <path fill='#333' d='M2 0h20a2 2 0 0 1 2 2v2H0V2a2 2 0 0 1 2-2' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path fill='#fff' d='M24 4H0v1h24zM24 11H0v1h24z' />
    <path
      fill='#BD0000'
      fillRule='evenodd'
      d='M12 12.543c.357 0 2.5-2.015 2.5-4.5s-2.143-4.5-2.5-4.5-2.5 2.015-2.5 4.5 2.143 4.5 2.5 4.5'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillRule='evenodd'
      d='M10 9.543c.07 0 .5-.672.5-1.5s-.43-1.5-.5-1.5-.5.672-.5 1.5.43 1.5.5 1.5m4 0c.07 0 .5-.672.5-1.5s-.43-1.5-.5-1.5-.5.672-.5 1.5.43 1.5.5 1.5'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M12.5 8.043c0-.828-.224-1.5-.5-1.5s-.5.672-.5 1.5q0 .179.013.346L9.46 4.832c.182-.412-.096-1.166-.096-1.166s-.355-1.115-2.363-2.595c.276 2.48 1.064 3.345 1.064 3.345s.513.614.96.664l2.686 4.652-2.927 5.071.433.25L12 10.232l2.784 4.821.433-.25-2.928-5.071 2.685-4.65c.448-.049.961-.666.961-.666s.788-.865 1.066-3.344c-2.01 1.48-2.365 2.594-2.365 2.594s-.275.751-.094 1.164l-2.055 3.56q.012-.168.013-.347'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagKenyaIcon);
export default ForwardRef;
