import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightTwentyFourHoursTradingIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 120 152'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#EBECEE'
      d='M108.619 92.732c-.71 2.56-2.177 7.667-5.981 13.151-.857 1.236-3.409 4.762-7.654 8.334a43 43 0 0 1-3.056 2.353l-14.436 7.07a35 35 0 0 0 2.15-1.228c17.784-11.002 18.419-33.52 18.51-36.762.248-8.844-2.124-15.78-3.363-19.297-3.735-10.611-9.567-17.446-11.948-20.04-7.243-7.886-14.74-11.576-16.66-12.485-2.771-1.31-6.485-3.03-11.703-3.86-3.863-.612-11.776-1.247-20.455 2.342l11.989-5.927a38 38 0 0 1 13.26-2.681c4.38-.087 7.678.618 9.568 1.032 1.52.335 7.318 1.692 14.03 5.63 2.11 1.238 8.522 5.204 14.559 12.69 1.196 1.484 5.373 6.82 8.62 14.953 3.381 8.468 3.975 15.506 4.113 17.527.222 3.269.597 9.508-1.54 17.198z'
    />
    <path
      fill='#000'
      d='M77.493 123.923a.284.284 0 0 1-.133-.534 35 35 0 0 0 2.135-1.218c7.415-4.588 12.72-11.7 15.768-21.138 1.088-3.366 2.422-8.769 2.607-15.391.253-8.974-2.269-16.137-3.345-19.196-3.3-9.373-8.287-16.018-11.89-19.943-6.477-7.05-13.163-10.808-16.573-12.42-2.524-1.194-6.339-2.998-11.626-3.837-4.843-.768-12.297-.987-20.302 2.324a.283.283 0 0 1-.233-.515l4.88-2.413 7.108-3.513.021-.01a38.1 38.1 0 0 1 13.359-2.703c4.493-.087 7.837.645 9.633 1.04 2.67.588 8.05 2.105 14.113 5.662 3.085 1.812 9.087 5.877 14.636 12.756 1.97 2.445 5.717 7.649 8.663 15.026 3.072 7.696 3.908 14.338 4.131 17.614.208 3.053.641 9.407-1.55 17.292-.631 2.273-2.109 7.598-6.022 13.235-1.183 1.708-3.755 5.068-7.703 8.391a44 44 0 0 1-3.076 2.367.2.2 0 0 1-.038.023l-14.437 7.07a.3.3 0 0 1-.124.029zM48.364 29.205c2.325 0 4.41.207 6.158.484 5.368.853 9.226 2.676 11.78 3.884C69.75 35.203 76.51 39 83.05 46.123c3.64 3.963 8.678 10.674 12.008 20.138 1.088 3.087 3.634 10.32 3.378 19.4-.187 6.69-1.535 12.147-2.634 15.549-2.748 8.512-7.313 15.159-13.589 19.806l9.573-4.688a43 43 0 0 0 3.018-2.324c3.898-3.281 6.437-6.596 7.602-8.279 3.858-5.56 5.318-10.819 5.942-13.065 2.165-7.792 1.737-14.08 1.53-17.103-.222-3.241-1.049-9.818-4.093-17.442-2.919-7.308-6.628-12.46-8.578-14.882-5.49-6.809-11.43-10.831-14.482-12.623-5.996-3.518-11.312-5.017-13.949-5.597-1.773-.389-5.074-1.113-9.501-1.027-4.497.087-8.92.982-13.15 2.658q-3.55 1.752-7.097 3.508l-.893.44a38 38 0 0 1 10.228-1.385z'
    />
    <path
      fill='#fff'
      d='M54.085 127.611c-6.452-.815-11.023-3.023-13.777-4.382-15.553-7.677-22.489-21.254-24.547-25.423-1.073-2.177-4.09-8.65-5.44-17.41-.657-4.27-.669-7.463-.664-8.405.03-6.45 1.29-11.298 1.735-12.897.832-2.981 2.444-8.555 6.847-14.395 5.48-7.271 12.024-10.626 13.664-11.43 9.492-4.649 18.403-3.961 22.578-3.298 5.22.827 8.932 2.55 11.703 3.86 1.92.908 9.417 4.598 16.66 12.486 2.382 2.594 8.213 9.427 11.95 20.04 1.239 3.518 3.61 10.452 3.362 19.298-.092 3.24-.726 25.76-18.51 36.762-10.54 6.521-21.742 5.679-25.56 5.198z'
    />
    <path
      fill='#000'
      d='M59.323 128.215c-2.116 0-3.92-.153-5.272-.324-6.63-.838-11.337-3.16-13.868-4.409-6.667-3.291-12.531-8.036-17.428-14.103a60 60 0 0 1-7.245-11.45c-1.505-3.05-4.217-9.38-5.466-17.49-.442-2.876-.68-5.877-.669-8.452.02-4.402.641-9.008 1.746-12.97.77-2.756 2.369-8.489 6.893-14.49C23.16 37.7 29.354 34.201 31.78 33.014c9.302-4.555 18.244-4.038 22.746-3.324 5.366.852 9.226 2.677 11.78 3.883 3.447 1.63 10.205 5.426 16.748 12.55 3.64 3.961 8.676 10.673 12.008 20.136 1.088 3.09 3.634 10.32 3.378 19.4-.188 6.695-1.536 12.152-2.634 15.549-3.09 9.57-8.476 16.785-16.01 21.445-4.56 2.822-9.747 4.594-15.416 5.265a43 43 0 0 1-5.058.295zm-5.201-.886c2.303.29 5.939.531 10.192.027 5.585-.662 10.694-2.406 15.185-5.184 7.415-4.588 12.72-11.699 15.769-21.138 1.086-3.363 2.42-8.763 2.606-15.39.254-8.974-2.268-16.137-3.346-19.197-3.3-9.374-8.288-16.019-11.89-19.942-6.479-7.054-13.164-10.81-16.573-12.422-2.525-1.193-6.34-2.996-11.626-3.835-4.437-.705-13.247-1.214-22.41 3.273-2.387 1.17-8.489 4.616-13.562 11.346-4.46 5.916-6.04 11.58-6.8 14.3-1.092 3.916-1.706 8.468-1.726 12.822-.011 2.546.224 5.514.662 8.362 1.238 8.036 3.924 14.306 5.413 17.327a59.6 59.6 0 0 0 7.18 11.345c4.845 6.003 10.645 10.697 17.238 13.951 2.499 1.234 7.15 3.531 13.688 4.355'
    />
    <path
      fill='#000'
      d='M53.862 79.058a.28.28 0 0 1-.174-.06l-8.533-6.67a.283.283 0 0 1 .35-.445l8.077 6.315.042-17.674c0-.156.128-.283.283-.283.156 0 .283.127.283.283l-.044 18.253a.28.28 0 0 1-.282.281zM40.668 51.795a.28.28 0 0 1-.255-.158l-3.29-6.76a.283.283 0 0 1 .507-.247l3.291 6.76a.283.283 0 0 1-.253.405M30.98 61.083a.3.3 0 0 1-.174-.059l-5.728-4.454a.283.283 0 0 1 .348-.447l5.728 4.454a.283.283 0 0 1-.174.506M27.352 75.148q-.02 0-.044-.003l-6.553-1.012a.283.283 0 0 1 .087-.558l6.552 1.011a.283.283 0 0 1-.042.563zM25.323 93.065a.284.284 0 0 1-.126-.537l5.652-2.778a.283.283 0 0 1 .25.508l-5.652 2.778a.3.3 0 0 1-.124.03M53.908 107.869c.155 0 .283.127.283.283v7.254a.284.284 0 0 1-.566 0v-7.254c0-.156.127-.283.283-.283M70.464 113.181a.28.28 0 0 1-.254-.159l-3.299-6.773a.283.283 0 0 1 .508-.248l3.298 6.774a.282.282 0 0 1-.253.406M82.58 101.622a.3.3 0 0 1-.174-.06l-5.673-4.435a.283.283 0 0 1 .35-.446l5.673 4.436a.283.283 0 0 1-.176.506zM87.103 84.058q-.022.001-.045-.005l-6.539-1.04a.283.283 0 0 1 .09-.56l6.538 1.042a.283.283 0 0 1-.044.563M76.916 67.871a.283.283 0 0 1-.124-.536l5.68-2.77a.283.283 0 0 1 .248.507l-5.681 2.771a.3.3 0 0 1-.125.028zM67.204 55.72a.283.283 0 0 1-.245-.423l3.292-5.754a.282.282 0 1 1 .49.281l-3.29 5.755a.28.28 0 0 1-.247.143zM53.908 49.692a.284.284 0 0 1-.283-.283v-7.17c0-.155.127-.282.283-.282s.283.127.283.283v7.17a.284.284 0 0 1-.283.282'
    />
    <path
      fill='#FF7E88'
      d='m27.31 115.194 14.11-13.511a5.9 5.9 0 0 1 2.21-1.464c1.535-.572 2.873-.316 3.633-.16 2.063.421 3.373 1.57 3.847 1.997 1.734 1.559 2.338 3.373 2.61 4.22.223.702.63 2.023.452 3.754-.07.672-.239 2.144-1.264 3.621a7 7 0 0 1-1.238 1.358l-19.408 18.45a6.54 6.54 0 0 1-2.755 1.358c-1.968.434-3.548-.203-4.234-.492a7.9 7.9 0 0 1-3.247-2.556l-9.704-12.247a7 7 0 0 1-.8-1.065c-.13-.213-.644-1.082-.958-2.609-.18-.876-.421-2.054-.16-3.568.136-.782.434-2.381 1.731-3.726a6.5 6.5 0 0 1 1.81-1.304c.41-.208 1.221-.611 2.317-.719 1.651-.163 2.924.443 3.542.745 1.178.579 1.958 1.355 2.716 2.111.425.424.756.806.984 1.085l3.808 4.725z'
    />
    <path
      fill='#000'
      d='M28.162 135.244c-1.421 0-2.513-.458-2.995-.661a8.2 8.2 0 0 1-3.365-2.648l-9.694-12.233a7.4 7.4 0 0 1-.825-1.101c-.247-.405-.706-1.295-.994-2.7-.183-.888-.433-2.106-.162-3.673.126-.73.423-2.439 1.807-3.875.76-.789 1.578-1.204 1.885-1.361.373-.189 1.246-.632 2.416-.748 1.764-.174 3.116.489 3.693.774 1.219.598 2.018 1.394 2.79 2.164.352.351.69.722 1.005 1.106l3.615 4.488 13.887-13.298a6.1 6.1 0 0 1 2.307-1.525c1.644-.611 3.094-.314 3.79-.171 2.18.445 3.534 1.663 3.98 2.063 1.827 1.642 2.43 3.536 2.69 4.344.212.663.652 2.044.464 3.868-.063.599-.225 2.187-1.314 3.754-.363.52-.793.994-1.282 1.407l-19.402 18.445-.014.013a6.85 6.85 0 0 1-2.876 1.416 6.5 6.5 0 0 1-1.409.152zm-11.347-28.461q-.255 0-.524.025c-1.065.105-1.843.5-2.216.691-.311.158-1.04.527-1.735 1.249-1.263 1.309-1.538 2.9-1.655 3.579-.253 1.461-.016 2.618.158 3.463.272 1.321.695 2.144.922 2.519a7 7 0 0 0 .78 1.036l9.704 12.248a7.6 7.6 0 0 0 3.135 2.47c.586.247 2.143.901 4.063.477a6.3 6.3 0 0 0 2.629-1.293l19.4-18.443.014-.011a6.8 6.8 0 0 0 1.188-1.303c1.005-1.447 1.152-2.877 1.215-3.488.175-1.707-.24-3.013-.442-3.639-.244-.765-.816-2.556-2.529-4.096-.417-.375-1.684-1.515-3.714-1.931-.694-.141-1.987-.406-3.48.147-.791.295-1.5.764-2.104 1.395l-14.12 13.52a.283.283 0 0 1-.415-.027l-3.808-4.725a14 14 0 0 0-.964-1.063c-.74-.736-1.505-1.499-2.641-2.056-.474-.233-1.515-.744-2.866-.744z'
    />
    <path
      fill='#FF444F'
      d='m33.782 109-6.47 6.195-3.807-4.727a15 15 0 0 0-.985-1.085c-.758-.755-1.537-1.53-2.715-2.109-.618-.303-1.891-.909-3.542-.745a6 6 0 0 0-1.723.442q3.884-1.9 7.767-3.797a6.35 6.35 0 0 1 2.942-.6c.997.044 1.737.325 2.25.519a8.3 8.3 0 0 1 2.249 1.279c.389.312.686.611.892.839z'
    />
    <path
      fill='#000'
      d='M27.314 115.477h-.018a.29.29 0 0 1-.203-.104l-3.807-4.727c-.287-.351-.621-.719-.965-1.062-.738-.736-1.5-1.497-2.64-2.055-.537-.262-1.79-.877-3.39-.718a5.7 5.7 0 0 0-1.64.422.283.283 0 0 1-.389-.31.28.28 0 0 1 .154-.206l3.092-1.511q2.34-1.142 4.676-2.286c1-.463 2.034-.674 3.079-.628 1.035.046 1.813.34 2.328.534a8.7 8.7 0 0 1 2.337 1.326c.333.269.645.562.925.869l3.15 3.799a.283.283 0 0 1-.023.385l-6.47 6.195a.28.28 0 0 1-.195.079zm-10.493-9.258c1.473 0 2.596.55 3.11.802 1.223.601 2.02 1.394 2.79 2.162.363.362.7.734 1.005 1.106l3.615 4.488 6.056-5.8-2.973-3.587a7.5 7.5 0 0 0-.851-.799 8 8 0 0 0-2.173-1.235c-.519-.197-1.216-.46-2.162-.501a6 6 0 0 0-2.81.575q-2.331 1.14-4.672 2.282l-1.034.505h.099z'
    />
    <path
      fill='#FF444F'
      d='M61.82 108.397a8.5 8.5 0 0 1-1.038 1.838l-.9.938-19.233 18.33a6.8 6.8 0 0 1-2.078 1.239l-7.173 3.324c.37-.22.658-.437.863-.609l19.408-18.45a7 7 0 0 0 1.24-1.358c1.025-1.477 1.194-2.949 1.264-3.621.178-1.731-.23-3.052-.453-3.753-.27-.848-.875-2.662-2.61-4.221-.473-.426-1.783-1.574-3.846-1.996-.675-.138-1.808-.356-3.13-.001q3.93-1.921 7.862-3.84a8.2 8.2 0 0 1 2.276-.24c2.096.076 3.556.943 3.874 1.138 1.38.852 2.102 1.918 2.616 2.696.461.7 1.475 2.277 1.657 4.572.164 2.063-.432 3.609-.599 4.014'
    />
    <path
      fill='#000'
      d='M31.4 134.349a.28.28 0 0 1-.25-.152.28.28 0 0 1 .106-.374c.293-.174.569-.368.82-.576l19.4-18.445.013-.011a6.8 6.8 0 0 0 1.19-1.303c1.004-1.447 1.152-2.877 1.214-3.488.176-1.704-.24-3.011-.441-3.639-.243-.765-.815-2.554-2.529-4.096-.417-.375-1.686-1.515-3.714-1.929-.598-.123-1.71-.35-3-.006a.283.283 0 0 1-.198-.527q2.6-1.27 5.2-2.54l2.663-1.302a.3.3 0 0 1 .055-.02 8.46 8.46 0 0 1 6.366.931c1.46.901 2.21 2.032 2.704 2.78.415.629 1.512 2.298 1.703 4.708a9.2 9.2 0 0 1-.618 4.144 8.9 8.9 0 0 1-1.095 1.925l-.9.938-19.242 18.338a7.1 7.1 0 0 1-2.164 1.296l-1.758.815q-2.702 1.251-5.404 2.505a.3.3 0 0 1-.12.026zm20.46-19.131q-9.292 8.832-18.583 17.665l3.409-1.578 1.768-.819.02-.008a6.6 6.6 0 0 0 1.99-1.187l19.225-18.322.879-.915a8.2 8.2 0 0 0 .993-1.762c.223-.543.727-2.01.578-3.884-.178-2.266-1.182-3.789-1.61-4.44-.469-.707-1.176-1.775-2.53-2.61a7.86 7.86 0 0 0-3.735-1.096c-.73-.025-1.46.05-2.168.224l-2.637 1.287-3.705 1.81c.66.013 1.205.125 1.57.2 2.18.445 3.534 1.662 3.978 2.062 1.829 1.643 2.433 3.537 2.69 4.345.213.665.652 2.047.464 3.868-.062.599-.225 2.187-1.314 3.754a7.3 7.3 0 0 1-1.283 1.407z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightTwentyFourHoursTradingIcon);
export default ForwardRef;
