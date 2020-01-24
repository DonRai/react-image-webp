declare module 'react-image-webp' {
  import React from 'react';
  interface ImageProps {
    src: string;
    webp?: string;
    alt?: string;
    title?: string;
    style?: { [ key: string ]: object };
    className?: string;
  }
  export default class Image extends React.Component<ImageProps, any> {}
}
declare module 'react-image-webp/dist/utils' {
  export function isWebpSupported(): boolean;
}