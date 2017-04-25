import React, {Component} from 'react';

/**
 * Default class for Image webp
 */
class Image extends Component {
    componentDidMount() {
        if (sessionStorage.getItem('react-webp') === null) {
            this.testWebP(this.notify());
        }
    }

    notify(support) {
        support
            ? sessionStorage.setItem('react-webp', '1')
            : sessionStorage.setItem('react-webp', '0')
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
        const {src, webp} = this.props;
        const webpSupport = sessionStorage.getItem('react-webp');
        let image = null;

        if(webpSupport === '1'){
            image = <img src={webp}/>;
        } else if(webpSupport === '0'){
            image = <img src={src}/>;
        }

        return image;
    }
}

export default Image;