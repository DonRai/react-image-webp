import React, {Component} from 'react';

/**
 * Default class for Image webp
 */
class Image extends Component {
    componentDidMount() {
        if (sessionStorage.getItem('react-webp') === null) {
            this.testWebP(this.setToSession());
        }
    }

    setToSession(support) {
        sessionStorage.setItem('react-webp', support ? '1' : '0');
    }

    testWebP(callback) {
        const webP = new Image();
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        webP.onload = webP.onerror = function () {
            callback(webP.height === 2);
        };
    };

    /**
     * Render jsx to html
     * @returns {XML}
     */
    render() {
        const {src, webp, alt, title} = this.props;
        const webpSupport = sessionStorage.getItem('react-webp');
        let image = null;

        if (webpSupport === '1') {
            image = <img src={webp} alt={alt} title={title}/>;
        } else if (webpSupport === '0') {
            image = <img src={src} alt={alt} title={title}/>;
        }

        return image;
    }
}

export default Image;