import React, { Component } from 'react';

import {isWebpSupported} from './utils';

/**
 * Default class for Image webp
 */
class Image extends Component {
    /**
     * Render jsx to html
     * @returns {XML}
     */
    render() {
        const { src, webp, alt, title, style, className, ...rest } = this.props;
        const webpSupport = isWebpSupported();
        let image = src;

        if (webpSupport === true) {
            image = webp;
        }

        return <img {...rest} src={image} alt={alt} title={title} style={style} className={className} />;
    }
}

export default Image;
