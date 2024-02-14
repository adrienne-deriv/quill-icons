import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksHugoBossIcon = (
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
    <g clipPath='url(#c5bce8c8975d7e0aabb73f8b01f60540__a)'>
      <path
        fill='#060403'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M10.48 14.795a3.215 3.215 0 1 1 6.43-.004 3.215 3.215 0 0 1-6.43.004m3.213 2.943c1.26-.017 1.697-1.622 1.695-2.948-.001-1.326-.548-2.959-1.695-2.959-1.208 0-1.697 1.63-1.695 2.96.002 1.329.44 2.962 1.695 2.947'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M22.473 15.854c.062.698-.245 2-2.222 2.08-.874.035-1.971-.237-2.406-.439v-1.679h.218c.047.205.459 1.757 1.903 1.826.838.039 1.476-.312 1.491-1.01.018-.74-.736-1.036-1.485-1.33q-.1-.037-.197-.077c-.91-.364-1.793-.724-1.915-1.711-.148-1.149.92-1.931 2.139-1.881.639.03 1.27.165 1.864.402v1.412h-.215c-.123-.768-.587-1.494-1.635-1.555-.612-.039-1.173.19-1.174.857 0 .555.77.835 1.494 1.1q.22.079.425.159c.82.325 1.618.771 1.715 1.852z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M21.91 19.695c0 .412-.212.728-.68.728s-.68-.316-.68-.728.213-.727.68-.727.68.316.68.727m-.318 0c0-.243-.058-.512-.362-.512s-.362.269-.362.512c0 .244.059.514.362.514.304 0 .362-.27.362-.514'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M24.198 18.973c.253 0 .525.15.525.425h-.293a.22.22 0 0 0-.24-.237c-.159 0-.233.074-.233.177s.07.144.236.195a3 3 0 0 0 .214.062c.208.061.37.18.37.392 0 .276-.263.432-.549.432-.37 0-.592-.172-.592-.473h.296c0 .152.078.28.3.28.085 0 .233-.05.233-.197 0-.111-.064-.161-.25-.213l-.125-.037-.09-.026c-.194-.059-.334-.161-.334-.355 0-.272.279-.425.532-.425M10.996 19.876v.274a.8.8 0 0 1-.26.041c-.28 0-.399-.19-.399-.496 0-.305.108-.495.37-.495.175 0 .283.111.283.231h.297c0-.268-.238-.445-.597-.445-.285 0-.667.167-.667.706s.37.706.699.706c.194.005.388-.03.568-.105v-.646h-.563v.222zM8.06 19.755v-.737h.3v.85c0 .36-.266.534-.598.534-.333 0-.599-.174-.599-.535v-.849h.304v.737c0 .229.006.434.296.434s.296-.205.296-.434M4.59 19.78v.594h-.294v-1.355h.294v.535h.565v-.535h.298v1.355h-.295v-.595zM27.63 19.398c0-.275-.271-.425-.525-.425-.253 0-.532.153-.532.425 0 .194.14.296.334.355l.099.029c.043.013.087.027.116.034.187.052.251.102.251.213 0 .148-.148.198-.233.198-.222 0-.3-.129-.3-.281h-.296c0 .3.222.473.592.473.286 0 .55-.156.55-.432 0-.212-.163-.33-.371-.392l-.079-.022q-.068-.019-.135-.04c-.165-.05-.235-.092-.235-.195s.074-.177.233-.177a.22.22 0 0 1 .226.143q.018.046.014.094z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M14.307 19.696c0 .408-.21.72-.673.72s-.673-.312-.673-.72c0-.407.21-.72.673-.72s.673.312.673.72m-.32 0c0-.237-.057-.506-.353-.506-.297 0-.353.268-.353.506s.057.507.353.507.353-.27.353-.507M18.308 20.388c.277 0 .526-.133.526-.382a.34.34 0 0 0-.326-.34.32.32 0 0 0 .263-.303c0-.244-.188-.358-.477-.358h-.598v1.383zm-.317-.211v-.397h.268c.13 0 .243.04.243.195 0 .157-.118.203-.243.203zm0-.605v-.355h.274a.18.18 0 0 1 .192.18.19.19 0 0 1-.131.167.2.2 0 0 1-.074.008z'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M25.77 17.933c1.977-.079 2.286-1.381 2.223-2.079v.006c-.097-1.08-.906-1.53-1.714-1.852a16 16 0 0 0-.425-.16c-.724-.263-1.495-.544-1.495-1.1 0-.666.562-.895 1.173-.856 1.049.06 1.512.787 1.636 1.555h.214v-1.412a5.8 5.8 0 0 0-1.863-.402c-1.219-.05-2.283.732-2.139 1.88.122.988 1.004 1.348 1.915 1.712l.198.078c.748.293 1.502.589 1.483 1.33-.014.697-.653 1.048-1.49 1.01-1.445-.07-1.856-1.622-1.903-1.827h-.218v1.68c.435.2 1.532.473 2.405.437'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M4.15 17.601c.197.005.401-.085.401-.266v-5.157c0-.192-.209-.23-.34-.23h-.174v-.233h3.45c.868-.001 1.79.405 1.83 1.274.039.812-.77 1.383-1.453 1.493.434.038 1.822.276 1.806 1.63-.013 1.183-1.247 1.719-2.4 1.719H4v-.23zm1.797-2.953v2.933l.812.002c.824 0 1.473-.68 1.428-1.56-.037-.733-.514-1.375-1.425-1.375zm0-2.693v2.458l.726.004a1.2 1.2 0 0 0 1.203-1.277c-.033-.764-.578-1.185-1.245-1.185z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='c5bce8c8975d7e0aabb73f8b01f60540__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksHugoBossIcon);
export default ForwardRef;
