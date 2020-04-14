declare module 'react-image-webp' {
  import React from 'react';
  interface ImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    webp?: string;
  }
  export default class Image extends React.Component<ImageProps, any> {}
}
declare module 'react-image-webp/dist/utils' {
  export function isWebpSupported(): boolean;
}
