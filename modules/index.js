import React, {Component} from 'react';

/**
 * Default class for Image webp
 */
class Image extends Component {
    /**
     * Check browser webp support
     * @returns {boolean}
     */
    canUseWebP() {
        const elem = typeof document === 'object' ? document.createElement('canvas') : {};

        if (!!(elem.getContext && elem.getContext('2d'))) {
            // was able or not to get WebP representation
            return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        } else {
            // very old browser like IE 8, canvas not supported
            return false;
        }
    }

    /**
     * Render jsx to html
     * @returns {XML}
     */
    render() {
        const {src, webp, alt, title, style, className} = this.props;
        const webpSupport = this.canUseWebP();
        let image = src;

        if (webpSupport === true) {
            image = webp;
        }

        return <img src={image} alt={alt} title={title} style={style} className={className}/>;
    }
}

export default Image;