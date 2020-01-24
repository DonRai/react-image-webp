import React from 'react';

import {isWebpSupported} from './utils';

/**
 * Default functional component for Image webp
 */
const Image = ({ src, webp, alt, title, style, className, ...rest }) => {
    const webpSupport = isWebpSupported();
    let image = src;

    if (webpSupport === true) {
      image = webp;
    }
    /**
    * Render jsx to html
    * @returns {XML}
    */
    return <img {...rest} src={image} alt={alt} title={title} style={style} className={className} />;
}

export default Image;
