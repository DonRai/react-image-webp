import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Image from 'react-image-webp';
import {isWebpSupported} from 'react-image-webp/dist/utils';

class TestImage extends Component {
    /**
     * Render jsx to html
     * @returns {XML}
     */
    render() {
        return (
            <Fragment>
                <h1>Check in browser network which type of image was rendered.</h1>
                <h2>This picture is {isWebpSupported() ? '.webp' : '.jpg'}</h2>
                <Image
                    className="image"
                    style={{width: '550px'}}
                    title="text"
                    alt="Alternate title"
                    src={require("./../static/images/1.jpg")}
                    webp={require("./../static/images/1.webp")}
                />
            </Fragment>
        );
    }
}

ReactDOM.render(<TestImage/>, document.getElementById('root'));
