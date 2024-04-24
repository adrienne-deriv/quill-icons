import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandDerivAcademyBrandLightIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 448 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path
        fill='#FF444F'
        d='m34.986 1.829-2.99 16.955H21.618c-9.682 0-18.911 7.845-20.622 17.527l-.724 4.12C-1.43 50.115 5.03 57.96 14.712 57.96h8.656c7.057 0 13.78-5.713 15.021-12.77L46.361 0zM27.622 43.59c-.382 2.18-2.344 3.954-4.524 3.954h-5.26c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.277-7.892h9.092zm87.292 14.367 6.81-38.634h10.772l-6.81 38.634h-10.781zm1.165-38.188-1.622 9.193c-5.104-1.586-10.369-1.081-11.987-.759q-2.621 14.881-5.245 29.764h-10.78L92.91 21.32c3.506-1.452 12.115-4.399 23.169-1.55m-43.677-.993h-8.385c-8.17 0-15.96 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.006c-2.72 0-4.543-2.204-4.057-4.933l.055-.326h27.027l1.543-8.752c1.44-8.17-4.01-14.79-12.18-14.79zm1.36 13.963-.063.557H57.63l.087-.493c.485-2.721 2.968-5.116 5.696-5.116h6.277c2.698 0 4.52 2.355 4.074 5.052m100.765-13.416c-3.672 9.763-12.088 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.194 3.49 1.757 16.438 3.54 25.483 4.892-8.8 10.284-20.345 12.531-25.483z'
      />
      <path
        fill='#414652'
        d='M200.222 58.405a30 30 0 0 1-.856-1.82 15 15 0 0 1-.726-2.122c-1.027.991-2.43 1.983-4.201 2.975q-2.655 1.487-6.668 1.487c-2.179 0-4.069-.35-5.672-1.04q-2.407-1.043-4.005-2.902-1.602-1.852-2.462-4.384-.863-2.52-1.05-5.568a28.5 28.5 0 0 1 1.073-9.735q1.381-4.752 4.495-8.47c2.079-2.473 4.751-4.48 8.025-6.016q4.91-2.304 11.672-2.304 2.005.001 4.708.447 2.702.445 4.698 1.488l-4.285 23.326a63 63 0 0 0-.43 3.271 19.4 19.4 0 0 0-.059 3.265c.07 1.143.237 2.292.509 3.459q.402 1.742 1.27 3.748zm-11.4-5.35q3.12-.002 5.266-1.337 2.148-1.343 3.671-3.12-.002-1.262.098-2.642c.067-.913.173-1.844.312-2.781l3.326-18.43q-.383-.143-1.241-.223a18 18 0 0 0-1.528-.072q-4.232 0-7.552 1.632c-2.212 1.094-4.067 2.54-5.564 4.347-1.5 1.808-2.606 3.918-3.326 6.319q-1.08 3.601-.837 7.54a17.8 17.8 0 0 0 .491 3.155c.265 1.07.683 2.008 1.253 2.824a6.8 6.8 0 0 0 2.203 2.007q1.346.78 3.428.78m24.044-8.919c-.207-3.368.099-6.608.922-9.728q1.237-4.681 3.989-8.247c1.834-2.376 4.144-4.275 6.933-5.684q4.178-2.122 9.749-2.122 2.452.001 4.703.339c1.498.223 2.936.652 4.312 1.3l-2.243 5.792c-.819-.442-1.769-.792-2.848-1.04q-1.623-.37-4.147-.369-3.64 0-6.44 1.596a14.55 14.55 0 0 0-4.68 4.233q-1.882 2.638-2.745 6.094-.866 3.455-.638 7.17a16 16 0 0 0 .632 3.64 8.2 8.2 0 0 0 1.636 3.012q1.119 1.297 2.91 2.043c1.195.496 2.685.738 4.466.738q1.336.001 2.807-.26a23.3 23.3 0 0 0 4.929-1.409q.978-.408 1.4-.78l.957 5.871q-1.358.89-4.277 1.741-2.918.86-6.707.859c-2.379 0-4.505-.363-6.381-1.076q-2.819-1.08-4.795-3.048-1.98-1.968-3.111-4.68-1.131-2.71-1.333-5.985m56.152 14.269a31 31 0 0 1-.855-1.82 15 15 0 0 1-.726-2.122q-1.543 1.487-4.201 2.975-2.656 1.487-6.668 1.487c-2.18 0-4.07-.35-5.672-1.04q-2.409-1.043-4.006-2.902-1.602-1.852-2.461-4.384-.863-2.52-1.05-5.568a28.5 28.5 0 0 1 1.073-9.735q1.381-4.752 4.494-8.47 3.117-3.71 8.025-6.016 4.912-2.304 11.673-2.304 2.004.001 4.707.447 2.703.445 4.699 1.488l-4.285 23.326a63 63 0 0 0-.431 3.271 19.5 19.5 0 0 0-.059 3.265c.071 1.143.238 2.292.509 3.459q.403 1.742 1.271 3.748zm-11.399-5.35q3.12-.002 5.265-1.337 2.149-1.343 3.672-3.12-.002-1.262.097-2.642c.068-.913.174-1.844.313-2.781l3.325-18.43q-.381-.143-1.241-.223a18 18 0 0 0-1.528-.072q-4.23 0-7.551 1.632c-2.212 1.094-4.067 2.54-5.564 4.347-1.5 1.808-2.607 3.918-3.327 6.319q-1.079 3.601-.836 7.54a17.8 17.8 0 0 0 .491 3.155c.265 1.07.682 2.008 1.252 2.824a6.8 6.8 0 0 0 2.204 2.007q1.345.78 3.428.78m54.065-2.752c.07 1.143.241 2.292.512 3.459q.403 1.742 1.27 3.748l-6.036.895c-.614-1.088-1.116-2.406-1.506-3.942q-1.546 1.487-4.201 2.975-2.66 1.487-6.671 1.487c-2.18 0-4.081-.339-5.706-1.004-1.628-.67-2.999-1.62-4.115-2.86q-1.675-1.86-2.575-4.42-.901-2.564-1.089-5.61a28.5 28.5 0 0 1 1.073-9.735q1.38-4.752 4.458-8.47 3.077-3.71 7.915-5.98 4.84-2.268 11.451-2.267c.545 0 1.091.03 1.641.078.547.049 1.12.121 1.722.224l3.09-17.389 7.134-1.185-7.802 43.46a125 125 0 0 0-.467 3.271 17 17 0 0 0-.098 3.265m-15.581 2.751q3.12-.001 5.231-1.3 2.115-1.297 3.642-3.01 0-1.187.103-2.564.1-1.371.371-3.005l3.317-18.574a8.4 8.4 0 0 0-1.496-.188 36 36 0 0 0-1.565-.036q-4.232 0-7.552 1.633-3.318 1.633-5.561 4.383c-1.499 1.832-2.605 3.954-3.325 6.355q-1.079 3.601-.836 7.54.105 1.711.573 3.27a9.2 9.2 0 0 0 1.359 2.781c.595.823 1.367 1.476 2.313 1.971q1.42.744 3.426.744m39.664 5.871c-2.524 0-4.729-.363-6.602-1.076q-2.819-1.08-4.79-2.975a12.85 12.85 0 0 1-3.02-4.42 16.5 16.5 0 0 1-1.221-5.35q-.32-5.198.943-10.031 1.262-4.826 3.93-8.544a19.86 19.86 0 0 1 6.696-5.907q4.026-2.187 9.3-2.188 3.046 0 5.287.78 2.239.781 3.695 2.116a9.25 9.25 0 0 1 2.233 3.083c.519 1.167.814 2.364.89 3.604q.214 3.494-.897 5.907a11.4 11.4 0 0 1-3.095 4.05q-1.981 1.635-4.712 2.522a40 40 0 0 1-5.708 1.415 56 56 0 0 1-6.048.707c-2.048.121-3.985.236-5.811.333-.027.393-.032.72-.016.967l.036.593c.07 1.136.273 2.219.607 3.228a6.54 6.54 0 0 0 1.688 2.679q1.186 1.15 3.196 1.82c1.339.447 3.073.665 5.204.665q1.411.001 2.92-.26a23 23 0 0 0 2.855-.665 34 34 0 0 0 2.401-.816c.7-.272 1.195-.532 1.476-.78l.956 5.865q-1.437.823-4.687 1.747c-2.166.617-4.734.931-7.706.931m-8.363-21.252q4.298-.147 7.841-.557 3.54-.41 6.077-1.408c1.694-.672 2.987-1.572 3.884-2.715q1.343-1.707 1.174-4.456a4.5 4.5 0 0 0-.347-1.415q-.307-.737-.976-1.372c-.446-.418-1.051-.768-1.808-1.04q-1.143-.408-2.776-.406-2.599 0-4.799 1.113a13.6 13.6 0 0 0-3.868 2.932q-1.67 1.825-2.786 4.239a21.6 21.6 0 0 0-1.616 5.085m70.293-19.167q3.265-.001 5.594 1.004 2.328 1.005 3.809 2.708 1.48 1.713 2.213 3.979.735 2.267.89 4.788a26 26 0 0 1-.042 3.532 34 34 0 0 1-.482 3.675l-3.539 19.766h-6.908l3.259-18.278q.263-1.706.617-3.827a18.4 18.4 0 0 0 .226-4.196 11.6 11.6 0 0 0-.505-2.751 6.3 6.3 0 0 0-1.254-2.304q-.84-.96-2.288-1.56-1.45-.591-3.528-.593-2.38-.001-4.55.932c-1.449.616-2.647 1.251-3.599 1.892.143.695.272 1.373.386 2.044.117.67.193 1.324.233 1.97.07 1.138.053 2.292-.048 3.453a52 52 0 0 1-.419 3.453l-3.54 19.765h-6.907l3.259-18.278c.175-1.137.371-2.425.578-3.864q.312-2.151.18-4.31a12.6 12.6 0 0 0-.463-2.71 6.5 6.5 0 0 0-1.144-2.267q-.765-.96-1.986-1.523-1.226-.555-3.081-.556-1.859-.002-3.59.223c-1.155.151-2.122.345-2.899.593l-5.864 32.692h-6.908l6.63-37.148q3.278-1.044 7.216-1.669 3.936-.635 7.057-.635c2.079 0 3.858.363 5.341 1.076q2.219 1.081 3.592 2.86c.475-.344 1.13-.744 1.971-1.185q1.256-.672 2.894-1.264 1.636-.596 3.576-1.04a18 18 0 0 1 4.023-.447m31.237 33.212a85 85 0 0 0 4.558-9.25q2.007-4.79 3.484-9.179 1.475-4.379 2.439-8.06c.642-2.448 1.089-4.42 1.345-5.907h7.207c-.431 1.887-1.052 4.227-1.872 7.02q-1.228 4.199-3.045 9.07a153 153 0 0 1-4.144 9.951 96 96 0 0 1-5.155 9.771 129 129 0 0 1-4.35 6.578q-2.191 3.077-4.762 5.345a20.1 20.1 0 0 1-5.761 3.567q-3.189 1.299-7.275 1.3-2.082-.001-3.895-.52c-1.21-.344-2.1-.72-2.669-1.112l2.029-5.647c.52.393 1.209.731 2.069 1.003q1.287.407 2.849.405c2.872 0 5.269-.689 7.188-2.08q2.884-2.076 5.345-5.495c-2.201-5.992-4.089-12.31-5.658-18.943a151 151 0 0 1-3.362-20.213h7.059a139 139 0 0 0 .822 7.322q.539 3.975 1.36 8.247t1.867 8.58a111 111 0 0 0 2.327 8.247'
      />
    </g>
    <defs>
      <clipPath id='41b1b4525c9f1186b8dc4d65399cc083__a'>
        <path fill='#fff' d='M0 0h448v72H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SubBrandDerivAcademyBrandLightIcon);
export default ForwardRef;
