import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodPoliBrandDarkIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fillRule='evenodd' clipRule='evenodd'>
      <path
        fill='#D71635'
        d='M5.868 23.729h28.807c1.032 0 1.868.833 1.868 1.861v28.82a1.866 1.866 0 0 1-1.868 1.861H5.868A1.86 1.86 0 0 1 4 54.41V25.59c0-1.028.837-1.861 1.868-1.861'
      />
      <path
        fill='#fff'
        d='M65.366 40.543c.081.013.094.013.293.023 1.92.072 2.42-.407 2.723-.768.456-.56.466-1.816.466-2.98 0-.967.032-1.758-.664-2.516-.456-.501-1.582-.664-2.818-.664l.013.351v6.554zm-6.16 10.391v-21.25h5.509c2.024 0 3.924-.049 4.89.127.967.172 2.237.641 2.887 1.058.886.537 1.55 1.34 2.018 2.401.465 1.058.683 2.327.683 3.795 0 2.424-.52 4.321-1.802 5.577-1.283 1.26-4.11 1.797-6.58 1.797H65.4v6.485h-6.196zm56.363.186h-13.941V29.83h6.869v14.908h7.072zm1.314.068H124V36.951h-7.117zm0-15.581H124V29.83h-7.117z'
      />
      <path
        fill='#425BC9'
        d='M92.698 49.372c.885-.316 1.757-.99 2.516-1.676 2.131-1.936 4.367-5.23 4.194-9.235-.189-4.218-2.447-6.919-5.45-8.608.871.186 1.58.768 2.258 1.318 1.933 1.562 3.4 3.98 3.46 7.394.08 4.53-2.331 7.628-4.72 9.76.749-.375 1.331-1.062 1.888-1.735 1.585-1.9 3.04-4.602 3.04-7.98 0-4.75-2.689-7.484-5.826-9.28 1.042.302 1.96.92 2.727 1.571 1.9 1.608 3.59 4.439 3.352 8.188a12.98 12.98 0 0 1-4.084 8.757 14.66 14.66 0 0 1-8.819 3.983 9 9 0 0 1-1.311 0c-5.474-.456-9.447-3.96-9.867-9.34a10.3 10.3 0 0 1 0-1.675c.244-3.391 1.757-6.092 3.775-8.188 2.19-2.272 4.946-3.983 8.802-4.25.095-.423.212-.911.27-1.21 1.27 1.35 2.806 2.817 4.4 4.399-1.92.976-3.784 2.018-5.659 3.04.046-.385.13-.827.153-1.107-3.228.573-5.939 2.913-6.499 6.183-.686 3.996 1.979 7.062 5.822 7.081 3.88.023 7.173-2.968 7.755-6.391.478-2.773-.745-4.706-2.304-5.975 1.455.967 3.04 2.701 2.831 5.298-.325 4.052-4.133 7.42-8.129 7.442a7.15 7.15 0 0 1-5.51-2.574c1.302 1.898 3.587 2.9 6.184 2.724 2.037-.14 3.762-1.139 5.03-2.362 1.303-1.247 2.308-2.981 2.575-4.774a7.8 7.8 0 0 0 0-2.155c-.316-2.099-1.595-3.075-2.76-4.416 1.653 1.328 3.401 3.089 3.287 5.94-.179 4.171-4.159 7.849-8.34 8.128-2.737.19-4.426-.745-5.871-2.095 1.373 1.734 3.947 2.632 6.661 2.2 3.857-.606 7.29-3.818 7.713-7.81.37-3.603-1.448-5.279-3.193-7.05 1.852 1.41 3.434 2.962 3.55 5.835.105 2.493-1.115 4.937-2.677 6.5-2.493 2.492-7.349 4.132-11.123 1.838 3.215 2.457 8.2 1.048 10.856-1.36 1.92-1.748 3.329-4.078 3.098-7.55-.189-2.792-1.77-4.224-3.567-5.715 1.855.944 3.622 2.841 3.88 5.555.338 3.564-1.303 6.206-3.307 7.964-2.408 2.131-5.812 3.4-9.656 2.41 6.337 1.983 12.263-2.733 13.115-8.174.605-3.911-1.4-6.219-3.31-7.875-.195-.163-.302-.29-.569-.52 2.727 1.418 4.986 4.539 4.087 8.965-1.035 5.148-6.196 9.33-12.844 8.233.966.384 2.096.303 3.075.26 3.027-.166 5.763-1.679 7.231-3.31 1.783-1.981 3.19-4.47 2.913-8.07-.248-3.25-2.064-4.81-4.286-6.534.93.338 1.747.989 2.408 1.724 1.12 1.211 2.027 2.864 2.18 4.927.267 3.704-1.432 6.463-3.31 8.396-1.99 2.06-4.692 3.378-8.128 3.41 5.382.163 8.968-3.143 10.706-6.81.986-2.11 1.279-5.077.475-7.397-.745-2.142-2.457-3.613-4.146-4.797 2.945 1.572 5.415 4.52 4.882 9.096a10.8 10.8 0 0 1-1.54 4.458c-1.607 2.691-4.227 4.588-7.172 5.613 2.177-.475 4.25-1.78 5.763-3.456 1.865-2.063 3.297-4.67 3.203-8.282-.105-3.901-2.516-6.15-4.986-7.917.036 0 .085.023.098.023 2.688 1.314 4.725 3.612 5.145 7.159.732 5.65-2.972 9.753-6.395 11.881'
      />
      <path
        fill='#fff'
        d='M17.476 29.2a10.837 10.837 0 0 0 .007 20.745l-.01-20.75zm3.121-.46q-.376 0-.748.03v1.11a6.74 6.74 0 0 1 7.326 6.45 6.74 6.74 0 0 1-6.796 7.009V50.4h.228a10.83 10.83 0 0 0-.01-21.66M46.917 56.271V23.73h1.627V56.27z'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodPoliBrandDarkIcon);
export default ForwardRef;
